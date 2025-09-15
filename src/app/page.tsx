import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/dashboard/main-nav';
import { DashboardHeader } from '@/components/dashboard/header';
import { PillarCard } from '@/components/dashboard/pillar-card';
import {
  ShieldCheck,
  HeartPulse,
  DollarSign,
  Briefcase,
  Gauge,
} from 'lucide-react';
import { PillarObservanceChart } from '@/components/dashboard/pillar-observance-chart';
import { ActionItemsTable } from '@/components/dashboard/action-items-table';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
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
        <SidebarFooter>
          {/* Footer content can go here */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <PillarCard
              title="Reliability"
              value={99.95}
              format="percentage"
              subtitle="Uptime Last 30 Days"
              icon={<HeartPulse />}
            />
            <PillarCard
              title="Security"
              value={88}
              format="score"
              subtitle="Based on CIS Benchmarks"
              icon={<ShieldCheck />}
            />
            <PillarCard
              title="Cost Optimization"
              value={2150}
              format="currency"
              subtitle="Potential Monthly Savings"
              icon={<DollarSign />}
            />
            <PillarCard
              title="Operational Excellence"
              value={75}
              icon={<Briefcase />}
            />
            <PillarCard
              title="Performance Efficiency"
              value={90}
              icon={<Gauge />}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-full lg:col-span-4">
              <PillarObservanceChart />
            </div>
            <div className="col-span-full lg:col-span-3">
              <ActionItemsTable />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
