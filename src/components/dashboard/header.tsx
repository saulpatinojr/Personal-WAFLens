import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";


export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1">
        <h1 className="text-xl font-semibold">Well Architected Overview</h1>
      </div>
      <Button>
        <Upload className="mr-2 h-4 w-4" />
        Upload Resources
      </Button>
    </header>
  );
}
