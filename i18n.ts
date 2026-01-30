import {getRequestConfig} from "next-intl/server";
import {defaultLocale, locales} from "./i18n/routing";

export default getRequestConfig(async ({locale}) => {
  const safeLocale = locales.includes(locale as any) ? (locale as any) : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`./messages/${safeLocale}.json`)).default
  };
});
