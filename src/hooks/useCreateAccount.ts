import {
  useCreateUserByUserUsersCreatePost,
  useActivateUserUsersActivatePost,
} from "../api/hyperionComponents";
import {
  CoreUserCreateRequest,
  CoreUserActivateRequest,
} from "../api/hyperionSchemas";
import { useAuth } from "./useAuth";

export const useAccountCreation = () => {
  const { token } = useAuth();

  const { mutate: mutateRegister, isPending: isRegisteringLoading } =
    useCreateUserByUserUsersCreatePost();

  const registerAccount = (email: string, callback: () => void) => {
    const body: CoreUserCreateRequest = {
      email: email,
      accept_external: true,
    };
    mutateRegister(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body,
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  const { mutate: mutateActivateAccount, isPending: isActivationLoading } =
    useActivateUserUsersActivatePost();

  const activateAccount = (
    body: CoreUserActivateRequest,
    callback: () => void,
  ) => {
    mutateActivateAccount(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body,
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  return {
    registerAccount,
    isRegisteringLoading,
    activateAccount,
    isActivationLoading,
  };
};
