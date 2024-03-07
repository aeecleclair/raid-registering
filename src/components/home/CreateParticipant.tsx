import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { CreateParticipantField } from "./CreateParticipantField";
import { DatePicker } from "../ui/datePicker";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CoreUser } from "@/src/api/hyperionSchemas";
import { addYears, toDate } from "date-fns";
import { toast } from "../ui/use-toast";
import { useParticipant } from "@/src/hooks/useParticipant";
import { ReloadIcon } from "@radix-ui/react-icons";

interface CreateParticipantProps {
  user: CoreUser;
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}

export const CreateParticipant = ({
  user,
  isOpened,
  setIsOpened,
}: CreateParticipantProps) => {
  const { createParticipant, me, isCreationLoading } = useParticipant();

  if (me !== undefined) {
    setIsOpened(false);
    toast({
      title: "Votre profil a été créé avec succès",
    });
  }

  const phoneRegex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$/);

  const formSchema = z.object({
    firstname: z.string(),
    name: z.string(),
    email: z.string().email({
      message: "Veuillez renseigner une adresse email valide",
    }),
    phone: z
      .string({
        required_error: "Veuillez renseigner un numéro de téléphone",
        invalid_type_error: "Veuillez renseigner un numéro de téléphone",
      })
      .regex(phoneRegex, {
        message: "Veuillez renseigner un numéro de téléphone valide",
      }),
    birthday: z.date({
      required_error: "Veuillez renseigner votre date de naissance",
      invalid_type_error: "Veuillez renseigner une date de naissance valide",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user.firstname,
      name: user.name,
      email: user.email,
      phone: user?.phone ?? "",
      birthday: user.birthday ? toDate(user.birthday) : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const dateString = values.birthday.toISOString().split("T")[0];
    createParticipant({
      ...values,
      birthday: dateString,
    });
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent className="sm:max-w-[600px]" hideClose>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Informations personnelles</DialogTitle>
              <DialogDescription>
                Veuillez renseigner vos information pour pouvoir créer une
                équipe
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <CreateParticipantField
                form={form}
                label="Prénom"
                id="firstname"
                placeholder="Prénom"
              />
              <CreateParticipantField
                form={form}
                label="Nom"
                id="name"
                placeholder="Nom"
              />
              <CreateParticipantField
                form={form}
                label="Email"
                id="email"
                placeholder="inscription@raid.fr"
              />
              <CreateParticipantField
                form={form}
                label="Téléphone"
                id="phone"
                placeholder="06 06 06 06 06"
              />
              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-5 items-center gap-4">
                      <FormLabel className="text-right">
                        Date de naissance
                      </FormLabel>
                      <div className="col-span-4">
                        <FormMessage />
                        <Controller
                          name="birthday"
                          control={form.control}
                          render={({ field: { onChange, value } }) => (
                            <DatePicker
                              date={value}
                              setDate={onChange}
                              defaultDate={value || addYears(new Date(), -21)}
                              {...field}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full mt-4">
                {isCreationLoading ? (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Valider"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
