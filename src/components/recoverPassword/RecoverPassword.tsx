import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextSeparator } from "../ui/textSeparator";
import { Form } from "../ui/form";
import { PasswordInput } from "../ui/passwordInput";
import { CreateAccountFormField } from "../createAccount/CreateAccountFormField";

interface RecoverPasswordProps {
  onCodeNotReceived: () => void;
}

export const RecoverPassword = ({
  onCodeNotReceived,
}: RecoverPasswordProps) => {
  const formSchema = z
    .object({
      activation_code: z
        .string({
          required_error: "Veuillez renseigner le code d'activation",
        })
        .min(8, {
          message: "Le code d'activation doit contenir 8 caractères",
        }),
      password: z
        .string({
          required_error: "Veuillez renseigner un mot de passe",
        })
        .min(6, {
          message: "Le mot de passe doit contenir au moins 6 caractères",
        }),
      confirmPassword: z
        .string({
          required_error: "Veuillez confirmer le mot de passe",
        })
        .min(6, {
          message: "Le mot de passe doit contenir au moins 6 caractères",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex [&>div]:w-full h-screen">
          <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700">
            <CardHeader>
              <CardTitle className="text-xl">
                Réinitialiser le mot de passe
              </CardTitle>
              <CardDescription>
                {"Entrez le code d'activation et votre nouveau mot de passe"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2 mb-2">
                  <CreateAccountFormField
                    form={form}
                    name="activation_code"
                    label="Code d'activation"
                    render={(field) => (
                      <InputOTP
                        maxLength={8}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        {...field}
                      >
                        <InputOTPGroup className="w-full">
                          {[...Array(8)].map((_, index) => (
                            <InputOTPSlot
                              index={index}
                              key={index}
                              className="w-full"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    )}
                  />
                </div>
                <TextSeparator text="Nouveau mot de passe" />
                <CreateAccountFormField
                  form={form}
                  name="password"
                  label="Mot de passe"
                  render={(field) => <PasswordInput {...field} />}
                />
                <CreateAccountFormField
                  form={form}
                  name="confirmPassword"
                  label="Confirmer le mot de passe"
                  render={(field) => <PasswordInput {...field} />}
                />
                <Button type="submit" className="w-full mt-2">
                  Réinitialiser le mot de passe
                </Button>
                <div className="flex flex-row">
                  <div className="w-full text-center text-sm">
                    Vous avez déjà un compte ?{" "}
                    <Button variant="link" className="pl-1" type="button">
                      <Link href="/login">Connectez-vous</Link>
                    </Button>
                  </div>
                  <div className="w-full text-center text-sm">
                    {"Vous n'avez pas reçu le code par mail ? "}
                    <Button
                      variant="link"
                      className="pl-1"
                      onClick={onCodeNotReceived}
                      type="button"
                    >
                      Revenir
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </Form>
  );
};
