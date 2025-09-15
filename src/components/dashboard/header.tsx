import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";


export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <Upload className="mr-2 h-4 w-4" />
          Export
        </Button>
         <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Analysis
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline">Compare</Button>
        <Button>Upload</Button>
      </div>
    </header>
  );
}
