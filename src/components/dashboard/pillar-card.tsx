import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex flex-col">
         <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {subtitle && <CardDescription className="text-xs text-muted-foreground">{subtitle}</CardDescription>}
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value, format)}</div>
      </CardContent>
       <CardFooter className="gap-2">
          <Button variant="outline">View Details</Button>
        </CardFooter>
    </Card>
  );
}
