import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarRail,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/dashboard/main-nav';
import { DashboardHeader } from '@/components/dashboard/header';
import { PillarCard } from '@/components/dashboard/pillar-card';
import {
  Shield,
  Zap,
  TrendingUp,
  FileText,
  DollarSign,
  Activity,
} from 'lucide-react';

import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PillarObservanceChart } from '@/components/dashboard/pillar-observance-chart';
import { ActionItemsTable } from '@/components/dashboard/action-items-table';

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
        <DashboardHeader />
        <main className="flex-1 flex flex-col">
          <div className="p-4 md:p-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <PillarCard
                title="Reliability"
                icon={<Shield className="text-blue-500" />}
                value={96}
                format="percentage"
                subtitle="vs 98% last month"
                iconBg="bg-blue-100"
              />
              <PillarCard
                title="Performance Efficiency"
                icon={<Zap className="text-green-500" />}
                value={82}
                format="percentage"
                subtitle="vs 85% last month"
                iconBg="bg-green-100"
              />
              <PillarCard
                title="Security"
                icon={<TrendingUp className="text-orange-500" />}
                value={75}
                format="percentage"
                subtitle="vs 70% last month"
                iconBg="bg-orange-100"
              />
              <PillarCard
                title="Cost Optimization"
                icon={<DollarSign className="text-indigo-500" />}
                value={2350}
                format="currency"
                subtitle="+10% from last month"
                iconBg="bg-indigo-100"
              />
              <PillarCard
                title="Operational Excellence"
                icon={<Activity className="text-red-500" />}
                value={573}
                format="number"
                subtitle="+201 since last hour"
                iconBg="bg-red-100"
              />
            </div>
            <div className="grid gap-6 mt-6">
              <PillarObservanceChart />
            </div>
          </div>
          <div className="p-4 md:p-8 mt-auto">
            <ActionItemsTable />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
