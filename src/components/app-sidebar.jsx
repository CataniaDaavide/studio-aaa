"use client";

import { useState } from "react";
import { Home, Settings, ChevronRight, Users, ShoppingCart, Dot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menus = [
    {
      title: "Dashboard",
      icon: <Home className="w-4 h-4" />,
      href: "/",
    },
    {
      title: "Utenti",
      icon: <Users className="w-4 h-4" />,
      submenus: [
        { title: "Lista utenti", href: "/users" },
        { title: "Ruoli e permessi", href: "/users/users-detail" },
      ],
    },
    {
      title: "Impostazioni",
      icon: <Settings className="w-4 h-4" />,
      href: "/settings",
    },
  ];

  return (
    <aside className="w-64 bg-card border-r flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4 p-3">Pannello</h2>

      <nav className="flex flex-col gap-1">
        {menus.map((menu, index) =>
          menu.submenus ? (
            <Collapsible
              key={index}
              open={openMenu === index}
              onOpenChange={() => setOpenMenu(openMenu === index ? null : index)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between rounded-none",
                    openMenu === index && "bg-accent"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {menu.icon}
                    {menu.title}
                  </div>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      openMenu === index && "rotate-90"
                    )}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col">
                  {menu.submenus.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      className="pl-8 flex items-center text-sm py-2 px-2 hover:text-blue-500 hover:bg-accent transition-colors"
                    >
                      <Dot />
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Link key={index} href={menu.href}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                {menu.icon}
                {menu.title}
              </Button>
            </Link>
          )
        )}
      </nav>
    </aside>
  );
}
