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
  Landmark,
  FileText,
  DollarSign,
  Users,
  Building,
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
                title="Users"
                icon={<Users />}
                value={2350}
                format="number"
                subtitle="+180.1% from last month"
              />
              <PillarCard
                title="Sessions"
                icon={<Building />}
                value={1234}
                format="number"
                subtitle="+19% from last month"
              />
              <PillarCard
                title="Spend"
                icon={<DollarSign />}
                value={125034.0}
                format="currency"
                subtitle="+20.1% from last month"
              />
              <PillarCard
                title="Reliability"
                icon={<Zap />}
                value={95}
                format="percentage"
              />
              <PillarCard
                title="Security"
                icon={<Shield />}
                value={82}
                format="percentage"
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
