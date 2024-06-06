import {
  useGetRaidParticipantsParticipantIdTeam,
  usePostRaidTeams,
  usePatchRaidTeamsTeamId,
} from "@/src/api/hyperionComponents";
import { TeamBase, TeamUpdate } from "../api/hyperionSchemas";
import { useQueryClient } from "@tanstack/react-query";
import { useUser } from "./useUser";
import { useParticipant } from "./useParticipant";
import { toast } from "../components/ui/use-toast";

export const useTeam = () => {
  const { me } = useParticipant();
  const { isAdmin } = useUser();
  const queryClient = useQueryClient();

  const {
    data: team,
    isLoading,
    refetch: refetchTeam,
  } = useGetRaidParticipantsParticipantIdTeam(
    {
      pathParams: {
        participantId: me!.id!,
      },
    },
    {
      enabled: me?.id !== undefined && !isAdmin() && me !== undefined,
      retry: 0,
      queryHash: "getTeamByParticipantId",
    },
  );

  const {
    mutate: mutateCreateTeam,
    isSuccess: isCreationSuccess,
    isPending: isCreationLoading,
  } = usePostRaidTeams({});

  const createTeam = (team: TeamBase, callback: () => void) => {
    mutateCreateTeam(
      {
        body: team,
      },
      {
        onSuccess(data, variables, context) {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamByParticipantId";
            },
          });
          callback();
        },
        onError(error, variables, context) {
          console.log(error);
          toast({
            title: "Erreur lors de la création de l'équipe",
            description:
              "Une erreur est survenue, veuillez réessayer plus tard",
            variant: "destructive",
          });
        },
      },
    );
  };

  const {
    mutate: mutateUpdateTeam,
    isSuccess: isUpdateSuccess,
    isPending: isUpdateLoading,
  } = usePatchRaidTeamsTeamId({});

  const updateTeam = (
    teamId: string,
    callback: () => void,
    team?: TeamUpdate,
  ) => {
    mutateUpdateTeam(
      {
        body: team,

        pathParams: {
          teamId,
        },
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: () => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
          refetchTeam();
          callback();
        },
      },
    );
  };

  return {
    team,
    isLoading,
    createTeam,
    isCreationLoading,
    isCreationSuccess,
    refetchTeam,
    updateTeam,
    isUpdateLoading,
    isUpdateSuccess,
  };
};
