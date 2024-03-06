import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { useParticipant } from "@/src/hooks/useParticipant";
import { useState } from "react";
import { CreateParticipantField } from "./CreateParticipantField";
import { useUser } from "@/src/hooks/useUser";
import { Label } from "../ui/label";
import { DatePicker } from "../ui/datePicker";

export const CreateParticipant = () => {
  const { me: user } = useUser();
  const { me, isFetched } = useParticipant();
  const [isOpened, setIsOpened] = useState(false);

  if (isFetched && me === undefined && !isOpened) {
    setIsOpened(true);
  }
  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Avant de continuer</DialogTitle>
          <DialogDescription>
            Veuillez renseigner vos information pour pouvoir créer une équipe
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CreateParticipantField
            label="Prénom"
            id="firstname"
            defaultValue={user?.firstname}
            placeholder="Prénom"
          />
          <CreateParticipantField
            label="Nom"
            id="name"
            defaultValue={user?.name}
            placeholder="Nom"
          />
          <CreateParticipantField
            label="Email"
            id="email"
            defaultValue={user?.email}
            placeholder="inscription@raid.fr"
          />
          <CreateParticipantField
            label="Téléphone"
            id="phone"
            defaultValue={user?.phone ?? ""}
            placeholder="06 06 06 06 06"
          />
          <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="birthday" className="text-right">
        Date de naissance
      </Label>
      <DatePicker />
    </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};