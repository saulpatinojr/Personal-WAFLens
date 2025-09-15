import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContextDiagramsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Context Diagrams</CardTitle>
        <CardDescription>Show the workload as a black box in its environment.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center h-48 bg-muted rounded-md">
          <p className="text-muted-foreground">Chart placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
