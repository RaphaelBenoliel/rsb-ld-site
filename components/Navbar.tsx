"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

function withLocale(locale: string, path: string) {
  return `/${locale}${path}`;
}

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const items = [
       { href: "/a-propos", label: t("about") },
    { href: "/institutions", label: t("institutions") },
    { href: "/etudiants", label: t("students") },
 
    { href: "/devis", label: t("devis") },
    { href: "/contact", label: t("contact") }
  ];

  return (
    <header className="border-b bg-white/80 backdrop-blur h-20">
  <div className="mx-auto max-w-6xl px-4 h-full flex items-center justify-between gap-4">
    <Link href={withLocale(locale, "/")} className="flex items-center gap-3 shrink-0">
      <div className="relative h-16 w-14">
        <Image
          src="/logo.png"
          alt={siteConfig.brand.name}
          fill
          priority
          sizes="256px"
          className="object-contain"
        />
       
      </div>
      <div className="hidden lg:block font-semibold text-lg">
        {siteConfig.brand.name}
      </div>
      
      <span className="sr-only">{siteConfig.brand.name}</span>
    </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <Link
              key={it.href}
              href={withLocale(locale, it.href)}
              className={`hover:text-neutral-900 ${
                pathname?.endsWith(it.href) ? "text-neutral-900" : "text-neutral-600"
              }`}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          {siteConfig.locales.map((l) => (
            <Link
              key={l}
              href={`/${l}${pathname?.replace(/^\/(fr|en|es)/, "") || ""}`}
              className={`px-2 py-1 rounded-lg border ${
                l === locale ? "bg-neutral-900 text-white border-neutral-900" : "text-neutral-700"
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
