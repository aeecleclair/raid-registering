import { usePaymentUrl } from "@/src/hooks/usePaymentUrl";
import { useRouter } from "next/navigation";
import { WarningDialog } from "../../custom/WarningDialog";
import { useState } from "react";
import { Button } from "../../ui/button";
import { useParticipant } from "@/src/hooks/useParticipant";
import { usePrice } from "@/src/hooks/usePrice";
import { Separator } from "../../ui/separator";
import { HelloAssoButton } from "../../custom/HelloAssoButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/src/components/ui/tooltip";

export const PaymentButton = () => {
  const { me } = useParticipant();
  const { price } = usePrice();
  const { paymentUrl, isLoading, refetchUrl } = usePaymentUrl();
  const [isOpened, setIsOpened] = useState(false);
  const [isStudentWarningOpened, setIsStudentWarningOpened] = useState(false);
  const router = useRouter();
  if (!isLoading && !!paymentUrl) {
    router.push(paymentUrl.url);
  }
  const mustPayRegistering = !me?.payment;
  const isStudent = me?.student_card?.validation === "accepted";
  const isNotValidatedStudent =
    me?.student_card?.id !== undefined &&
    me?.student_card?.validation !== "accepted";
  const mustPayTShirt = me?.t_shirt_size && !me?.t_shirt_payment;

  return (
    <>
      <WarningDialog
        isOpened={isStudentWarningOpened}
        setIsOpened={setIsStudentWarningOpened}
        isLoading={isLoading}
        title="Payer l'inscription"
        description={
          <>
            <div className="mt-6 mb-2 font-semibold">
              Votre carte étudiante n'est pas encore validée !
            </div>
            <p>
              Votre carte étudiante n&apos;est pas encore validée, si vous
              procédez au paiement maintenant, vous payerez le tarif étudiant.
              Cependant, si votre carte est finalement refusée, il vous faudra
              repayer la différence entre le tarif étudiant et le tarif externe.
            </p>
          </>
        }
        customButton={
          <Button
            className="col-span-4 ml-auto w-[100px]"
            disabled={!mustPayRegistering}
            variant="default"
            onClick={(_) => {
              setIsOpened(true);
              setIsStudentWarningOpened(false);
            }}
          />
        }
      />
      <WarningDialog
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        isLoading={isLoading}
        title="Payer l'inscription"
        description={
          <div>
            <div className="my-2 font-semibold">Récapitulatif</div>
            <div className="space-y-2">
              {mustPayRegistering && (
                <div className="flex justify-between">
                  <span>Participation</span>
                  <span>
                    {(isStudent
                      ? price?.student_price!
                      : price?.external_price!) / 100}{" "}
                    €
                  </span>
                </div>
              )}
              {mustPayTShirt && (
                <div className="flex justify-between">
                  <span>T-Shirt taille {me.t_shirt_size}</span>
                  <span>{price?.t_shirt_price! / 100} €</span>
                </div>
              )}
              {mustPayRegistering && mustPayTShirt && (
                <>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>
                      {((isStudent
                        ? price?.student_price!
                        : price?.external_price!) +
                        price?.t_shirt_price!) /
                        100}{" "}
                      €
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="mt-6 mb-2 font-semibold">
              Information sur le prestataire de paiement
            </div>
            <p>
              Vous allez être redirigé vers HelloAsso pour procéder au paiement
              de votre inscription. Ce service ne prend aucun frais sur les
              paiements, il se repose uniquement sur les dons. Par défaut,
              HelloAsso vous propose de faire un don. Si vous choississez de le
              faire, seul HelloAsso en bénéficiera.
            </p>
          </div>
        }
        customButton={
          <HelloAssoButton isLoading={isLoading} onClick={() => refetchUrl()} />
        }
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              className="col-span-4 ml-auto w-[100px]"
              disabled={!mustPayRegistering}
              variant={isNotValidatedStudent ? "destructive" : "default"}
              onClick={(_) => {
                if (isNotValidatedStudent) {
                  setIsStudentWarningOpened(true);
                } else {
                  setIsOpened(true);
                }
              }}
            >
              Payer
            </Button>
          </TooltipTrigger>
          {!mustPayRegistering && (
            <TooltipContent>
              <p>Votre dossier est totalement validé !</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
