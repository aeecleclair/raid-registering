import { useConfirmPaymentRaidParticipantParticipantIdPaymentPost } from "../api/hyperionComponents";
import { useAuth } from "./useAuth";

export const usePayment = () => {
  const { token } = useAuth();

  const { mutate: mutateValidatePayment, isPending: isLoading } =
    useConfirmPaymentRaidParticipantParticipantIdPaymentPost();

  const validatePayment = (participantId: string, 
    callback: () => void,

  ) => {
    mutateValidatePayment(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          participantId: participantId,
        },
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  return { validatePayment, isLoading };
};
