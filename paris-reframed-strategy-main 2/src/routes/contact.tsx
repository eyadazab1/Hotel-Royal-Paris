import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hôtel Royal Paris" },
      {
        name: "description",
        content:
          "Reach the front desk directly. Telephone, email, and address for Hôtel Royal Paris in Ivry-sur-Seine.",
      },
      { property: "og:title", content: "Contact — Hôtel Royal Paris" },
    ],
  }),
  component: Contact,
});

const contactMethods: Array<{
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}> = [
  {
    label: "By telephone",
    value: "+33 1 46 70 00 00",
    note: "Reception, 24 hours a day.",
    icon: Phone,
  },
  {
    label: "By email",
    value: "stay@royalparis.fr",
    note: "A real person replies within two hours.",
    icon: Mail,
  },
  {
    label: "In person",
    value: "22 Rue de la Liberté\n94200 Ivry-sur-Seine\nFrance",
    note: "A quiet street near the Seine and direct metro links.",
    icon: MapPin,
  },
];

function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title={
        <>
          Speak with the front desk.
          <br />
          <em className="not-italic text-brass">Directly.</em>
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="space-y-5 md:col-span-5">
          {contactMethods.map(({ label, value, note, icon: Icon }) => (
            <div key={label} className="lux-card rounded-[1.8rem] p-6">
              <Icon className="h-5 w-5 text-brass" strokeWidth={2} />
              <p className="eyebrow mt-5">{label}</p>
              {label === "In person" ? (
                <address className="mt-3 whitespace-pre-line not-italic font-serif text-3xl leading-snug">
                  {value}
                </address>
              ) : (
                <p className="mt-3 font-serif text-3xl">{value}</p>
              )}
              <p className="mt-2 text-sm text-foreground/60">{note}</p>
            </div>
          ))}

          <div className="lux-panel-dark rounded-[1.8rem] p-6 text-cream">
            <p className="eyebrow text-brass">Direct booking perks</p>
            <div className="mt-5 space-y-3 text-cream/75">
              <div className="flex gap-3">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2} />
                <p>Best-rate promise and no platform fees.</p>
              </div>
              <div className="flex gap-3">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2} />
                <p>Free cancellation up to 48 hours before arrival.</p>
              </div>
              <div className="flex gap-3">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2} />
                <p>Questions answered by the hotel, not a call center.</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="lux-card rounded-[2rem] p-7 md:col-span-7 md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="eyebrow">Send us a note</p>
          <h3 className="mt-4 font-serif text-4xl leading-[1.02]">
            Tell us your dates, room type, or any small detail that will make the stay easier.
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Name", "name", "text"],
              ["Email", "email", "email"],
              ["Arrival date", "date", "date"],
              ["Guests", "guests", "text"],
            ].map(([label, name, type]) => (
              <label key={name} className="block">
                <span className="eyebrow text-foreground/60">{label}</span>
                <input
                  type={type}
                  name={name}
                  className="mt-3 h-14 w-full rounded-full border border-foreground/10 bg-white/55 px-5 font-serif text-xl outline-none transition-colors focus:border-brass"
                />
              </label>
            ))}
          </div>
          <label className="mt-6 block">
            <span className="eyebrow text-foreground/60">Message</span>
            <textarea
              rows={6}
              className="mt-3 w-full rounded-[1.5rem] border border-foreground/10 bg-white/55 px-5 py-4 font-serif text-xl outline-none transition-colors focus:border-brass resize-none"
            />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-foreground/58">
              Sample inquiry form for the client deck. The layout is ready; submission can be
              connected to their preferred CRM or inbox flow.
            </p>
            <button type="submit" className="lux-button">
              Send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
