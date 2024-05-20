import { DocumentValidation, Participant, Team } from "@/src/api/hyperionSchemas";
import { Card } from "../ui/card";
import { ParticipantDocumentCard } from "./ParticipantDocumentCard";
import { DocumentView } from "../participantView/DocumentView";
import { useState } from "react";
import { useDocument } from "@/src/hooks/useDocument";
import { Document } from "@/src/api/hyperionSchemas";
import { useAdminTeam } from "@/src/hooks/useAdminTeam";
import { toast } from "../ui/use-toast";
import { useTeams } from "@/src/hooks/useTeams";

interface DocumentTabProps {
  team: Team;
}

export const DocumentTab = ({ team }: DocumentTabProps) => {
  const { getDocument, setDocumentValidation, isValidationLoading } = useDocument();
  const { refetchTeam } = useAdminTeam(team.id);
  const { refetchTeams } = useTeams();
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null,
  );
  const [selectedDocumentUser, setSelectedDocumentUser] = useState<
    string | null
  >(null);

  function setDocument(document: Document, userId: string) {
    setSelectedDocument(document);
    setSelectedDocumentUser(userId);
  }

  function downloadDocument(doc: Document, participant: Participant) {
    const key = doc.type;
    const file = getDocument(participant.id, key);
    if (file !== undefined) {
      const extension = file.type.split("/")[1];
      const name = `${participant.firstname}_${participant.name}_${key}.${extension}`;
      const url = window.URL.createObjectURL(new Blob([file]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
    }
  }

  function validateCallback(documentId: string, validation: DocumentValidation, callback: () => void)  {
    setDocumentValidation(documentId, validation, () => {
      refetchTeam();
      refetchTeams();
      callback();
      toast({
        title: "Document validé avec succès",
      });
    });
  }

  const key = selectedDocument?.type;
  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4">
      <Card>
        <ParticipantDocumentCard
          participant={team.captain}
          setDocument={(doc) => setDocument(doc, team.captain.id)}
          downloadDocument={(doc) => downloadDocument(doc, team.captain)}
          validateDocument={validateCallback}
          isValidationLoading={isValidationLoading}
        />
        {team.second && (
          <ParticipantDocumentCard
            participant={team.second}
            setDocument={(doc) => setDocument(doc, team.second!.id)}
            downloadDocument={(doc) => downloadDocument(doc, team.second!)}
            validateDocument={validateCallback}
            isValidationLoading={isValidationLoading}
          />
        )}
      </Card>
      {selectedDocument && key && selectedDocumentUser && (
        <DocumentView
          userId={selectedDocumentUser}
          documentKey={key}
          id={selectedDocument.id}
          file={getDocument(selectedDocumentUser, key)}
          width={450}
        />
      )}
    </div>
  );
};
