import {
  useRecoverUserUsersRecoverPost,
  useResetPasswordUsersResetPasswordPost,
} from "../api/hyperionComponents";
import {
  BodyRecoverUserUsersRecoverPost,
  ResetPasswordRequest,
} from "../api/hyperionSchemas";
import { useAuth } from "./useAuth";

export const useRecoverPassword = () => {
  const { token } = useAuth();

  const { mutate: mutateRecoverPassword, isPending: isRecoverLoading } =
    useRecoverUserUsersRecoverPost();

  const recoverPassword = (email: string, callback: () => void) => {
    const body: BodyRecoverUserUsersRecoverPost = {
      email: email,
    };
    mutateRecoverPassword(
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

  const { mutate: mutateResetPassword, isPending: isResetLoading } =
    useResetPasswordUsersResetPasswordPost();

  const resetPassword = (
    password: string,
    code: string,
    callback: () => void,
  ) => {
    const body: ResetPasswordRequest = {
      new_password: password,
      reset_token: code,
    };
    mutateResetPassword(
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

  return { recoverPassword, isRecoverLoading, resetPassword, isResetLoading };
};
