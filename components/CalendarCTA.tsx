import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

export default function CalendarCTA() {
  const cta = useTranslations("cta");

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl px-5 py-3 font-medium bg-neutral-900 text-white text-center w-full md:w-auto"
    >
      {cta("book")}
    </a>
  );
}
