import { locale } from "next/root-params";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import type en from "./dictionaries/en.json";

type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  pt: () => import("./dictionaries/pt.json").then((m) => m.default),
};

export async function getDictionary(): Promise<Dictionary> {
  const value = (await locale()) ?? defaultLocale;
  if (!isLocale(value)) notFound();
  return dictionaries[value]();
}
