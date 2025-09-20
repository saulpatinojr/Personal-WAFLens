"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Files, Menu, Book } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "#",
      label: "WAF Overview",
      icon: LayoutDashboard,
    },
    {
      href: "#",
      label: "Files",
      icon: Files,
    },
    {
      href: "#",
      label: "Menu",
      icon: Menu,
    },
    {
      href: "#",
      label: "Docs",
      icon: Book,
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
            className="flex flex-col h-full items-center justify-center"
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
