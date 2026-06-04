import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { experienceStyles, layoutStyles } from "@/lib/component-styles";
import type { Experience } from "@/lib/content";

type ExperienceSectionProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={experienceStyles.section}
    >
      <div className={layoutStyles.pageMaxWidth}>
        <ScrollReveal>
          <SectionHeading
            id="experience"
            title="Experience"
            subtitle="Education and project milestones."
          />
        </ScrollReveal>
        <ol className={experienceStyles.timeline}>
          {experience.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <li className={experienceStyles.timelineItem}>
                <span className={experienceStyles.timelineDot} aria-hidden />
                <div className={experienceStyles.timelineItemHeader}>
                  <h3 className={experienceStyles.timelineItemTitle}>
                    {item.title}
                  </h3>
                  <time className={experienceStyles.timelineItemPeriod}>
                    {item.period}
                  </time>
                </div>
                <p className={experienceStyles.timelineItemOrg}>
                  {item.organization}
                </p>
                <p className={experienceStyles.timelineItemDescription}>
                  {item.description}
                </p>
                <ul className={experienceStyles.timelineItemBullets}>
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
