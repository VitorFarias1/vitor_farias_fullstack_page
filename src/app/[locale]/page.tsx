import { locale } from "next/root-params";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "./get-dictionary";
import { About } from "@/components/sections/About/About";
import { Projects } from "@/components/sections/Projects/Projects";
import { Contact } from "@/components/sections/Contact/Contact";

export default async function Page() {
  const [dict, rawLocale] = await Promise.all([getDictionary(), locale()]);
  const currentLocale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  return (
    <>
      <About dict={dict.about} />
      <Projects locale={currentLocale} dict={dict.projects} />
      <Contact dict={dict.contact} />
    </>
  );
}
