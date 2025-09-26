import { useGetRaidTeamFilesZip } from "@/src/api/hyperionComponents";
import { useAuth } from "./useAuth";

export const useTeamFiles = () => {
  const { token } = useAuth();

  const { refetch, isLoading } = useGetRaidTeamFilesZip<File>(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: false,
      retry: 0,
    },
  );

  return { isLoading, refetchTeamFiles: refetch };
};
