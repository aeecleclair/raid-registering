import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useAuth } from "@/src/hooks/useAuth";
import { HiLogout, HiPencil } from "react-icons/hi";
import { UserInfoView } from "./UserInfoView";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { useParticipant } from "@/src/hooks/useParticipant";
import { Skeleton } from "../ui/skeleton";
import { formatDate, toDate } from "date-fns";
import { fr } from "date-fns/locale";
import PhoneInput from "react-phone-input-2";
import { Label } from "../ui/label";

export const UserButton = () => {
  const { me } = useParticipant();
  const { logout } = useAuth();

  const [isOpened, setIsOpened] = useState(false);

  function showToast() {
    setIsOpened(false);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès",
    });
  }

  return (
    <Sheet open={isOpened} onOpenChange={setIsOpened}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          {me?.firstname === undefined || me?.name === undefined ? (
            <Skeleton className="w-24 h-6" />
          ) : (
            <>{me.firstname + " " + me.name}</>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Paramètres</SheetTitle>
          <SheetDescription>Information du compte</SheetDescription>
        </SheetHeader>
        <div className="grid w-full items-center gap-6">
          <UserInfoView label="Prénom" value={me?.firstname} />
          <UserInfoView label="Nom" value={me?.name} />
          <UserInfoView label="Email" value={me?.email} />
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="phone" className="font-bold">
              Téléphone :
            </Label>
            <PhoneInput
              value={me?.phone}
              country={"fr"}
              specialLabel=""
              disabled
            />
          </div>
          <UserInfoView
            label="Date de naissance"
            value={
              me?.birthday
                ? formatDate(toDate(me!.birthday), "PPP", { locale: fr })
                : "Non renseigné"
            }
          />
        </div>
        <SheetFooter>
          <div className="flex flex-row justify-between items-center w-full">
            <Button variant="ghost" onClick={showToast}>
              <HiPencil className="mr-2 h-4 w-4" />
              Éditer
            </Button>
            <SheetClose asChild>
              <Button variant="destructive" onClick={logout}>
                <HiLogout className="mr-2 h-4 w-4" />
                Se déconnecter
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
