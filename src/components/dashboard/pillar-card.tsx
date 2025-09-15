import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { ReactNode } from "react";

type PillarCardProps = {
  title: string;
  icon: ReactNode;
  value: number;
  format: "currency" | "percentage" | "number";
  subtitle?: string;
};

function formatValue(value: number, format: PillarCardProps["format"]) {
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    case "percentage":
      return `${value}%`;
    case "number":
      return value.toString();
  }
}

export function PillarCard({ title, icon, value, format, subtitle }: PillarCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value, format)}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}
