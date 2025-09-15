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
  description: string;
  icon: ReactNode;
};

export function PillarCard({ title, description, icon }: PillarCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="pt-2 text-sm text-muted-foreground">{description}</CardDescription>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
      </CardContent>
       <CardFooter className="gap-2">
          <Button variant="destructive">Issues</Button>
          <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90">Recommendations</Button>
        </CardFooter>
    </Card>
  );
}
