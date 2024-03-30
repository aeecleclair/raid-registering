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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CoreUser } from "@/src/api/hyperionSchemas";
import { addYears, toDate } from "date-fns";
import { toast } from "../ui/use-toast";
import { useParticipant } from "@/src/hooks/useParticipant";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useTeam } from "@/src/hooks/useTeam";
import { useInviteTokenStore } from "@/src/stores/inviteTokenStore";

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
  const { createParticipant } = useParticipant();
  const { createTeam, refetchTeam } = useTeam();
  const { inviteToken } = useInviteTokenStore();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    firstname: z.string().min(1, {
      message: "Veuillez renseigner votre prénom",
    }),
    name: z.string().min(1, {
      message: "Veuillez renseigner votre nom",
    }),
    email: z.string().email({
      message: "Veuillez renseigner une adresse email valide",
    }),
    phone: z
      .string({
        required_error: "Veuillez renseigner un numéro de téléphone",
        invalid_type_error: "Veuillez renseigner un numéro de téléphone",
      })
      .min(11, {
        message: "Veuillez renseigner un numéro de téléphone valide",
      })
      .max(14, {
        message: "Veuillez renseigner un numéro de téléphone valide",
      }),
    birthday: z.date({
      required_error: "Veuillez renseigner votre date de naissance",
      invalid_type_error: "Veuillez renseigner une date de naissance valide",
    }),
  });

  function getPhone(value?: string): string {
    if (!value) {
      return "";
    }
    if (value.startsWith("0")) {
      return `+33 ${value.slice(1)}`;
    }
    return value;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user.firstname,
      name: user.name,
      email: user.email,
      phone: getPhone(user?.phone ?? ""),
      birthday: user.birthday ? toDate(user.birthday) : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const dateString = values.birthday.toISOString().split("T")[0];
    setIsLoading(true);
    createParticipant(
      {
        ...values,
        birthday: dateString,
      },
      () => {
        if (inviteToken === undefined) {
        createTeam(
          {
            name: `Équipe de ${values.firstname} ${values.name}`,
          },
          () => {
            refetchTeam();
            setIsOpened(false);
            setIsLoading(false);
            toast({
              title: "Votre profil a été créé avec succès",
            });
          },
        );
        } else {
          console.log("join Team");
        }
      },
    );
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
              <FormField
                control={form.control}
                name="phone"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-5 items-center gap-4">
                      <FormLabel className="text-right">Téléphone</FormLabel>
                      <div className="col-span-4">
                        <FormMessage />
                        <Controller
                          name="phone"
                          control={form.control}
                          render={({ field: { onChange, value } }) => (
                            <PhoneInput
                              value={value}
                              onChange={onChange}
                              country={"fr"}
                              specialLabel=""
                              placeholder="+33 6 06 06 06 06"
                              inputClass="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              dropdownClass="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                            />
                          )}
                        />
                      </div>
                    </div>
                  </FormItem>
                )}
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
                {isLoading ? (
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
