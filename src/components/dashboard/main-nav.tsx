"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { ShieldCheck, FileCode, Bot } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      label: "Azure Lens",
      icon: ShieldCheck,
    },
    {
      href: "#",
      label: "Files",
      icon: FileCode,
    },
    {
      href: "#",
      label: "AI Settings",
      icon: Bot,
    },
  ];

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
