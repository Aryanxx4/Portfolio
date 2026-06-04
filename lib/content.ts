import { readFile } from "fs/promises";
import path from "path";
import { z } from "zod";

const contentDir = path.join(process.cwd(), "content");

const siteSchema = z.object({
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  bio: z.string(),
  location: z.string(),
  email: z.string(),
  resumeUrl: z.string(),
  socials: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
    instagram: z.string().url().optional(),
  }),
  githubUsername: z.string(),
});

const projectTechSchema = z.object({
  frontend: z.array(z.string()),
  backend: z.array(z.string()),
  database: z.array(z.string()),
});

const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  architecture: z.string(),
  tech: projectTechSchema,
  github: z.string().url(),
  liveUrl: z.string().url().nullable(),
  featured: z.boolean(),
  image: z.string(),
});

const experienceSchema = z.object({
  id: z.string(),
  type: z.enum(["education", "work", "project"]),
  title: z.string(),
  organization: z.string(),
  period: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
});

const skillsSchema = z.object({
  frontend: z.array(z.string()),
  backend: z.array(z.string()),
  databases: z.array(z.string()),
  tools: z.array(z.string()),
});

export type SiteConfig = z.infer<typeof siteSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Skills = z.infer<typeof skillsSchema>;

async function readJson<T>(filename: string, schema: z.ZodType<T>): Promise<T> {
  const filePath = path.join(contentDir, filename);
  const raw = await readFile(filePath, "utf-8");
  return schema.parse(JSON.parse(raw));
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return readJson("site.json", siteSchema);
}

export async function getProjects(): Promise<Project[]> {
  const projects = await readJson("projects.json", z.array(projectSchema));
  return projects.filter((p) => p.featured);
}

export async function getExperience(): Promise<Experience[]> {
  return readJson("experience.json", z.array(experienceSchema));
}

export async function getSkills(): Promise<Skills> {
  return readJson("skills.json", skillsSchema);
}
