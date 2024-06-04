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
import { useInformation } from "@/src/hooks/useInformation";
import { LoadingButton } from "../../custom/LoadingButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { RaidInformation } from "@/src/api/hyperionSchemas";
import { DocumentDialog } from "../../custom/DocumentDialog";

interface RaidInformationDocumentProps {
  information: RaidInformation;
}

export const RaidInformationDocument = ({
  information,
}: RaidInformationDocumentProps) => {
  const { updateInformation } = useInformation();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    raid_information: z
      .object({
        name: z.string(),
        id: z.string(),
        type: z.string(),
        updated: z.boolean(),
      })
      .partial(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      raid_information: {
        name: information.raid_information_id ?? undefined,
        id: information.raid_information_id ?? undefined,
        type: "raid_information",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    if (!values.raid_information.id) {
      setIsLoading(false);
      return;
    }
    updateInformation(
      {
        raid_information_id: values.raid_information.id,
      },
      () => {
        setIsLoading(false);
        form.reset({ raid_information: values.raid_information });
      },
    );
  }

  const [open, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardLayout label="Fiche d'information">
          <FormField
            control={form.control}
            name="raid_information"
            render={({ field }) => (
              <FormItem>
                <div className="items-center gap-4">
                  <FormControl>
                    <Dialog open={open} onOpenChange={setIsOpen}>
                      <FormMessage />
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="col-span-4 w-full"
                          disabled={isUploading}
                        >
                          <div className="flex flex-row items-start w-full">
                            <>
                              {field.value.id ? (
                                <span className="text-gray-500 overflow-hidden">
                                  {field.value.id
                                    ? "Fiche d'information"
                                    : "Aucun fichier séléctionné"}
                                </span>
                              ) : (
                                <span className="font-semibold  mr-6">
                                  Choisir un fichier
                                </span>
                              )}
                            </>
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="md:max-w-2xl top-1/2">
                        <DialogHeader>
                          <DialogTitle className="text-red sm:text-lg">
                            {"Règlement du raid"}
                          </DialogTitle>
                        </DialogHeader>
                        <DocumentDialog
                          setIsOpen={setIsOpen}
                          setIsUploading={setIsUploading}
                          field={field}
                          fileType="raid_information"
                          participantId="admin"
                          documentId={field.value?.id}
                        />
                      </DialogContent>
                    </Dialog>
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <div className="flex flex-row">
            <LoadingButton
              className="mt-2 w-[120px]"
              type="submit"
              label="Modifier"
              isLoading={isLoading}
              disabled={isUploading || !form.formState.isDirty}
            />
          </div>
        </CardLayout>
      </form>
    </Form>
  );
};
