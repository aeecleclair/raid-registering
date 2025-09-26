import { useGetRaidSecurityFilesZip } from "@/src/api/hyperionComponents";
import { useAuth } from "./useAuth";

export const useSecurityFiles = () => {
  const { token } = useAuth();

  const { refetch, isLoading } = useGetRaidSecurityFilesZip<File>(
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

  return { isLoading, refetchSecurityFiles: refetch };
};
