import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { useTeams } from "@/src/hooks/useTeams";
import { Skeleton } from "../ui/skeleton";

export const TeamsPreview = () => {
  const { teams, isLoading } = useTeams();
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Equipes</CardTitle>
          <CardDescription>
            Aperçu des dernières équipes inscrites
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/admin/teams">
            Voir tout
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead className="max-md:hidden">Capitaine</TableHead>
              <TableHead className="max-md:hidden">Coéquipier</TableHead>
              <TableHead className="max-md:hidden">Parcours</TableHead>
              <TableHead className="text-right">Inscription</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <>
                {[...Array(10)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell className=" ml-auto text-right">
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {teams && (
              <>
                {teams.slice(0, 10).map((team) => (
                  <TableRow key={team.id}>
                    <TableCell>{team.name}</TableCell>
                    <TableCell className="max-md:hidden">
                      <div className="font-medium">
                        {team.captain?.firstname} {team.captain?.name}
                      </div>
                      <div className="text-sm text-muted-foreground max-md:hidden">
                        {team.captain?.email}
                      </div>
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      {team.second ? (
                        <>
                          <div className="font-medium">
                            {team.second.firstname} {team.second.name}
                          </div>
                          <div className="text-sm text-muted-foreground max-md:hidden">
                            {team.second.email}
                          </div>
                        </>
                      ) : (
                        <div className="font-medium">Non renseigné</div>
                      )}
                    </TableCell>
                    <TableCell className="max-md:hidden">
                      <Badge className="text-xs" variant="outline">
                        {team.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">?</TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
