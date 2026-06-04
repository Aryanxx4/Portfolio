import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { layoutStyles, skillsStyles } from "@/lib/component-styles";
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
      className={skillsStyles.section}
    >
      <div className={layoutStyles.pageMaxWidth}>
        <ScrollReveal>
          <SectionHeading
            id="skills"
            title="Skills"
            subtitle="Technologies I use to build full-stack products."
          />
        </ScrollReveal>
        <div className={skillsStyles.skillsGrid}>
          {SKILL_GROUPS.map((group, index) => (
            <ScrollReveal key={group.key} delay={index * 0.05}>
              <div className={skillsStyles.categoryCard}>
                <h3 className={skillsStyles.categoryTitle}>{group.label}</h3>
                <div className={skillsStyles.categoryBadgeRow}>
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
