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
    name: 'VM-Prod-01',
    uuid: '123e4567-e89b-12d3-a456-426614174000',
    type: 'Virtual Machine',
    recommendation_action: 'Resize for cost savings',
    date: '2024-07-20',
    state: 'Active',
    cost: 125.50,
  },
  {
    name: 'Storage-West-Log-01',
    uuid: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    type: 'Storage Account',
    recommendation_action: 'Enable soft delete',
    date: '2024-07-19',
    state: 'Active',
    cost: 45.00,
  },
  {
    name: 'SQL-Primary-DB',
    uuid: 'b2c3d4e5-f6a7-8901-2345-67890abcdef1',
    type: 'SQL Database',
    recommendation_action: 'Increase DTUs',
    date: '2024-07-18',
    state: 'Warning',
    cost: 350.00,
  },
  {
    name: 'AppSvc-Main-Plan',
    uuid: 'c3d4e5f6-a7b8-9012-3456-7890abcdef12',
    type: 'App Service Plan',
    recommendation_action: 'Scale up instances',
    date: '2024-07-17',
    state: 'Active',
    cost: 75.20,
  },
  {
    name: 'Cosmos-Global-DB',
    uuid: 'd4e5f6a7-b8c9-0123-4567-890abcdef123',
    type: 'Cosmos DB',
    recommendation_action: 'Review indexing policy',
    date: '2024-07-16',
    state: 'Critical',
    cost: 210.00,
  },
];

export function ActionItemsTable() {

  const handleExport = () => {
    const headers = ["Name", "UUID", "Type", "Recommendation Action", "Date", "State", "Cost"];
    const csvContent = [
      headers.join(","),
      ...actionItems.map(item => 
        [
          item.name,
          item.uuid,
          item.type,
          `"${item.recommendation_action}"`,
          item.date,
          item.state,
          item.cost.toFixed(2)
        ].join(",")
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

  const getStateBadgeVariant = (state: string) => {
    switch (state.toLowerCase()) {
      case 'active':
        return 'success';
      case 'warning':
        return 'secondary';
      case 'critical':
        return 'destructive';
      default:
        return 'outline';
    }
  }

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
              <TableHead>Name</TableHead>
              <TableHead>UUID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Recommendation</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>State</TableHead>
              <TableHead className="text-right">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actionItems.map((item) => (
              <TableRow key={item.uuid}>
                <TableCell className="font-medium text-xs">{item.name}</TableCell>
                <TableCell className="truncate max-w-[150px] text-xs">{item.uuid}</TableCell>
                <TableCell className="text-xs">{item.type}</TableCell>
                <TableCell className="text-xs">{item.recommendation_action}</TableCell>
                <TableCell className="text-xs">{item.date}</TableCell>
                <TableCell>
                  <Badge variant={getStateBadgeVariant(item.state)}>
                    {item.state}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-xs">
                  ${item.cost.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
