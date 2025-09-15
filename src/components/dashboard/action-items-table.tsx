import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const actionItems = [
  {
    resource: "Virtual Machine",
    date: "2024-07-15",
    amount: 125.50,
    status: "Approved",
  },
  {
    resource: "Storage Account",
    date: "2024-07-14",
    amount: 45.00,
    status: "Approved",
  },
  {
    resource: "SQL Database",
    date: "2024-07-13",
    amount: 350.00,
    status: "Declined",
  },
  {
    resource: "App Service Plan",
    date: "2024-07-12",
    amount: 75.20,
    status: "Approved",
  },
   {
    resource: "Cosmos DB",
    date: "2024-07-11",
    amount: 210.00,
    status: "Declined",
  },
];

export function ActionItemsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Action Items</CardTitle>
        <CardDescription>
          Recommended actions based on the analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actionItems.map((item) => (
              <TableRow key={item.resource}>
                <TableCell className="font-medium">{item.resource}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-right">
                  ${item.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={
                      item.status === "Approved" ? "success" : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
