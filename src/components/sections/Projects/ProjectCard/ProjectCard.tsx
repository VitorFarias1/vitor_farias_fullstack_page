import type { Locale } from "@/i18n/config";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

export function ProjectCard({
  project,
  locale,
  demoLabel,
  repoLabel,
}: {
  project: Project;
  locale: Locale;
  demoLabel: string;
  repoLabel: string;
}) {
  const primaryHref = project.links.demo ?? project.links.repo;

  return (
    <article className={styles.card}>
      {primaryHref && (
        <a
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
          className={styles.stretchedLink}
          aria-label={project.title[locale]}
        />
      )}

      <h3 className={styles.title}>{project.title[locale]}</h3>
      <p className={styles.description}>{project.description[locale]}</p>

      <ul className={styles.tech}>
        {project.techStack.map((tech) => (
          <li key={tech} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            {demoLabel}
          </a>
        )}
        {project.links.repo && (
          <a href={project.links.repo} target="_blank" rel="noreferrer">
            {repoLabel}
          </a>
        )}
      </div>
    </article>
  );
}
