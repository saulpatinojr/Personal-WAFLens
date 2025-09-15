import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SequenceDiagramsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sequence Diagrams</CardTitle>
        <CardDescription>Show temporal ordering of interactions for a use case.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center h-48 bg-muted rounded-md">
          <p className="text-muted-foreground">Chart placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
