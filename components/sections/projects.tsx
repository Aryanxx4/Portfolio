import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { layoutStyles, projectsStyles } from "@/lib/component-styles";
import type { Project } from "@/lib/content";

type ProjectsProps = {
  projects: Project[];
  githubUrl: string;
};

function TechRow({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <span className={projectsStyles.techLabel}>{label}</span>
      <div className={projectsStyles.techBadgeRow}>
        {items.map((item) => (
          <Badge key={item} variant="outline" className={projectsStyles.techBadge}>
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Projects({ projects, githubUrl }: ProjectsProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={projectsStyles.section}
    >
      <div className={layoutStyles.pageMaxWidth}>
        <ScrollReveal>
          <SectionHeading
            id="projects"
            title="Featured Projects"
            subtitle="Curated work that highlights full-stack engineering — APIs, data layers, and interfaces."
          />
        </ScrollReveal>
        <div className={projectsStyles.projectGrid}>
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <article className={projectsStyles.projectCard}>
                <div className={projectsStyles.projectImageFrame}>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className={projectsStyles.projectImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={projectsStyles.projectCardBody}>
                  <h3 className={projectsStyles.projectTitle}>{project.title}</h3>
                  <p className={projectsStyles.projectTagline}>{project.tagline}</p>
                  <p className={projectsStyles.projectDescription}>
                    {project.description}
                  </p>
                  <p className={projectsStyles.projectArchitecture}>
                    {project.architecture}
                  </p>
                  <div className={projectsStyles.techGrid}>
                    <TechRow label="Frontend" items={project.tech.frontend} />
                    <TechRow label="Backend" items={project.tech.backend} />
                    <TechRow label="Database" items={project.tech.database} />
                  </div>
                  <div className={projectsStyles.projectLinksRow}>
                    <ButtonLink
                      href={project.github}
                      variant="outline"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon
                        data-icon="inline-start"
                        className={projectsStyles.githubIconInButton}
                      />
                      Code
                    </ButtonLink>
                    {project.liveUrl ? (
                      <ButtonLink
                        href={project.liveUrl}
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink data-icon="inline-start" />
                        Live Demo
                      </ButtonLink>
                    ) : null}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <div className={projectsStyles.moreOnGithubWrapper}>
          <ButtonLink
            href={githubUrl}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              data-icon="inline-start"
              className={projectsStyles.githubIconInButton}
            />
            More on GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
