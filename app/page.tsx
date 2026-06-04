import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { GitHubSection } from "@/components/sections/github-section";
import { Contact } from "@/components/sections/contact";
import {
  getSiteConfig,
  getProjects,
  getExperience,
  getSkills,
} from "@/lib/content";
export default async function HomePage() {
  const [site, projects, experience, skills] = await Promise.all([
    getSiteConfig(),
    getProjects(),
    getExperience(),
    getSkills(),
  ]);

  return (
    <>
      <Header name={site.name} />
      <main id="main-content">
        <Hero site={site} />
        <About site={site} />
        <SkillsSection skills={skills} />
        <Projects projects={projects} githubUrl={site.socials.github} />
        <ExperienceSection experience={experience} />
        <GitHubSection site={site} />
        <Contact site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}
