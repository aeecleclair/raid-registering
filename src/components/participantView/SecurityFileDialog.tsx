import { useSecurityFile } from "@/src/hooks/useSecurityFile";
import { Button } from "../ui/button";
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";
import { SecurityFile } from "@/src/api/hyperionSchemas";
import { TextSeparator } from "../ui/textSeparator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { BadgeAlertIcon, ClockIcon } from "lucide-react";
import { HiCheck, HiX } from "react-icons/hi";

interface SecurityFileDialogProps {
  setIsOpen: (value: boolean) => void;
  form: any;
}

export const SecurityFileDialog = ({
  setIsOpen,
  form,
}: SecurityFileDialogProps) => {
  const { setSecurityFile } = useSecurityFile();

  const validation = form.watch("securityFile.validation");
  const isValidated = validation === "accepted";
  const isRefused = validation === "refused";
  const isTemporary = validation === "temporary";
  const isPending = !isValidated && !isRefused && !isTemporary;

  function onValidate(_: any) {
    form.setValue("securityFile.updated", true);
    if (form.getValues("securityFile.id") === undefined) {
      form.setValue("securityFile.id", crypto.randomUUID());
    }
    const securityFile: SecurityFile = {
      ...form.getValues("securityFile"),
    };
    setSecurityFile(securityFile, () => {});
    setIsOpen(false);
  }

  function getAsthma() {
    return (
      <>
        <EditParticipantCardItem
          label="Asthme"
          id="securityFile.asthma"
          form={form}
          type={ValueTypes.BOOLEAN}
        />
        {form.watch("securityFile.asthma") && (
          <>
            <EditParticipantCardItem
              label="Passage en soins intensifs"
              id="securityFile.intensive_care_unit"
              form={form}
              type={ValueTypes.BOOLEAN}
            />
            {form.watch("securityFile.intensive_care_unit") && (
              <>
                <EditParticipantCardItem
                  label="Date de passage en soins intensifs"
                  id="securityFile.intensive_care_unit_when"
                  form={form}
                  type={ValueTypes.STRING}
                />
              </>
            )}
          </>
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="medical">
          <AccordionTrigger>
            <div className="flex flex-row mr-auto items-center">
              {"Informations médicales"}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div>
              <EditParticipantCardItem
                label="Allergies"
                id="securityFile.allergy"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
              {getAsthma()}
              <EditParticipantCardItem
                label="Traitement en cours"
                id="securityFile.ongoing_treatment"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
              <EditParticipantCardItem
                label="Maladies"
                id="securityFile.sicknesses"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
              <EditParticipantCardItem
                label="Hospitalisation"
                id="securityFile.hospitalization"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
              <EditParticipantCardItem
                label="Opération chirurgicale"
                id="securityFile.surgical_operation"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
              <EditParticipantCardItem
                label="Traumatisme"
                id="securityFile.trauma"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
              <EditParticipantCardItem
                label="Antécédents familiaux"
                id="securityFile.family"
                form={form}
                type={ValueTypes.STRING}
                className="py-[6px]"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="emergencyPerson">
          <AccordionTrigger>
            <div className="flex flex-row mr-auto items-center">
              {isValidated && <HiCheck className="mr-4" />}
              {isRefused && <HiX className="mr-4" />}
              {isTemporary && <BadgeAlertIcon className="mr-4 h-4 w-4" />}
              {isPending && <ClockIcon className="mr-4 h-4 w-4" />}
              {"Personne à prévenir en cas d'urgence"}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <EditParticipantCardItem
              label="Prénom"
              id="securityFile.emergency_person_firstname"
              form={form}
              type={ValueTypes.STRING}
            />
            <EditParticipantCardItem
              label="Nom"
              id="securityFile.emergency_person_name"
              form={form}
              type={ValueTypes.STRING}
            />
            <EditParticipantCardItem
              label="Téléphone"
              id="securityFile.emergency_person_phone"
              form={form}
              type={ValueTypes.PHONE}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="mt-6" type="button" onClick={onValidate}>
        Valider
      </Button>
    </div>
  );
};
