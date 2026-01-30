import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <PageHeader titleKey="contact.title" subtitleKey="contact.intro" />
      <ContactForm />
    </div>
  );
}
