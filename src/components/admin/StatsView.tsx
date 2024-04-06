"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { ChartView } from "./ChartView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { TeamPreview } from "@/src/api/hyperionSchemas";
import { getStats } from "@/src/infra/statsUtils";

interface StatsViewProps {
  teams?: TeamPreview[];
  isLoading: boolean;
}

export const StatsView = ({ teams, isLoading }: StatsViewProps) => {
  const [seeAll, setSeeAll] = useState(false);
  const { difficultyData, meetingPlaceData, bikeSizeData, tShirtSizeData, situationData } =
    getStats(seeAll, teams);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle>Statistiques</CardTitle>
          <CardDescription>
            {seeAll
              ? "Porte sur toutes les équipes"
              : "Ne porte que sur les équipes validées"}
          </CardDescription>
        </div>
        <div className="items-center space-x-2 grid gap-2">
          <Switch
            id="airplane-mode"
            checked={seeAll}
            onCheckedChange={setSeeAll}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="difficulty">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="difficulty">Parcours</TabsTrigger>
            <TabsTrigger value="meetingPlace">Départ</TabsTrigger>
            <TabsTrigger value="bikeSize">VTT</TabsTrigger>
            <TabsTrigger value="tShirtSize">T-Shirt</TabsTrigger>
            <TabsTrigger value="situation">Situation</TabsTrigger>
          </TabsList>
          <TabsContent value="difficulty">
            <ChartView data={difficultyData} />
          </TabsContent>
          <TabsContent value="meetingPlace">
            <ChartView data={meetingPlaceData} />
          </TabsContent>
          <TabsContent value="bikeSize">
            <ChartView data={bikeSizeData} />
          </TabsContent>
          <TabsContent value="tShirtSize">
            <ChartView data={tShirtSizeData} />
          </TabsContent>
          <TabsContent value="situation">
            <ChartView data={situationData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
