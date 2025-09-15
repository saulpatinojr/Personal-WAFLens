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
import { ContextDiagramsCard } from '@/components/dashboard/context-diagrams-card';
import { HighLevelSystemDiagramsCard } from '@/components/dashboard/high-level-system-diagrams-card';
import { ComponentDiagramsCard } from '@/components/dashboard/component-diagrams-card';
import { DeploymentDiagramsCard } from '@/components/dashboard/deployment-diagrams-card';
import { DataFlowDiagramsCard } from '@/components/dashboard/data-flow-diagrams-card';
import { SequenceDiagramsCard } from '@/components/dashboard/sequence-diagrams-card';
import { UserJourneyDiagramsCard } from '@/components/dashboard/user-journey-diagrams-card';

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
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 flex flex-col">
          <div className="p-4 md:p-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
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
              <PillarCard
                title="Cost Optimization"
                icon={<Landmark />}
                value={60}
                format="percentage"
              />
              <PillarCard
                title="Operational Excellence"
                icon={<TrendingUp />}
                value={75}
                format="percentage"
              />
              <PillarCard
                title="Performance Efficiency"
                icon={<FileText />}
                value={90}
                format="percentage"
              />
            </div>
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <PillarObservanceChart />
              <ContextDiagramsCard />
              <HighLevelSystemDiagramsCard />
              <ComponentDiagramsCard />
              <DeploymentDiagramsCard />
              <DataFlowDiagramsCard />
              <SequenceDiagramsCard />
              <UserJourneyDiagramsCard />
            </div>
          </div>
          <div className="p-4 md:p-8">
            <ActionItemsTable />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
