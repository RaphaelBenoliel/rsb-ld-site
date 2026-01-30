import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const safeLocale = locales.includes(requestLocale as any) ? (requestLocale as any) : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`./messages/${safeLocale}.json`)).default
  };
});
