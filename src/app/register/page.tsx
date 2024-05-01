"use client";

import * as React from "react";
import { Register } from "@/src/components/createAccount/Register";
import { ActivateAccount } from "@/src/components/createAccount/ActivateAccount";

const RegisterPage = () => {
  const [showRegister, setShowRegister] = React.useState(true);
  return showRegister ? (
    <Register onCodeReceived={() => setShowRegister(false)} />
  ) : (
    <ActivateAccount onCodeNotReceived={
      () => setShowRegister(true)
    }/>
  );
};

export default RegisterPage;
