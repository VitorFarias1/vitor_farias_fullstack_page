"use client";

import { useEffect, useState } from "react";
import styles from "./TechLogoCycle.module.css";

const logos = [
  "/logos/angular.png",
  "/logos/react.png",
  "/logos/nodejs.png",
  "/logos/csharp.png",
  "/logos/python.png",
  "/logos/next.png",
];

export function TechLogoCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % logos.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.box} aria-hidden="true">
      {logos.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          className={styles.logo}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
