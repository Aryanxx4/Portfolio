import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Skills } from "@/lib/content";

type SkillsSectionProps = {
  skills: Skills;
};

const SKILL_GROUPS: {
  key: keyof Skills;
  label: string;
}[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools" },
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="skills"
            title="Skills"
            subtitle="Technologies I use to build full-stack products."
          />
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => (
            <ScrollReveal key={group.key} delay={index * 0.05}>
              <div className="rounded-xl border border-white/10 bg-card/50 p-6">
                <h3 className="mb-4 font-mono text-sm font-medium text-accent">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
