'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Treemap, ResponsiveContainer } from "recharts";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const data = [
    {
      name: 'Reliability',
      slug: 'reliability',
      size: 40,
    },
    {
      name: 'Security',
      slug: 'security',
      size: 80,
    },
    {
      name: 'Cost Optimization',
      slug: 'cost-optimization',
      size: 30,
    },
    {
      name: 'Operational Excellence',
      slug: 'operational-excellence',
      size: 50,
    },
    {
      name: 'Performance Efficiency',
      slug: 'performance-efficiency',
      size: 60,
    },
];

// Softer colors from pillar card icon backgrounds (bg-*-100)
const SOFT_COLORS = [
  '#dbeafe', // blue-100 for Reliability
  '#ffedd5', // orange-100 for Security
  '#fef9c3', // yellow-100 for Cost Optimization
  '#fee2e2', // red-100 for Operational Excellence
  '#dcfce7', // green-100 for Performance Efficiency
];

// Stronger colors from pillar card icon text (text-*-500)
const STRONG_COLORS = [
  '#3b82f6', // blue-500 for Reliability
  '#f97316', // orange-500 for Security
  '#eab308', // yellow-500 for Cost Optimization
  '#ef4444', // red-500 for Operational Excellence
  '#22c55e', // green-500 for Performance Efficiency
];

export function FrameworkAdoptionChart() {
  const [hoveredPillarName, setHoveredPillarName] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const TreemapContent = (props: any) => {
    const { x, y, width, height, index, name, payload } = props;
    const isHovered = hoveredIndex === index;
    const slug = payload?.slug;

    const handleNavigate = () => {
      if (slug) {
        router.push(`/${slug}`);
      }
    };

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          onMouseEnter={() => {
            setHoveredIndex(index);
            setHoveredPillarName(name);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setHoveredPillarName(null);
          }}
          onClick={handleNavigate}
          className="transition-transform duration-300 ease-in-out"
          style={{
            fill: SOFT_COLORS[index % SOFT_COLORS.length],
            stroke: 'hsl(var(--background))',
            strokeWidth: 2,
            strokeOpacity: 1,
            cursor: slug ? 'pointer' : 'default',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            transformOrigin: `${x + width / 2}px ${y + height / 2}px`,
          }}
        />
      </g>
    );
  };

  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Framework Adoption</CardTitle>
        <h3
            className="font-bold transition-opacity ease-in-out h-6"
            style={{
              fontSize: '1rem',
              color: hoveredIndex !== null ? STRONG_COLORS[hoveredIndex % STRONG_COLORS.length] : 'transparent',
              opacity: hoveredPillarName ? 1 : 0,
              transitionDuration: '450ms',
            }}
          >
            {hoveredPillarName || '\u00A0'} 
          </h3>
      </CardHeader>
      <CardContent className="pb-4">
        <ResponsiveContainer width="100%" height={350}>
          <Treemap
            data={data}
            dataKey="size"
            aspectRatio={16 / 9}
            stroke="hsl(var(--card))"
            content={<TreemapContent />}
            isAnimationActive={true}
            animationDuration={500}
          />
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
