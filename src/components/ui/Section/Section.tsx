import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Section.module.css";

export function Section({
  id,
  children,
  alt = false,
}: {
  id: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={alt ? styles.sectionAlt : styles.section}>
      <Container>{children}</Container>
    </section>
  );
}
