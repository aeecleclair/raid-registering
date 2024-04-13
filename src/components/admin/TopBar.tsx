"use client";

import Link from "next/link";

import { Menu } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { ThemeButton } from "../ui/themeButton";
import { Skeleton } from "../ui/skeleton";
import { useUser } from "@/src/hooks/useUser";
import { LogoutButton } from "../userSheet/logoutButton";

export const TopBar = () => {
  const { me } = useUser();
  const currentPath = window.location.pathname;

  function buildNavigation(path: string, label: string) {
    const isPathSelected = currentPath === path;
    return (
      <Link
        href={path}
        className={`${isPathSelected ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
      >
        {label}
      </Link>
    );
  }

  function getNavigation() {
    return (
      <>
        {buildNavigation("/admin", "Tableau de bord")}
        {buildNavigation("/admin/teams", "Equipes")}
        {buildNavigation("/admin/information", "Informations")}
      </>
    );
  }

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-10 max-md:mx-0 w-full">
        {getNavigation()}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {getNavigation()}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4  mx-10 max-md:mx-0">
        <div className="flex flex-row ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
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
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="w-4"></div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
