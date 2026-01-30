import { useTranslations } from "next-intl";

export default function PageHeader({ titleKey, subtitleKey }: { titleKey: string; subtitleKey: string }) {
  const t = useTranslations();
  return (
    <div className="space-y-2">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{t(titleKey)}</h1>
      <p className="text-neutral-600 max-w-3xl">{t(subtitleKey)}</p>
    </div>
  );
}
