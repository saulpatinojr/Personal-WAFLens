import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type PillarCardProps = {
  title: string;
  icon: ReactNode;
  value: number;
  format: "currency" | "percentage" | "number";
  subtitle?: string;
  iconBg?: string;
  slug: string;
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

export function PillarCard({ title, icon, value, format, subtitle, iconBg, slug }: PillarCardProps) {
  return (
    <Card className="relative overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105">
      <CardHeader className="pb-2">
        <div className={cn("p-2 rounded-md w-fit", iconBg)}>
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
      <Link href={slug} className="absolute bottom-2.5 right-2.5">
        <Badge variant="outline" className="text-[10px] px-2 py-0.5">info</Badge>
      </Link>
    </Card>
  );
}