import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BedDouble, Coffee, LampFloor, ShowerHead, Sparkles } from "lucide-react";
import roomClassic from "@/assets/room-classic.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomFamily from "@/assets/room-family.jpg";
import { Section } from "@/components/site/Section";
import { BookingBar } from "@/components/site/BookingBar";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "The Rooms — Hôtel Royal Paris" },
      {
        name: "description",
        content:
          "Three room types from 18 to 28 m². Rainfall showers, Nespresso, blackout drapes, and the quiet of a residential street.",
      },
      { property: "og:title", content: "The Rooms — Hôtel Royal Paris" },
    ],
  }),
  component: Rooms,
});

const rooms = [
  {
    name: "Classic Double",
    size: "18 m²",
    sleeps: "Up to 2",
    from: "€129",
    img: roomClassic,
    intro: "The essentials, exactly right.",
    body: "A queen bed dressed in pressed Egyptian cotton. A walk-in rainfall shower in honed cream stone. The morning's first espresso pulled from a Nespresso on the desk. Outside, the soft hush of a side street; inside, blackout drapes that hold the night a little longer.",
    features: [
      "Queen bed",
      "Rainfall shower",
      "Nespresso machine",
      "Blackout drapes",
      "Free Wi-Fi",
      "Air conditioning",
    ],
    signature: "Best for short Paris stays that still need proper sleep.",
  },
  {
    name: "Superior Room",
    size: "22 m²",
    sleeps: "Up to 2",
    from: "€169",
    img: roomSuperior,
    intro: "Room to settle in.",
    body: "A few square meters more, and a room that knows what to do with them. A dedicated writing desk by the window. A slipper chair for the late chapter. Tall windows that catch the morning, and a bath drawn deep enough to actually sit in.",
    features: [
      "Queen bed",
      "Writing desk",
      "Soaking bath",
      "Tall windows",
      "Free Wi-Fi",
      "Air conditioning",
    ],
    signature: "Best for couples who want time in the room, not only out of it.",
  },
  {
    name: "Family Suite",
    size: "28 m²",
    sleeps: "Up to 4",
    from: "€229",
    img: roomFamily,
    intro: "Together, with breathing room.",
    body: "Two queen beds, two sinks, and the kind of square footage families stop apologising for. A reading nook for the early riser, a luggage bench for the chronic over-packer, and a bathroom designed for a morning when everyone needs it at once.",
    features: [
      "Two queen beds",
      "Twin basins",
      "Family-sized bath",
      "Reading nook",
      "Free Wi-Fi",
      "Air conditioning",
    ],
    signature: "Best for families who need the city nearby and the room to decompress.",
  },
];

const included: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Free Wi-Fi", icon: Sparkles },
  { label: "Nespresso or espresso access", icon: Coffee },
  { label: "Rainfall shower or bath", icon: ShowerHead },
  { label: "Proper bedding and blackout drapes", icon: BedDouble },
];

function Rooms() {
  return (
    <>
      <Section
        eyebrow="The Rooms"
        title={
          <>
            Spacious by Parisian standards.
            <br />
            <em className="not-italic text-brass">Quiet by any.</em>
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-12">
          <p className="lux-kicker md:col-span-7">
            Eighteen rooms across four floors, refurbished in 2023 with one brief: help travelers
            land softly. Warm materials, generous proportions, and the quiet that people remember
            after the trip.
          </p>
          <div className="lux-card rounded-[2rem] p-6 md:col-span-5">
            <p className="eyebrow">Included in every stay</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {included.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-foreground/8 bg-white/55 p-4"
                >
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2} />
                  <span className="text-sm text-foreground/75">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl space-y-16 px-6 pb-24 md:px-10 md:space-y-20 md:pb-28">
        {rooms.map((r, i) => (
          <article key={r.name} className="grid items-center gap-6 md:grid-cols-12 md:gap-8">
            <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="lux-card overflow-hidden rounded-[2rem] p-4">
                <div className="aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-sand">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="lux-card rounded-[2rem] p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="lux-pill">{r.size}</span>
                  <span className="lux-pill">{r.sleeps}</span>
                  <span className="lux-pill">{r.from} / night</span>
                </div>
                <h2 className="mt-5 font-serif text-4xl leading-[1.02] md:text-5xl">{r.name}</h2>
                <p className="mt-4 font-serif text-xl italic text-brass">{r.intro}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-foreground/45">
                  {r.signature}
                </p>
                <p className="mt-6 text-foreground/75 leading-relaxed">{r.body}</p>
                <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground/80">
                  {r.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-foreground/10 bg-white/45 px-4 py-3 text-center"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-4 border-t border-foreground/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-sm text-foreground/60">
                    <LampFloor className="h-4 w-4 text-brass" strokeWidth={2} />
                    Calm interiors, tall windows, and soft lighting
                  </div>
                  <Link to="/contact" className="lux-button">
                    Reserve this room
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Section eyebrow="Check availability" title="Find your dates.">
        <div className="lux-card rounded-[2.4rem] p-7 md:p-8">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Direct booking</p>
              <h3 className="mt-4 font-serif text-4xl leading-[1.02]">
                Best rates, fewer clicks, real people on the other end.
              </h3>
            </div>
            <div className="md:col-span-8">
              <BookingBar />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
