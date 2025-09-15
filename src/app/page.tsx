import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
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
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="size-9" asChild>
              <Link href="/">
                <Logo className="size-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
            <h2 className="text-lg font-semibold tracking-tight">Dashnext</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <PillarCard
              title="Total Cost"
              icon={<Landmark />}
              value={125060}
              format="currency"
            />
            <PillarCard
              title="Resources"
              icon={<FileText />}
              value={17}
              format="number"
            />
             <PillarCard
              title="Security"
              icon={<Shield />}
              value={92}
              format="percentage"
              subtitle="Observance"
            />
            <PillarCard
              title="Avg. Performance"
              icon={<TrendingUp />}
              value={88}
              format="percentage"
              subtitle="Efficiency"
            />
            <PillarCard
              title="Avg. Reliability"
              icon={<Zap />}
              value={95}
              format="percentage"
              subtitle="Resiliency"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <ActionItemsTable />
            </div>
            <div className="lg:col-span-3">
              <PillarObservanceChart />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
