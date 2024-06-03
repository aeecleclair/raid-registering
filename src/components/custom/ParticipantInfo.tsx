import {
  SecurityFile,
  Size,
  Document,
  DocumentValidation,
} from "@/src/api/hyperionSchemas";
import { Checkbox } from "../ui/checkbox";
import { Skeleton } from "../ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DocumentView } from "./DocumentView";
import { useDocument } from "@/src/hooks/useDocument";
import { SecurityFileDialogView } from "../home/participantView/SecurityFileDialogView";
import PhoneInput from "react-phone-input-2";
import { BadgeAlertIcon, CheckIcon, ClockIcon, XIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type ValueType =
  | string
  | Size
  | boolean
  | Document
  | SecurityFile
  | null
  | undefined
  | (string | null | undefined);

interface ParticipantInfoProps {
  label: string;
  value: ValueType;
  participantId?: string;
  isPhone?: boolean;
  placeholder?: string;
}

export const ParticipantInfo = ({
  label,
  value,
  participantId,
  placeholder,
  isPhone = false,
}: ParticipantInfoProps) => {
  const { getDocument } = useDocument();
  const isSize = (value: ValueType): value is Size => {
    return (
      value === "XS" ||
      value === "S" ||
      value === "M" ||
      value === "L" ||
      value === "XL"
    );
  };

  const isBoolean = (value: ValueType): value is boolean => {
    return typeof value === "boolean";
  };

  const isNull = (value: ValueType): value is null => {
    return value === null;
  };

  const isDocument = (value: ValueType): value is Document => {
    return typeof (value as Document)?.type === "string";
  };

  const isSecurityFile = (value: ValueType): value is SecurityFile => {
    return typeof (value as SecurityFile)?.asthma === "boolean";
  };

  const isString = (value: ValueType): value is string => {
    return typeof value === "string";
  };

  const validationIcon = (validation: DocumentValidation) => {
    switch (validation) {
      case "accepted":
        return <CheckIcon />;
      case "refused":
        return <XIcon />;
      case "pending":
        return <ClockIcon />;
      case "temporary":
        return <BadgeAlertIcon />;
    }
  };

  const validationLabel = (validation: DocumentValidation) => {
    switch (validation) {
      case "accepted":
        return "Le document a été accepté";
      case "refused":
        return "Le document a été refusé, veuillez le modifier et le renvoyer";
      case "pending":
        return "En attente de validation de la part de l'organisateur";
      case "temporary":
        return "Vous vous engagez à fournir le document dans les plus brefs délais";
    }
  };

  const securityValidationLabel = (validation: DocumentValidation) => {
    switch (validation) {
      case "accepted":
        return "Vous avez renseigné la personne à contacter en cas d'urgence";
      case "refused":
        return "Veuillez renseigner la personne à contact en cas d'urgence";
      case "pending":
        return "En attente de validation de la part de l'organisateur";
      case "temporary":
        return "Veuillez compléter la personne à contacter en cas d'urgence";
    }
  };

  const valueComponent = (value: ValueType) => {
    switch (true) {
      case isPhone && isString(value):
        return (
          <div className="col-span-4">
            <PhoneInput
              value={value}
              country={"fr"}
              specialLabel=""
              inputClass="bg-transparent text-right w-full"
              disabled
            />
          </div>
        );
      case isBoolean(value):
        return (
          <Checkbox
            checked={value}
            className="col-span-4 ml-auto disabled:opacity-100"
            disabled
          />
        );
      case isSize(value):
        return (
          <div className=" col-start-6 col-span-1">
            <div className="bg-zinc-200 px-2 rounded-md w-8 flex justify-center ml-auto dark:bg-zinc-700">
              <span>{value}</span>
            </div>
          </div>
        );
      case isDocument(value):
        const key = value.type as string;
        const file = getDocument(participantId!, key);
        return (
          <div className="flex flex-row justify-end items-center h-6 col-span-4 w-5/6 ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={null}
                  className="ml-auto max-w-full bg-zinc-200"
                >
                  <div className="flex flex-row items-start max-w-full">
                    <span className="text-gray-500 overflow-hidden">
                      {value.name ?? "Aucun fichier séléctionné"}
                    </span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-2xl top-1/2">
                <DialogHeader>
                  <DialogTitle className="text-red sm:text-lg">
                    {label}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-gray-500 overflow-hidden m-auto">
                    <DocumentView
                      userId={participantId!}
                      documentKey={key}
                      id={value.id}
                      file={file}
                    />
                  </span>
                </div>
              </DialogContent>
            </Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className="ml-4 h-4 w-4 shrink-0">
                  {validationIcon(value.validation)}
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex flex-row text-gray-500 items-center justify-center gap-2 w-[180px]">
                    {validationLabel(value.validation)}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      case isSecurityFile(value):
        return (
          <div className="flex flex-row w-full justify-end items-center h-6 col-span-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={null} className="col-span-4 px-4 bg-zinc-200 ">
                  <div className="flex flex-row items-start w-full">
                    <span className="text-gray-500 overflow-hidden">
                      {"Fiche sécurité" ?? "Aucun fichier séléctionné"}
                    </span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-2xl top-1/2">
                <DialogHeader>
                  <DialogTitle className="text-red sm:text-lg">
                    {label}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center">
                  <SecurityFileDialogView file={value} />
                </div>
              </DialogContent>
            </Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className="ml-4 h-4 w-4 shrink-0">
                  {validationIcon(value.validation)}
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex flex-row text-gray-500 items-center justify-center gap-2 w-[180px]">
                    {securityValidationLabel(value.validation)}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      case isString(value):
        return <span className="col-span-4 text-right">{value}</span>;
      case isNull(value):
        return (
          <span
            className={`${placeholder ?? "text-zinc-400"} col-span-4 text-right`}
          >
            {placeholder ?? "Non renseigné"}
          </span>
        );
      default:
        return <Skeleton className="w-24 h-6 col-span-4 text-right" />;
    }
  };

  return (
    <div className="grid p-2 grid-cols-6 items-center w-full">
      <span className="font-semibold text-left my-auto col-span-2">
        {label}
      </span>
      {valueComponent(value)}
    </div>
  );
};
