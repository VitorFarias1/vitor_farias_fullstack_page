import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { locale as getLocale } from "next/root-params";
import "@/styles/globals.css";
import { locales } from "@/i18n/config";
import { getDictionary } from "./get-dictionary";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const [dict, currentLocale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <html lang={currentLocale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header name={dict.about.name} nav={dict.nav} />
        <main>{children}</main>
        <Footer name={dict.about.name} rights={dict.footer.rights} />
      </body>
    </html>
  );
}
