"use client";

import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { pillar: "Reliability", score: 95 },
  { pillar: "Security", score: 82 },
  { pillar: "Cost", score: 60 },
  { pillar: "Excellence", score: 75 },
  { pillar: "Performance", score: 90 },
];

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function PillarObservanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pillar Observance</CardTitle>
        <CardDescription>
          An overview of your observance of the Well-Architected Framework pillars.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-8">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="pillar" />
            <PolarGrid />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="hsl(var(--border))" />
            <Radar
              dataKey="score"
              fill="var(--color-score)"
              fillOpacity={0.6}
              stroke="var(--color-score)"
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
