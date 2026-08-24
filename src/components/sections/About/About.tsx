import Image from "next/image";
import { Section } from "@/components/ui/Section/Section";
import { TechLogoCycle } from "./TechLogoCycle/TechLogoCycle";
import styles from "./About.module.css";

export function About({
  dict,
}: {
  dict: {
    kicker: string;
    name: string;
    role: string;
    photoAlt: string;
    paragraphs: string[];
    skillsHeading: string;
    skills: string[];
  };
}) {
  return (
    <Section id="about">
      <div className={styles.layout}>
        <div className={styles.text}>
          <p className={styles.kicker}>{dict.kicker}</p>
          <h1 className={styles.name}>{dict.name}</h1>
          <p className={styles.role}>{dict.role}</p>

          <div className={styles.bio}>
            {dict.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className={styles.skillsHeading}>{dict.skillsHeading}</h2>
          <div className={styles.skillsRow}>
            <ul className={styles.skills}>
              {dict.skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
            <TechLogoCycle />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.photoStage}>
            <Image
              src="/profile.jpg"
              alt={dict.photoAlt}
              width={320}
              height={320}
              priority
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
