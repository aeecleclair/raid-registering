"use client";

import { useAuth } from "../../hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useCodeVerifierStore } from "@/src/stores/codeVerifier";
import { useEffect, useState } from "react";
import { LoadingButton } from "../ui/loadingButton";

const Login = () => {
  const { token, isTokenExpired, login, isLoading, getTokenFromRequest } =
    useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { codeVerifier } = useCodeVerifierStore();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (
      code &&
      typeof window !== "undefined" &&
      !isLoading &&
      codeVerifier !== undefined &&
      !isLoggingIn
    ) {
      setIsLoggingIn(true);
      login(code, () => {
        router.replace("/");
      });
    }
  }, [code, isLoading, codeVerifier, login, router, isLoggingIn]);

  if (token !== null && !isTokenExpired()) {
    router.replace("/");
  }

  function connectMyECL(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getTokenFromRequest();
  }

  return (
    <LoadingButton
      isLoading={isLoading}
      onClick={connectMyECL}
      label="Se connecter"
    />
  );
};

export default Login;
