export type Locale = "fr" | "en" | "es";
export type Audience = "institution" | "student";

export type ServiceSlug =
  | "conseil-ingenierie-formation"
  | "interventions-pedagogiques"
  | "suivi-memoires-projets"
  | "accompagnement-bts-tertiaires";

export type LeadStatus = "new" | "contacted" | "qualified" | "won" | "lost";

export interface LeadPayload {
  audience: Audience;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  serviceInterest?: ServiceSlug | "general";
  message: string;
  locale: Locale;
}

export interface DevisPayload {
  audience: Audience;
  name: string;
  email: string;
  phone?: string;
  service: ServiceSlug | "general";
  packId?: string;
  deadline?: string;
  details: string;
  locale: Locale;
}

export interface Pack {
  id: string;
  titleKey: string;
  subtitleKey?: string;
  includesKey: string;
  ctaKey: string;
  priceLabelKey?: string;
  badgeKey?: string;
}
