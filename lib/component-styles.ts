/** Readable, component-scoped Tailwind class names */

export const layoutStyles = {
  pageMaxWidth: "mx-auto max-w-6xl px-6",
  sectionVerticalPadding: "scroll-mt-20 py-24",
  sectionWithTopBorder: "scroll-mt-20 border-t border-white/10 py-24",
} as const;

export const headerStyles = {
  stickyBar:
    "sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md",
  skipToContentLink:
    "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
  innerRow: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6",
  logoLink: "font-mono text-sm font-medium tracking-tight text-foreground",
  logoAccentDot: "text-brand",
  desktopNav: "hidden items-center gap-1 md:flex",
  navLinkBase: "rounded-md px-3 py-2 text-sm transition-colors",
  navLinkActive: "text-foreground",
  navLinkInactive: "text-muted-foreground hover:text-foreground",
} as const;

export const mobileNavStyles = {
  menuTriggerButton: "md:hidden",
  sheetPanel: "w-72",
  navList: "mt-6 flex flex-col gap-1",
  navLinkBase: "rounded-md px-3 py-2.5 text-sm transition-colors",
  navLinkActive: "bg-secondary text-foreground",
  navLinkInactive:
    "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
} as const;

export const footerStyles = {
  bar: "border-t border-white/10 py-10",
  innerRow:
    "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row",
  copyrightText: "text-sm text-muted-foreground",
  socialLinksRow: "flex items-center gap-4",
  socialIconLink:
    "text-muted-foreground transition-colors hover:text-brand",
  socialIconSize: "size-5",
} as const;

export const heroStyles = {
  section:
    "relative flex min-h-[calc(100vh-4rem)] scroll-mt-20 flex-col justify-center py-24",
  gridBackground:
    "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]",
  contentWrapper: "relative mx-auto max-w-6xl px-6 text-center",
  roleLabel:
    "mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand",
  mainHeading:
    "mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
  ctaButtonRow:
    "mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-4",
  ctaButtonSize: "h-12 min-w-[9.5rem] px-6 text-base",
  githubIconInButton: "size-5",
  scrollHintWrapper: "mt-20 flex justify-center",
  scrollHintLink:
    "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
  scrollHintIcon: "size-4 animate-bounce",
} as const;

export const sectionHeadingStyles = {
  wrapper: "mb-12",
  title: "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
  subtitle: "mt-3 max-w-2xl text-muted-foreground",
} as const;

export const aboutStyles = {
  section: layoutStyles.sectionVerticalPadding,
  bodyText: "max-w-3xl space-y-6 text-muted-foreground",
  primaryParagraph: "text-base leading-relaxed text-foreground/90",
  secondaryParagraph: "leading-relaxed",
  locationRow: "flex items-center gap-2 text-sm",
  locationIcon: "size-4 text-brand",
} as const;

export const skillsStyles = {
  section: layoutStyles.sectionWithTopBorder,
  skillsGrid: "grid gap-8 sm:grid-cols-2",
  categoryCard: "rounded-xl border border-white/10 bg-card/50 p-6",
  categoryTitle: "mb-4 font-mono text-sm font-medium text-brand",
  categoryBadgeRow: "flex flex-wrap gap-2",
} as const;

export const projectsStyles = {
  section: layoutStyles.sectionVerticalPadding,
  projectGrid: "grid gap-6 md:grid-cols-2",
  projectCard:
    "group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-card/50 transition-colors hover:border-white/20",
  projectImageFrame:
    "relative aspect-video w-full overflow-hidden border-b border-white/10 bg-secondary/30",
  projectImage:
    "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
  projectCardBody: "flex flex-1 flex-col p-6",
  projectTitle: "text-lg font-semibold text-foreground",
  projectTagline: "mt-1 text-sm text-brand",
  projectDescription: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
  projectArchitecture: "mt-3 font-mono text-xs text-muted-foreground",
  techGrid: "mt-4 grid gap-3 sm:grid-cols-3",
  techLabel: "font-mono text-xs text-muted-foreground",
  techBadgeRow: "mt-1.5 flex flex-wrap gap-1.5",
  techBadge: "text-xs",
  projectLinksRow: "mt-6 flex flex-wrap gap-2",
  githubIconInButton: "size-4",
  moreOnGithubWrapper: "mt-10 text-center",
} as const;

export const experienceStyles = {
  section: layoutStyles.sectionWithTopBorder,
  timeline: "relative max-w-3xl border-l border-white/10 pl-8",
  timelineItem: "relative pb-12 last:pb-0",
  timelineDot:
    "absolute -left-[calc(0.5rem+1px)] top-1.5 size-2.5 rounded-full bg-brand ring-4 ring-background",
  timelineItemHeader: "flex flex-wrap items-baseline justify-between gap-2",
  timelineItemTitle: "font-semibold text-foreground",
  timelineItemPeriod: "font-mono text-xs text-muted-foreground",
  timelineItemOrg: "mt-1 text-sm text-brand",
  timelineItemDescription: "mt-3 text-sm leading-relaxed text-muted-foreground",
  timelineItemBullets:
    "mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
} as const;

export const githubSectionStyles = {
  section: layoutStyles.sectionVerticalPadding,
  statsGrid: "grid gap-6 lg:grid-cols-2",
  profileCard: "rounded-xl border border-white/10 bg-card/50 p-6",
  profileHeader: "flex items-start gap-4",
  profileAvatar: "rounded-full",
  profileUsername: "font-semibold text-foreground",
  profileBio: "mt-2 text-sm text-muted-foreground",
  profileStatsRow: "mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground",
  profileStatIcon: "size-4 text-brand",
  viewProfileButton: "mt-6",
  statsImageCard:
    "overflow-hidden rounded-xl border border-white/10 bg-card/50 p-4",
  statsImage: "h-auto w-full",
  chartCardSpan: "lg:col-span-2",
  fallbackCard:
    "rounded-xl border border-white/10 bg-card/50 p-8 text-center",
  fallbackText: "text-muted-foreground",
  fallbackButton: "mt-4",
  githubIconInButton: "size-4",
} as const;

export const contactStyles = {
  section: layoutStyles.sectionWithTopBorder,
  contactCard: "max-w-xl rounded-xl border border-white/10 bg-card/50 p-8",
  contactMessage: "text-muted-foreground",
  contactButtonRow: "mt-8 flex flex-wrap gap-3",
  socialIconInButton: "size-4",
} as const;
