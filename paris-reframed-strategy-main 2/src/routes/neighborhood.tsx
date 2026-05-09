import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Clock3, Coffee, TrainFront, Trees } from "lucide-react";
import { Section } from "@/components/site/Section";
import neighborhood from "@/assets/neighborhood.jpg";

export const Route = createFileRoute("/neighborhood")({
  head: () => ({
    meta: [
      { title: "The Neighborhood — Hôtel Royal Paris" },
      {
        name: "description",
        content:
          "Ivry-sur-Seine: riverside walks, neighborhood markets, and direct line 7 access to central Paris.",
      },
      { property: "og:title", content: "The Neighborhood — Hôtel Royal Paris" },
    ],
  }),
  component: Neighborhood,
});

const places = [
  ["Latin Quarter", "10 min", "Métro 7"],
  ["Notre-Dame", "12 min", "Métro 7"],
  ["Le Marais", "18 min", "Métro 7 + 1"],
  ["Louvre", "16 min", "Métro 7"],
  ["Bibliothèque F. Mitterrand", "7 min", "Métro 14"],
  ["Accor Arena (Bercy)", "6 min", "Métro 14"],
  ["Gare de Lyon", "9 min", "Métro 14"],
  ["Orly Airport", "25 min", "Tram 9 + Orlyval"],
];

const highlights: Array<{ title: string; body: string; icon: LucideIcon }> = [
  {
    title: "Riverside mornings",
    body: "Walk the Seine before breakfast and return to the hotel without crossing tourist queues.",
    icon: Trees,
  },
  {
    title: "Connected evenings",
    body: "Metro 7 and 14 links make dinner, concerts, and museum plans easy to pull off.",
    icon: TrainFront,
  },
];

const ideas: Array<{ title: string; body: string; icon: LucideIcon }> = [
  {
    title: "Walk the quay at dawn",
    body: "Twenty minutes along the Seine, all the way to the Bibliothèque. Coffee at the kiosk under the willow.",
    icon: Clock3,
  },
  {
    title: "Marché d'Ivry",
    body: "Tuesday, Friday, Sunday morning. Oysters, cheese, the season's stone fruit. Bring cash.",
    icon: Coffee,
  },
  {
    title: "MAC VAL",
    body: "The contemporary art museum in Vitry — fifteen minutes by bus. Most Parisians have never been. They should have.",
    icon: Trees,
  },
];

function Neighborhood() {
  return (
    <>
      <section className="relative flex min-h-[560px] items-end overflow-hidden px-4 pb-5 pt-8 md:min-h-[720px] md:px-6">
        <img
          src={neighborhood}
          alt="The Seine at dawn"
          width={1280}
          height={1600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,19,25,0.18),rgba(10,19,25,0.74))]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 px-6 pb-10 pt-12 backdrop-blur-md md:px-10 md:pb-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-brass">Ivry · Rive Gauche</p>
              <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.96] text-cream md:text-7xl">
                The Paris that residents keep for themselves.
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="lux-panel-dark rounded-[1.6rem] p-5 text-cream">
                <p className="text-sm leading-relaxed text-cream/75">
                  A calmer base on the Seine edge, with the city center within easy reach and the
                  tourist churn left behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="A different rhythm" title="Why we love being here.">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7 grid gap-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Ivry is not the postcard. It is the quay where Parisians actually run in the morning.
              The covered market on Sunday. The bakery that every taxi driver agrees about. The
              cinema with the unreasonable seats.
            </p>
            <p>
              It&apos;s also seven minutes from the Bibliothèque Nationale, six from Bercy, and ten
              from Notre-Dame on a single metro line. You get all of central Paris — without
              sleeping under it.
            </p>
          </div>
          <div className="md:col-span-5 grid gap-4">
            {highlights.map(({ title, body, icon: Icon }) => (
              <article key={title} className="lux-card rounded-[1.8rem] p-6">
                <Icon className="h-5 w-5 text-brass" strokeWidth={2} />
                <h3 className="mt-5 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-foreground/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Travel times" title="Everything, on one line.">
        <div className="grid gap-4 md:grid-cols-2">
          {places.map(([name, time, line]) => (
            <div
              key={name}
              className="lux-card flex items-baseline justify-between gap-5 rounded-[1.6rem] p-6"
            >
              <span className="font-serif text-xl md:text-2xl">{name}</span>
              <div className="flex items-center gap-4">
                <span className="eyebrow text-foreground/60">{line}</span>
                <span className="font-serif text-2xl tabular-nums text-brass">{time}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Worth the detour" title="Three things to do this week.">
        <div className="grid gap-6 md:grid-cols-3">
          {ideas.map(({ title, body, icon: Icon }) => (
            <article key={title} className="lux-card rounded-[1.8rem] p-6">
              <Icon className="h-5 w-5 text-brass" strokeWidth={2} />
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
