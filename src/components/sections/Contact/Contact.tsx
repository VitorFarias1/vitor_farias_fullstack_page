import { Section } from "@/components/ui/Section/Section";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact({
  dict,
}: {
  dict: {
    heading: string;
    subheading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}) {
  return (
    <Section id="contact">
      <h2 className={styles.heading}>{dict.heading}</h2>
      <p className={styles.subheading}>{dict.subheading}</p>
      <ContactForm dict={dict} />
    </Section>
  );
}
