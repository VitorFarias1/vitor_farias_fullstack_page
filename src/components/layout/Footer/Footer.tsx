import { Container } from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

export function Footer({ name, rights }: { name: string; rights: string }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>
          © {new Date().getFullYear()} {name}. {rights}
        </p>
      </Container>
    </footer>
  );
}
