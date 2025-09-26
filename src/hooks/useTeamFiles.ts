import { useGetRaidTeamFilesZip } from "@/src/api/hyperionComponents";
import { useAuth } from "./useAuth";
import { useUser } from "./useUser";

export const useTeamFiles = () => {
  const { token, isTokenExpired } = useAuth();
  const { isAdmin } = useUser();

  const { refetch, isLoading } = useGetRaidTeamFilesZip<File>(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: token !== null && !isTokenExpired() && isAdmin(),
      retry: 0,
    },
  );

  return { isLoading, refetchTeamFiles: refetch };
};
