import {
  Participant,
  Document,
  DocumentValidation,
} from "@/src/api/hyperionSchemas";
import { Accordion } from "../../../ui/accordion";
import { CardHeader, CardTitle, CardContent } from "../../../ui/card";
import { DocumentItem } from "./DocumentItem";
import { getSituationLabel } from "@/src/infra/teamUtils";

interface ParticipantDocumentCardProps {
  participant: Participant;
  setDocument: (document: Document) => void;
  downloadDocument: (document: Document) => void;
  validateDocument: (
    documentId: string,
    validation: DocumentValidation,
    callback: () => void,
  ) => void;
  isValidationLoading: boolean;
}

export const ParticipantDocumentCard = ({
  participant,
  setDocument,
  downloadDocument,
  validateDocument,
  isValidationLoading,
}: ParticipantDocumentCardProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle>
          {participant.firstname} {participant.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <DocumentItem
            value="Carte d'identité"
            document={participant.id_card}
            index={0}
            setDocument={setDocument}
            downloadDocument={downloadDocument}
            validateDocument={validateDocument}
          />
          <DocumentItem
            value="Certificat médical"
            document={participant.medical_certificate}
            index={1}
            setDocument={setDocument}
            downloadDocument={downloadDocument}
            validateDocument={validateDocument}
          />
          <DocumentItem
            value="Réglement"
            document={participant.raid_rules ?? null}
            index={2}
            setDocument={setDocument}
            downloadDocument={downloadDocument}
            validateDocument={validateDocument}
          />
          {["centrale", "otherschool"].includes(
            getSituationLabel(participant.situation ?? undefined) ?? "",
          ) && (
            <DocumentItem
              value="Carte étudiante"
              document={participant.student_card ?? null}
              index={3}
              setDocument={setDocument}
              downloadDocument={downloadDocument}
              validateDocument={validateDocument}
            />
          )}
          {participant.is_minor && (
            <DocumentItem
              value="Autorisation parentale"
              document={participant.parent_authorization ?? null}
              index={4}
              setDocument={setDocument}
              downloadDocument={downloadDocument}
              validateDocument={validateDocument}
            />
          )}
        </Accordion>
      </CardContent>
    </>
  );
};
