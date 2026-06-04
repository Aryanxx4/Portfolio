"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { MobileNav } from "@/components/layout/mobile-nav";

type HeaderProps = {
  name: string;
};

export function Header({ name }: HeaderProps) {
  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          {name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <MobileNav activeSection={activeSection} />
      </div>
    </header>
  );
}
