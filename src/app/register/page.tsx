"use client";

import * as React from "react";
import { Register } from "@/src/components/register/Register";
import { ActivateAccount } from "@/src/components/register/ActivateAccount";

const RegisterPage = () => {
  const [showRegister, setShowRegister] = React.useState(true);
  return showRegister ? (
    <Register onCodeReceived={() => setShowRegister(false)} />
  ) : (
    <ActivateAccount onCodeNotReceived={() => setShowRegister(true)} />
  );
};

export default RegisterPage;
