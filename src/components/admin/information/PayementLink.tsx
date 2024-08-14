import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Input } from "../../ui/input";
import { CardLayout } from "./CardLayout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoadingButton } from "../../custom/LoadingButton";
import { useInformation } from "@/src/hooks/useInformation";

export const PaymentLink = () => {
  const { information, updateInformation } = useInformation();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    payment_link: z.string().min(1, {
      message: "Veuillez renseigner le lien de paiement",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payment_link: information?.payment_link ?? undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    updateInformation(
      {
        payment_link: values.payment_link,
      },
      () => {
        setIsLoading(false);
        setIsEdit(false);
        form.reset({
          payment_link: values.payment_link,
        });
      },
    );
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardLayout label="Lien du paiement">
          {isEdit ? (
            <>
              <FormField
                control={form.control}
                name="payment_link"
                render={({ field }) => (
                  <FormItem>
                    <div className="items-center gap-4">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-row">
                <Button
                  variant="outline"
                  className="mt-2 mr-2 w-[120px]"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  Annuler
                </Button>
                <LoadingButton
                  className="mt-2 w-[120px]"
                  type="submit"
                  label="Valider"
                  isLoading={isLoading}
                />
              </div>
            </>
          ) : (
            <>
              <div
                className={`$information?.payment_link && "text-green-700 hover:text-green-800 underline"} text-2xl font-bold h-8`}
              >
                {information?.payment_link ? (
                  <a target="_blank" href={information?.payment_link}>
                    {"Lien de paiement"}
                  </a>
                ) : (
                  <span>{"Aucun lien"}</span>
                )}
              </div>
              <Button
                variant="outline"
                className="mt-4 w-[120px]"
                type="button"
                onClick={toggleEdit}
              >
                Modifier
              </Button>
            </>
          )}
        </CardLayout>
      </form>
    </Form>
  );
};
