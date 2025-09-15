import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HighLevelSystemDiagramsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>High-Level System or Container Diagrams</CardTitle>
        <CardDescription>Decompose the workload into major components and data flows.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center h-48 bg-muted rounded-md">
          <p className="text-muted-foreground">Chart placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
