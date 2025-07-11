import { Button } from "@/src/components/ui/button";
import { useState } from "react";
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
import { usePrice } from "@/src/hooks/usePrice";
import { LoadingButton } from "../../custom/LoadingButton";
import { PriceInput } from "../../ui/PriceInput";

export const RaidExternalPrice = () => {
  const { price, updatePrice } = usePrice();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    external_price: z.number().positive(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      external_price: price?.external_price
        ? price.external_price / 100
        : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    updatePrice(
      {
        ...price,
        external_price: values.external_price * 100,
      },
      () => {
        setIsLoading(false);
        setIsEdit(false);
        form.reset({ external_price: values.external_price });
      },
    );
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardLayout label="Tarif externe">
          {isEdit ? (
            <>
              <FormField
                control={form.control}
                name="external_price"
                render={({ field }) => (
                  <FormItem>
                    <div className="items-center gap-4">
                      <FormControl>
                        <PriceInput
                          onChange={(value, name, values) =>
                            field.onChange(values?.float)
                          }
                          value={field.value}
                        />
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
              <div className="text-2xl font-bold">
                {price?.external_price ? (
                  `${(price.external_price / 100).toFixed(2)} €`
                ) : (
                  <span>{"Prix non fixé"}</span>
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
