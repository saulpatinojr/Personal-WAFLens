import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";


type PillarCardProps = {
  title: string;
  icon: ReactNode;
  value: number;
  format: "currency" | "percentage" | "number";
  subtitle?: string;
  iconBg?: string;
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
      return new Intl.NumberFormat('en-US').format(value);
  }
}

export function PillarCard({ title, icon, value, format, subtitle, iconBg }: PillarCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className={cn("p-2 rounded-md", iconBg)}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value, format)}</div>
        <p className="text-xs text-muted-foreground">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}
