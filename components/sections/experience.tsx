import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Experience } from "@/lib/content";

type ExperienceSectionProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="experience"
            title="Experience"
            subtitle="Education and project milestones."
          />
        </ScrollReveal>
        <ol className="relative max-w-3xl border-l border-white/10 pl-8">
          {experience.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <li className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[calc(0.5rem+1px)] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <time className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </time>
                </div>
                <p className="mt-1 text-sm text-accent">{item.organization}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
