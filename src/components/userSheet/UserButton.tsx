import {
  Sheet,
  SheetContent,
  SheetDescription,
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
import { Moon, Sun, SunMoon } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import { useTheme } from "next-themes";

export const UserButton = () => {
  const { me } = useParticipant();
  // const { profilePicture } = useProfilePicture();
  const [isOpened, setIsOpened] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { setTheme } = useTheme();

  function onOpenChange() {
    if (isOpened) {
      setIsEdit(false);
    }
    setIsOpened(!isOpened);
  }

  function contactUs() {
    window.open("mailto:"); //TODO: retrieve email
  }

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          {me?.firstname === undefined || me?.name === undefined ? (
            <>
              {/* <Skeleton className="w-10 h-10 rounded-full" />
              <div className="mr-2" /> */}
              <Skeleton className="w-24 h-6" />
            </>
          ) : (
            <>
              {/* <Avatar className="mr-2 mb-1">
                {profilePicture && (
                  <AvatarImage
                    src={URL.createObjectURL(profilePicture)}
                    alt={me.firstname + " " + me.name}
                  />
                )}
                <AvatarFallback>
                  {me.firstname.charAt(0) + me.name.charAt(0)}
                </AvatarFallback>
              </Avatar> */}
              {me.firstname + " " + me.name}
            </>
          )}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Thème</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => setTheme("light")}>
                Clair
                <MenubarShortcut>
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => setTheme("dark")}>
                Sombre
                <MenubarShortcut>
                  <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => setTheme("system")}>
                Système
                <MenubarShortcut>
                  <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <Sheet open={isOpened} onOpenChange={onOpenChange}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 py-1.5 text-sm font-[400] w-full justify-start hover:bg-background"
              >
                Informations du compte
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
              <SheetHeader>
                <SheetTitle>Paramètres</SheetTitle>
                <SheetDescription>Information du compte</SheetDescription>
              </SheetHeader>
              {me && (
                <ViewEditUserInfo
                  me={me}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  setIsOpen={onOpenChange}
                />
              )}
            </SheetContent>
          </Sheet>
          <MenubarSeparator />
          <MenubarItem onClick={contactUs}>Nous contacter</MenubarItem>

          <MenubarSeparator />
          <LogoutButton />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
