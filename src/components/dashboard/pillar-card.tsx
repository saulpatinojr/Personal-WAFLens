import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ReactNode } from "react";

type PillarCardProps = {
  title: string;
  score: number;
  icon: ReactNode;
};

export function PillarCard({ title, score, icon }: PillarCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{score}/100</div>
        <Progress value={score} className="mt-2 h-2" />
      </CardContent>
    </Card>
  );
}
