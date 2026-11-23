"use client";

import * as React from "react";
import { SquareTerminal, UtensilsCrossed } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "AFC Provides",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "/history" },
        { title: "Our Menu", url: "/" },
        { title: "Game", url: "/game" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-white/60 [&_[data-sidebar=sidebar]]:bg-gradient-to-b [&_[data-sidebar=sidebar]]:from-sky-50/90 [&_[data-sidebar=sidebar]]:via-white/70 [&_[data-sidebar=sidebar]]:to-cyan-50/90 [&_[data-sidebar=sidebar]]:backdrop-blur-xl"
      {...props}
    >
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-sky-300/50">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="text-base font-bold text-slate-800">AFC</span>
            <span className="text-xs text-sky-600">Fast Food Center</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <p className="px-2 py-2 text-xs text-sky-600/80 group-data-[collapsible=icon]:hidden">
          Fresh • Hot • Delicious
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
