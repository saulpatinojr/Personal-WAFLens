"use client";

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
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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

  const handleExport = () => {
    const headers = ["Resource", "Date", "Amount", "Status"];
    const csvContent = [
      headers.join(","),
      ...actionItems.map(item => 
        [item.resource, item.date, item.amount.toFixed(2), item.status].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "action-items.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Action Items</CardTitle>
          <CardDescription>
            Recommended actions based on the analysis.
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
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
