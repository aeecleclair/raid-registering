import { useQueryClient } from "@tanstack/react-query";
import {
  useGetRaidDocumentDocumentId,
  usePostRaidDocument,
  usePostRaidDocumentDocumentIdValidate,
} from "../api/hyperionComponents";
import { DocumentValidation, DocumentType } from "../api/hyperionSchemas";
import axios from "axios";
import { useDocumentsStore } from "../stores/documents";
import { useState } from "react";
import { useAuth } from "./useAuth";
import { toast } from "../components/ui/use-toast";
import { on } from "events";

export const useDocument = () => {
  const backUrl: string =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://hyperion.myecl.fr";
  const queryClient = useQueryClient();
  const { token } = useAuth();
  const { documents } = useDocumentsStore();
  const [documentId, setDocumentId] = useState<string>("");
  const { mutate: mutateUploadDocument } = usePostRaidDocument();

  const uploadDocument = (
    file: File,
    documentType: string,
    callback: (documentId: string) => void,
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${backUrl}/raid/document/${documentType}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status > 300) {
          console.error(response.data);
          toast({
            title: "Erreur lors de l'ajout du document",
            description:
              "Une erreur est survenue, veuillez réessayer plus tard",
            variant: "destructive",
          });
          return;
        }
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getDocument";
          },
        });
        const documentId = response.data.id as string;
        callback(documentId);
      });
  };

  const { data, refetch, isPending } = useGetRaidDocumentDocumentId<File>(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        documentId: documentId!,
      },
    },
    {
      enabled: documentId !== "" && documentId !== undefined,
    },
  );

  const { mutate: mutateValidateDocument, isPending: isValidationLoading } =
    usePostRaidDocumentDocumentIdValidate();

  const setDocumentValidation = (
    documentId: string,
    validation: DocumentValidation,
    callback: () => void,
  ) => {
    mutateValidateDocument(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          documentId: documentId,
        },
        queryParams: {
          validation: validation,
        },
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  const getDocument = (userId: string, key: string) => {
    if (key === "" || key === undefined) return undefined;
    if (documents[userId!] === undefined) return undefined;
    return documents[userId!][key]?.file;
  };

  return {
    uploadDocument,
    getDocument,
    data,
    refetch,
    isLoading: isPending,
    setDocumentId,
    documentId,
    setDocumentValidation,
    isValidationLoading,
  };
};
