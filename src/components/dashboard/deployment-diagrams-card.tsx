import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DeploymentDiagramsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment Diagrams</CardTitle>
        <CardDescription>Map software components to infrastructure.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center h-48 bg-muted rounded-md">
          <p className="text-muted-foreground">Chart placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
