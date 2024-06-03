"use client";

import { TeamInfoCard } from "@/src/components/home/teamCard/TeamInfoCard";
import { TopBar } from "@/src/components/admin/TopBar";
import { TeamsPreview } from "@/src/components/admin/TeamsPreview";
import { StatsView } from "@/src/components/admin/StatsView";
import { useUser } from "@/src/hooks/useUser";
import { useRouter } from "next/navigation";
import { useTeams } from "@/src/hooks/useTeams";
import { Participant } from "@/src/api/hyperionSchemas";
import { formatDate, getDaysLeft } from "@/src/utils/dateFormat";
import { useInformation } from "@/src/hooks/useInformation";

const Dashboard = () => {
  const { isAdmin } = useUser();
  const { teams, isLoading } = useTeams();
  const { information } = useInformation();
  const router = useRouter();

  const allParticipants =
    (teams
      ?.map((team) => [team.captain, team.second])
      .flat(1)
      .filter((participant) => participant !== null) as Participant[]) ?? [];

  const allPayments = allParticipants
    ?.map((participant) => (participant.payment ? 1 : 0))
    .reduce<number>((a, b) => a + b, 0);

  const isRegisteringOpen = information?.raid_registering_end_date
    ? getDaysLeft(information?.raid_registering_end_date) >= 0
    : false;

  const informationCard = [
    {
      title: "Participants inscrits",
      value: allParticipants?.length.toString() || "0",
      description: "inscription débutée",
      unit: undefined,
    },
    {
      title: "Paiements efectués",
      value: allPayments?.toString() || "0",
      description: `${allParticipants?.length - allPayments} paiements manquants`,
      unit: undefined,
    },
    {
      title: "Equipes validées",
      value:
        teams
          ?.filter((team) => team.validation_progress === 100)
          .length.toString() || "0",
      description: "dossier complet validé et payé",
      unit: undefined,
    },
    {
      title: "Cloture des inscriptions",
      value: information?.raid_registering_end_date
        ? formatDate(information?.raid_registering_end_date)
        : "Date non renseignée",
      description: information?.raid_registering_end_date
        ? isRegisteringOpen
          ? `${getDaysLeft(
              information?.raid_registering_end_date,
            )} jours restants`
          : "Inscriptions fermées"
        : "Date de fin non renseignée",
      unit: undefined,
    },
  ];

  if (!isAdmin() && typeof window !== "undefined") {
    router.replace("/?redirect=/admin");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <TopBar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {informationCard.map((info) => (
            <TeamInfoCard info={info} key={info.title} isLoaded={!isLoading} />
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 xl:grid-cols-3">
          <TeamsPreview teams={teams} isLoading={isLoading} />
          <StatsView teams={teams} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
