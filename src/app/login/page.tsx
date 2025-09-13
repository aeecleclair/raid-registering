"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import MyECLButton from "../../components/login/MyECLButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex [&>div]:w-full h-screen">
      <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>
            Si vous possédez déjà un compte MyECL, vous pouvez vous connecter
            avec.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <MyECLButton />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button
            variant="link"
            onClick={() => {
              let redirectUri =
                process.env.NEXT_PUBLIC_BACKEND_URL +
                "/calypsso/register?external=true";

              router.push(redirectUri);
            }}
          >
            Créer un compte
          </Button>
          <Button
            variant="link"
            onClick={() => () => {
              let redirectUri =
                process.env.NEXT_PUBLIC_BACKEND_URL + "/calypsso/recover/";
              router.push(redirectUri);
            }}
          >
            Mot de passe oublié ?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
