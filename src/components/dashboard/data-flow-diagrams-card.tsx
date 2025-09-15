import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DataFlowDiagramsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Flow Diagrams (DFD)</CardTitle>
        <CardDescription>Illustrate how data moves, transforms, and is stored.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center h-48 bg-muted rounded-md">
          <p className="text-muted-foreground">Chart placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
