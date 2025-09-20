'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';

interface OrderCardProps {
  title: string;
  value: string;
  day: string;
  data: any[];
  lineColor?: string;
}

const lightColorMap: { [key: string]: string } = {
    '#eab308': '#fef9c3', // yellow
    '#3b82f6': '#dbeafe', // blue
    '#f97316': '#ffedd5', // orange
};

export function OrderCard({ title, value, day, data, lineColor }: OrderCardProps) {
  const [selected, setSelected] = useState(false);
  const [activeData, setActiveData] = useState<any | null>(null);

  const handleChartClick = (e: any) => {
    if (e && e.activePayload && e.activePayload.length > 0) {
        setActiveData(e.activePayload[0].payload);
    }
  };

  const renderOptimizationChart = () => {
    const gradientOffset = () => {
      const dataMax = Math.max(...data.map((i) => i.uv));
      const dataMin = Math.min(...data.map((i) => i.uv));
    
      if (dataMax <= 0) {
        return 0;
      }
      if (dataMin >= 0) {
        return 1;
      }
    
      return dataMax / (dataMax - dataMin);
    };

    const off = gradientOffset();

    return (
        <ResponsiveContainer width="100%" height={50}>
            <AreaChart data={data} onClick={handleChartClick} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="#10b981" stopOpacity={1} />
                        <stop offset={off} stopColor="#ef4444" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="black"
                    strokeWidth={1.5}
                    fill="url(#splitColor)"
                    dot={false}
                />
                <Tooltip />
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
            </AreaChart>
        </ResponsiveContainer>
    )
  }

  const renderStandardChart = () => {
      const lightColor = (lineColor && lightColorMap[lineColor]) || '#8884d8';

      return (
          <ResponsiveContainer width="100%" height={50}>
            <AreaChart data={data} onClick={handleChartClick} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke={lineColor || "#8884d8"}
                    strokeWidth={2}
                    fill={lightColor}
                    fillOpacity={0.6}
                    dot={{
                        fill: lineColor || "#8884d8",
                        r: 2,
                        strokeWidth: 0,
                    }}
                    activeDot={{
                        r: 4,
                        fill: lineColor || "#8884d8",
                        stroke: "hsl(var(--card))",
                        strokeWidth: 2,
                    }}
                 />
                <Tooltip />
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
            </AreaChart>
          </ResponsiveContainer>
      )
  }

  return (
    <Card
      className={`transition-transform duration-300 ease-in-out ${selected ? 'scale-105 shadow-lg' : ''}`}
      onClick={() => setSelected(!selected)}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{day}</p>
      </CardHeader>
      <CardContent className="pb-2">
        {title === 'Optimization +/-' ? renderOptimizationChart() : renderStandardChart()}
        {activeData && (
          <div className="mt-2 text-xs">
            <p><strong>Date:</strong> {activeData.name}</p>
            <p><strong>Value:</strong> {activeData.uv}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
