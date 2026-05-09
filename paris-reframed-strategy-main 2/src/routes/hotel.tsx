import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Bell, Coffee, Dog, Globe, Luggage, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { Section } from "@/components/site/Section";
import heroRoom from "@/assets/hero-room.jpg";

export const Route = createFileRoute("/hotel")({
  head: () => ({
    meta: [
      { title: "The Hotel — Hôtel Royal Paris" },
      {
        name: "description",
        content:
          "Family-owned since 1978. Eighteen rooms, refurbished in 2023. Breakfast, espresso bar, 24-hour reception.",
      },
      { property: "og:title", content: "The Hotel — Hôtel Royal Paris" },
    ],
  }),
  component: Hotel,
});

const amenities: Array<{ title: string; body: string; icon: LucideIcon }> = [
  {
    title: "Breakfast",
    body: "Continental buffet with viennoiseries, fresh fruit, charcuterie, and espresso. Served 7–10:30.",
    icon: Coffee,
  },
  {
    title: "24-hour reception",
    body: "Someone is always at the desk. Late train? We'll wait up.",
    icon: Bell,
  },
  {
    title: "Concierge help",
    body: "Reservations, tickets, the right cab driver, the bakery worth the walk.",
    icon: Sparkles,
  },
  {
    title: "Air conditioning",
    body: "In every room, and quiet enough to sleep through.",
    icon: ShieldCheck,
  },
  {
    title: "Wi-Fi",
    body: "Free, fast, and works in the courtyard.",
    icon: Wifi,
  },
  {
    title: "Luggage",
    body: "Drop bags before check-in, retrieve them after check-out.",
    icon: Luggage,
  },
  {
    title: "Family-friendly",
    body: "Cribs, extra beds, and a generous attitude toward small loud humans.",
    icon: Globe,
  },
  {
    title: "Pet-friendly",
    body: "Small dogs welcome — no fee. Just tell us.",
    icon: Dog,
  },
  {
    title: "Espresso bar",
    body: "All day. Properly pulled. Free for guests.",
    icon: Coffee,
  },
];

function Hotel() {
  return (
    <>
      <Section
        eyebrow="The Hotel"
        title={
          <>
            A small house, run with care
            <br />
            <em className="not-italic text-brass">since 1978.</em>
          </>
        }
      >
        <div className="grid items-start gap-6 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Royal Paris has been in the same family for three generations. We have eighteen rooms
              — exactly enough that we can still meet you at the door, remember which coffee you
              take, and keep a key under the desk for the early train.
            </p>
            <p>
              In 2023, we closed for four months and refurbished every room from the floor up:
              rainfall showers, blackout drapes, real mattresses, fast Wi-Fi. We left the things
              that were already right — the morning light, the staircase, the quiet — alone.
            </p>
            <p>
              We are not a five-star hotel. We are something rarer: a small, careful three-star that
              travelers return to.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="lux-card rounded-[2rem] p-4">
              <img
                src={heroRoom}
                alt=""
                loading="lazy"
                width={1920}
                height={1280}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["1978", "Family-owned and still personally run"],
                ["2023", "Full-room refurbishment completed"],
                ["24/7", "Reception staffed day and night"],
              ].map(([title, body]) => (
                <div key={title} className="lux-card rounded-[1.75rem] p-6">
                  <div className="font-serif text-4xl text-brass">{title}</div>
                  <p className="mt-3 text-foreground/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Amenities" title="What's included.">
        <div className="grid gap-5 md:grid-cols-3">
          {amenities.map(({ title, body, icon: Icon }) => (
            <div key={title} className="lux-card rounded-[1.8rem] p-6">
              <Icon className="h-5 w-5 text-brass" strokeWidth={2} />
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Practical" title="The small print, plainly.">
        <dl className="grid gap-5 text-foreground/80 md:grid-cols-2">
          {[
            ["Check-in", "From 14:00. Early arrival? Drop your bags."],
            ["Check-out", "Until 11:00. Late check-out on request."],
            ["Cancellation", "Free up to 48 hours before arrival."],
            ["Payment", "All major cards. Cash up to €1,000."],
            ["Accessibility", "Lift to all floors. One ground-floor accessible room."],
            ["Languages", "French, English, Spanish, Italian at the desk."],
          ].map(([t, b]) => (
            <div key={t} className="lux-card rounded-[1.6rem] p-6">
              <dt className="eyebrow">{t}</dt>
              <dd className="mt-3 font-serif text-2xl leading-snug">{b}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
