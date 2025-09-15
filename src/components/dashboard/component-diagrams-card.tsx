import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ComponentDiagramsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Component Diagrams</CardTitle>
        <CardDescription>Detail specific technologies and integration points.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center h-48 bg-muted rounded-md">
          <p className="text-muted-foreground">Chart placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
