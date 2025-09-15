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
  value: number;
  icon: ReactNode;
  format?: "score" | "percentage" | "currency";
  subtitle?: string;
};

export function PillarCard({ title, value, icon, format = "score", subtitle }: PillarCardProps) {
  const renderValue = () => {
    switch (format) {
      case "percentage":
        return `${value}%`;
      case "currency":
        return `$${value.toLocaleString()}`;
      case "score":
      default:
        return `${value}/100`;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{renderValue()}</div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        {format === "score" && <Progress value={value} className="mt-2 h-2" />}
      </CardContent>
    </Card>
  );
}
