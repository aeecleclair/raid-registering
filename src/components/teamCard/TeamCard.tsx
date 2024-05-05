"use client";

import { Team } from "@/src/api/hyperionSchemas";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import {
  HiPencil,
  HiX,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { useState } from "react";
import { TeamEdit } from "./TeamEdit";
import {
  difficulties,
  difficultyDescriptions,
  getLabelFromValue,
  meetingPlaces,
} from "@/src/infra/comboboxValues";
import { TeamInfoCard } from "./TeamInfoCard";
import { useInformation } from "@/src/hooks/useInformation";
import { formatDateRange, getDaysLeft } from "@/src/utils/dateFormat";

interface TeamCardProps {
  team?: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { information } = useInformation();

  const isRegisteringOpen = information?.raid_registering_end_date
    ? getDaysLeft(information?.raid_registering_end_date) >= 0
    : false;

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  const informationCard = [
    {
      title: "Lieu de rendez-vous",
      value: getLabelFromValue(meetingPlaces, team?.meeting_place ?? undefined),
      description: "lieu de départ et d'arrivée",
      unit: <HiOutlineLocationMarker className="h-4 w-4" />,
    },
    {
      title: "Dates",
      value:
        information?.raid_start_date && information?.raid_end_date
          ? formatDateRange(
              information.raid_start_date,
              information.raid_end_date,
            )
          : "Dates non renseignées",
      description: "week-end complet",
      unit: <HiOutlineCalendar className="h-4 w-4" />,
    },
    {
      title: "Inscription",
      value: `${team?.validation_progress.toFixed(0)}%`,
      description: information?.raid_registering_end_date
        ? isRegisteringOpen
          ? `${getDaysLeft(
              information?.raid_registering_end_date,
            )} jours restants`
          : "Inscriptions fermées"
        : "Date de fin non renseignée",
      unit: <span>%</span>,
    },
    {
      title: "Parcours",
      value: getLabelFromValue(difficulties, team?.difficulty ?? undefined),
      description: getLabelFromValue(
        difficultyDescriptions,
        team?.difficulty ?? undefined,
      ),
      unit: undefined,
    },
  ];

  return (
    <Card className="w-full mt-5">
      <div className="flex flex-col">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle>
              {isEdit ? (
                <div>{"Éditer l'équipe"}</div>
              ) : (
                <>
                  {team?.name ? (
                    <div>{team?.name}</div>
                  ) : (
                    <Skeleton className="w-24 h-8" />
                  )}
                </>
              )}
            </CardTitle>
            {isEdit && team ? (
              <Button
                variant="destructive"
                onClick={toggleEdit}
                className="w-[110px]"
              >
                <HiX className="mr-2 h-4 w-4" />
                Annuler
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={toggleEdit}
                className="w-[110px]"
              >
                <HiPencil className="mr-2 h-4 w-4" />
                Éditer
              </Button>
            )}
          </div>
          <div className="h-4"></div>
          {isEdit && team ? (
            <TeamEdit team={team!} setIsEdit={setIsEdit} />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {informationCard.map((info) => (
                <TeamInfoCard
                  info={info}
                  key={info.title}
                  isLoaded={team !== undefined}
                />
              ))}
            </div>
          )}
        </CardHeader>
      </div>
    </Card>
  );
};
