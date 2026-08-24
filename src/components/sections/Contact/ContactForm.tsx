"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({
  dict,
}: {
  dict: {
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
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">{dict.nameLabel}</label>
        <input id="name" name="name" type="text" placeholder={dict.namePlaceholder} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">{dict.emailLabel}</label>
        <input id="email" name="email" type="email" placeholder={dict.emailPlaceholder} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">{dict.messageLabel}</label>
        <textarea id="message" name="message" rows={5} placeholder={dict.messagePlaceholder} required />
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={status === "sending"} className={styles.submit}>
        {status === "sending" ? dict.sending : dict.submit}
      </button>

      {status === "success" && <p className={styles.success}>{dict.success}</p>}
      {status === "error" && <p className={styles.errorText}>{dict.error}</p>}
    </form>
  );
}
