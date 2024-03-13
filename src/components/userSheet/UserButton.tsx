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
import { useState } from "react";
import { useParticipant } from "@/src/hooks/useParticipant";
import { Skeleton } from "../ui/skeleton";
import { ViewEditUserInfo } from "./ViewEditUserInfo";
import { LogoutButton } from "./logoutButton";

export const UserButton = () => {
  const { me } = useParticipant();
  const [isOpened, setIsOpened] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function onOpenChange() {
    if (isOpened) {
      setIsEdit(false);
    }
    setIsOpened(!isOpened);
  }

  return (
    <Sheet open={isOpened} onOpenChange={onOpenChange}>
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
        {me ? (
          <ViewEditUserInfo
            me={me}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setIsOpen={onOpenChange}
          />
        ) : (
          <SheetFooter>
            <div className="flex flex-row justify-between items-center w-full gap-6">
              <div className="w-full"></div>
              <SheetClose asChild>
                <LogoutButton />
              </SheetClose>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
