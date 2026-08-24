"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

function localizedPathname(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || "/";
}

export function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className={styles.switcher}>
      {locales.map((loc) => (
        <Link
          key={loc}
          href={localizedPathname(pathname, loc)}
          className={styles.option}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
