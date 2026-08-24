import { Section } from "@/components/ui/Section/Section";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export function Projects({
  locale,
  dict,
}: {
  locale: Locale;
  dict: {
    heading: string;
    subheading: string;
    demoLabel: string;
    repoLabel: string;
  };
}) {
  return (
    <Section id="projects" alt>
      <h2 className={styles.heading}>{dict.heading}</h2>
      <p className={styles.subheading}>{dict.subheading}</p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            demoLabel={dict.demoLabel}
            repoLabel={dict.repoLabel}
          />
        ))}
      </div>
    </Section>
  );
}
