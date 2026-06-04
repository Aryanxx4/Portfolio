import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
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
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Badge key={item} variant="outline" className="text-xs">
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
      className="scroll-mt-20 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="projects"
            title="Featured Projects"
            subtitle="Curated work that highlights full-stack engineering — APIs, data layers, and interfaces."
          />
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-card/50 transition-colors hover:border-white/20">
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-secondary/30">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{project.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">
                    {project.architecture}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <TechRow label="Frontend" items={project.tech.frontend} />
                    <TechRow label="Backend" items={project.tech.backend} />
                    <TechRow label="Database" items={project.tech.database} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <ButtonLink
                      href={project.github}
                      variant="outline"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon data-icon="inline-start" className="size-4" />
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
        <div className="mt-10 text-center">
          <ButtonLink
            href={githubUrl}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon data-icon="inline-start" className="size-4" />
            More on GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
