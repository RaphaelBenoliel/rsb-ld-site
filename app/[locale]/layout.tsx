import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import FooterMega from "@/components/FooterMega";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <FooterMega />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
