"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { difficulties, meetingPlaces } from "@/src/infra/comboboxValues";
import { DataTableFilterCheckBox } from "./DataTableFilterCheckBox";
import { useMergeTeams } from "@/src/hooks/useMergeTeams";
import { TeamPreview } from "@/src/api/hyperionSchemas";
import { LoadingButton } from "../ui/loadingButton";
import { MergeIcon } from "lucide-react";
import { useTeams } from "@/src/hooks/useTeams";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const { refetchTeams } = useTeams();
  const { mergeTeams, isMergeLoading } = useMergeTeams();
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtrer les équipes..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("difficulty") && (
          <DataTableFacetedFilter
            column={table.getColumn("difficulty")}
            title="Parcours"
            options={difficulties}
          />
        )}
        {table.getColumn("meeting_place") && (
          <DataTableFacetedFilter
            column={table.getColumn("meeting_place")}
            title="Lieu de rendez-vous"
            options={meetingPlaces}
          />
        )}
        {table.getColumn("second") && (
          <DataTableFilterCheckBox
            column={table.getColumn("second")}
            title="Equipe sans coéquipier"
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Supprimer
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        {(table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()) && (
          <div className="">
            <LoadingButton
              onClick={() => {
                const selectedTeams = Object.keys(
                  table.getState().rowSelection,
                ).map((key) => table.getRow(key).original as TeamPreview);
                const teamIds = selectedTeams.map((team) => team.id);
                mergeTeams(teamIds[0], teamIds[1], () => {
                  refetchTeams();
                  table.resetRowSelection();
                });
              }}
              className="h-8 px-2 lg:px-3 lg:w-[105px] w-[40px]"
              disabled={Object.keys(table.getState().rowSelection).length !== 2}
              isLoading={isMergeLoading}
              label={
                <>
                  <span className="max-lg:hidden">Fusionner</span>
                  <MergeIcon className="lg:ml-2 h-4 w-4" />
                </>
              }
            />
            <Button
              variant="ghost"
              onClick={() => {
                table.resetRowSelection();
              }}
              className="ml-2 h-8 px-2 lg:px-3 lg:w-[105px] w-[40px]"
            >
              <span className="max-lg:hidden">Annuler</span>
              <Cross2Icon className="lg:ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
