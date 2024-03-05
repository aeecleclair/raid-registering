import { useReadCurrentUserUsersMeGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";

export const useUser = () => {
  const { token } = useTokenStore();

  const { data: me, isLoading } = useReadCurrentUserUsersMeGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: token !== null,
      retry: 0,
    }
  );

  return { me, isLoading };
};