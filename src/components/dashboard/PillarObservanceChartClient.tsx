'use client';

import dynamic from 'next/dynamic';

const PillarObservanceChart = dynamic(
  () => import('@/components/dashboard/pillar-observance-chart').then((mod) => mod.PillarObservanceChart),
  {
    ssr: false,
  }
);

export default PillarObservanceChart;