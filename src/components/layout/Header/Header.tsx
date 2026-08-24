import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher/LanguageSwitcher";
import { Container } from "@/components/ui/Container/Container";
import styles from "./Header.module.css";

export function Header({
  name,
  nav,
}: {
  name: string;
  nav: { about: string; projects: string; contact: string };
}) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Link href="#about" className={styles.brand}>
            {name}
          </Link>
          <nav className={styles.nav}>
            <a href="#about">{nav.about}</a>
            <a href="#projects">{nav.projects}</a>
            <a href="#contact">{nav.contact}</a>
          </nav>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
}
