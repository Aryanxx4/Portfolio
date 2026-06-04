"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { headerStyles } from "@/lib/component-styles";
import { useActiveSection } from "@/hooks/use-active-section";
import { MobileNav } from "@/components/layout/mobile-nav";

type HeaderProps = {
  name: string;
};

export function Header({ name }: HeaderProps) {
  const activeSection = useActiveSection();

  return (
    <header className={headerStyles.stickyBar}>
      <a href="#main-content" className={headerStyles.skipToContentLink}>
        Skip to content
      </a>
      <div className={headerStyles.innerRow}>
        <Link href="#home" className={headerStyles.logoLink}>
          {name.split(" ")[0]}
          <span className={headerStyles.logoAccentDot}>.</span>
        </Link>

        <nav className={headerStyles.desktopNav} aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  headerStyles.navLinkBase,
                  isActive
                    ? headerStyles.navLinkActive
                    : headerStyles.navLinkInactive
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
