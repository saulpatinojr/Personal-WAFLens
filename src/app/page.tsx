import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/dashboard/main-nav';
import { PillarCard } from '@/components/dashboard/pillar-card';
import {
  PanelsTopLeft,
  Gauge,
  ShieldCheck,
  PiggyBank,
  Crosshair,
} from 'lucide-react';

import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PillarObservanceChart } from '@/components/dashboard/pillar-observance-chart';
import { FrameworkAdoptionChart } from '@/components/dashboard/framework-adoption-chart';
import { ActionItemsTable } from '@/components/dashboard/action-items-table';
import { AiLens } from '@/components/ai/ai-lens';
import { OrderCard } from '@/components/dashboard/order-card';

const orderData1 = [
  { name: 'Mon', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: -100, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 50, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: -200, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: -25, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 350, pv: 4300, amt: 2100 },
];

const orderData2 = [
  { name: 'Mon', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 400, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 300, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 178, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 289, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 339, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 449, pv: 4300, amt: 2100 },
];

const orderData3 = [
  { name: 'Mon', uv: 100, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 200, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 500, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 678, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 389, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 139, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 49, pv: 4300, amt: 2100 },
];

const orderData4 = [
  { name: 'Mon', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 500, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 300, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 150, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 100, pv: 4300, amt: 2100 },
];

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarRail />
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="size-9" asChild>
              <Link href="/">
                <Logo className="size-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
            <h2 className="text-lg font-semibold tracking-tight">WAFLens</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex-1 flex flex-col min-h-0">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline">Compare</Button>
                <Button>Upload</Button>
            </div>
          </header>
          <main className="flex-1 flex flex-col p-4 md:p-8 pt-6 overflow-y-auto">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">An overview of your Well-Architected Framework Lens.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <PillarCard
                title="Reliability"
                icon={<PanelsTopLeft className="text-blue-500" />}
                value={96}
                format="percentage"
                subtitle="vs 98% last month"
                iconBg="bg-blue-100"
                slug="/reliability"
              />
              <PillarCard
                title="Performance Efficiency"
                icon={<Gauge className="text-green-500" />}
                value={82}
                format="percentage"
                subtitle="vs 85% last month"
                iconBg="bg-green-100"
                slug="/performance-efficiency"
              />
              <PillarCard
                title="Security"
                icon={<ShieldCheck className="text-orange-500" />}
                value={75}
                format="percentage"
                subtitle="vs 70% last month"
                iconBg="bg-orange-100"
                slug="/security"
              />
              <PillarCard
                title="Cost Optimization"
                icon={<PiggyBank className="text-yellow-500" />}
                value={2350}
                format="currency"
                subtitle="+10% from last month"
                iconBg="bg-yellow-100"
                slug="/cost-optimization"
              />
              <PillarCard
                title="Operational Excellence"
                icon={<Crosshair className="text-red-500" />}
                value={573}
                format="number"
                subtitle="+201 since last hour"
                iconBg="bg-red-100"
                slug="/operational-excellence"
              />
            </div>
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <PillarObservanceChart />
              <FrameworkAdoptionChart />
            </div>
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
              <OrderCard title="Optimization +/-" value="$1,300" day="Tuesday" data={orderData1}/>
              <OrderCard title="RI Observability" value="$125" day="Tuesday" data={orderData2} lineColor="#eab308"/>
              <OrderCard title="Unused Resources" value="$700" day="Thursday" data={orderData3} lineColor="#3b82f6"/>
              <OrderCard title="Extra Box" value="$200" day="Monday" data={orderData4} lineColor="#f97316"/>
            </div>
            <div className="mt-6">
              <ActionItemsTable />
            </div>
          </main>
        </div>
        <AiLens />
      </SidebarInset>
    </SidebarProvider>
  );
}
