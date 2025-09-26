import { useGetRaidSecurityFilesZip } from "@/src/api/hyperionComponents";
import { useAuth } from "./useAuth";
import { useUser } from "./useUser";

export const useSecurityFiles = () => {
  const { token, isTokenExpired } = useAuth();
  const { isAdmin } = useUser();

  const { refetch, isLoading } = useGetRaidSecurityFilesZip<File>(
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

  return { isLoading, refetchSecurityFiles: refetch };
};
