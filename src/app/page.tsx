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
  Heart,
  TrendingUp,
  Target,
  BadgeCent,
} from 'lucide-react';

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
            <h2 className="text-lg font-semibold tracking-tight">Azure Lens</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <MainNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <PillarCard
              title="Reliability"
              description="Ensures workloads can recover from failures and meet uptime commitments by incorporating redundancy and resiliency."
              icon={<Heart />}
            />
            <PillarCard
              title="Security"
              description="Protects workloads by maintaining confidentiality, integrity, and availability, leveraging Azure's multi-layered security features."
              icon={<Shield />}
            />
            <PillarCard
              title="Cost Optimization"
              description="Focuses on reducing unnecessary expenses while maximizing operational efficiency and aligning costs with business objectives."
              icon={<BadgeCent />}
            />
            <PillarCard
              title="Operational Excellence"
              description="Emphasizes reliable deployments, observability, and automated processes to minimize production issues."
              icon={<TrendingUp />}
            />
            <PillarCard
              title="Performance Efficiency"
              description="Enables workloads to scale dynamically and meet performance demands through efficient resource utilization."
              icon={<Target />}
            />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
