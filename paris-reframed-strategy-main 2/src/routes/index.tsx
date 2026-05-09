import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, Coffee, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import heroRoom from "@/assets/hero-room.jpg";
import roomClassic from "@/assets/room-classic.jpg";
import roomSuperior from "@/assets/room-superior.jpg";
import roomFamily from "@/assets/room-family.jpg";
import neighborhood from "@/assets/neighborhood.jpg";
import { BookingBar } from "@/components/site/BookingBar";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hôtel Royal Paris — Paris, with room to breathe" },
      {
        name: "description",
        content:
          "A quiet 3-star refuge along the Seine, ten minutes from the Latin Quarter. Spacious rooms, refined service.",
      },
    ],
  }),
  component: Index,
});

const rooms = [
  {
    name: "Classic Double",
    size: "18 m²",
    img: roomClassic,
    from: "€129",
    desc: "A composed retreat with rainfall shower, Nespresso, and the soft hush of a side street.",
  },
  {
    name: "Superior Room",
    size: "22 m²",
    img: roomSuperior,
    from: "€169",
    desc: "Generous proportions, a writing desk, and morning light through tall windows.",
  },
  {
    name: "Family Suite",
    size: "28 m²",
    img: roomFamily,
    from: "€229",
    desc: "Two beds, two basins, room for everyone — without sacrificing the calm.",
  },
];

const perks = [
  {
    icon: Coffee,
    title: "Espresso before the city wakes",
    body: "Breakfast with warm viennoiseries, fresh fruit, and all-day coffee that feels more host than hotel.",
  },
  {
    icon: ShieldCheck,
    title: "A three-star stay run with intent",
    body: "Family-owned since 1978, refurbished in 2023, and built around calm rather than spectacle.",
  },
  {
    icon: MapPin,
    title: "Connected to Paris, removed from the crush",
    body: "Walk the quay, reach Bercy in minutes, and arrive in the Latin Quarter without sleeping inside the noise.",
  },
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[860px] items-end overflow-hidden px-4 pb-6 pt-10 md:min-h-[980px] md:px-6 md:pt-8">
        <img
          src={heroRoom}
          alt="A sunlit Parisian guest room at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(9,16,20,0.82)_10%,rgba(9,16,20,0.35)_46%,rgba(9,16,20,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(193,151,85,0.26),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(115,160,176,0.16),transparent_22%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 md:grid-cols-12 md:px-10 md:pb-24">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="lux-reveal flex flex-wrap gap-3">
              <span className="lux-pill border-white/15 bg-white/10 text-cream/80">
                Hôtel Royal Paris · Est. 1978
              </span>
              <span className="lux-pill border-white/15 bg-white/10 text-cream/80">
                Direct booking perks included
              </span>
            </div>
            <h1 className="lux-reveal mt-6 max-w-5xl font-serif text-5xl leading-[0.9] text-cream md:text-7xl lg:text-[6.5rem]">
              Paris,
              <br />
              with room
              <br />
              to breathe.
            </h1>
            <p className="lux-reveal mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              A quiet riverside address with spacious rooms, thoughtful service, and direct access
              to the Latin Quarter without the hotel-row fatigue.
            </p>
            <div className="lux-reveal mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/rooms" className="lux-button">
                View the rooms
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                to="/contact"
                className="lux-button-outline border-white/20 bg-white/10 text-cream hover:bg-white/20 hover:text-cream"
              >
                Speak with reception
              </Link>
            </div>
            <div className="lux-reveal mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ["8.2 / 10", "Booking.com"],
                ["10 min", "to the Latin Quarter"],
                ["22 m²", "smallest room size"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                >
                  <div className="font-serif text-3xl text-cream">{value}</div>
                  <div className="mt-2 text-sm text-cream/65">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-4 md:self-end">
            <div className="lux-panel-dark lux-reveal rounded-[2rem] p-6 text-cream md:p-7">
              <p className="eyebrow text-brass">Why clients notice this stay</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.02]">
                Boutique calm, without boutique chaos.
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "A genuinely quiet address on the Seine edge",
                  "Refreshed rooms that prioritize sleep, light, and space",
                  "Direct, personal service instead of platform friction",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-cream/80">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2.2} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-cream/45">Best for</p>
                <p className="mt-3 font-serif text-2xl text-cream">
                  Weekenders who want Paris close, and sleep even closer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-12 max-w-6xl px-6 md:-mt-20 md:px-10">
        <BookingBar floating />
      </div>

      <Section
        eyebrow="A quieter Paris"
        title={
          <>
            Stay close to everything.
            <br />
            <em className="not-italic text-brass">Far from the noise.</em>
          </>
        }
      >
        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Ivry-sur-Seine is the Paris that residents keep for themselves — riverside paths,
              neighborhood markets, a tempo set by the river rather than the metro.
            </p>
            <p>
              We are a small, family-owned hotel that has perfected one thing: making travelers feel
              rested. Spacious rooms. Real beds. Espresso in the morning and silence at night.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="lux-card rounded-[2rem] p-6">
              <p className="eyebrow">The rhythm</p>
              <div className="mt-5 space-y-4">
                {[
                  ["7 min", "to Bibliothèque F. Mitterrand"],
                  ["10 min", "to Notre-Dame & the Latin Quarter"],
                  ["6 min", "to Accor Arena"],
                  ["22 m²", "in our smallest room"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="flex items-baseline justify-between gap-5 border-b border-foreground/8 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="font-serif text-2xl text-brass">{n}</span>
                    <span className="max-w-[14rem] text-right text-foreground/75">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="The Rooms"
        title={
          <>
            Three room types.
            <br />
            Each one, somewhere to land.
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-12">
          {rooms.map((r, index) => (
            <article
              key={r.name}
              className={`group overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:col-span-6" : "md:col-span-3"
              }`}
            >
              <div className="lux-card h-full rounded-[2rem] p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">{r.name}</h3>
                    <p className="mt-2 text-sm text-foreground/55">{r.size}</p>
                  </div>
                  <span className="lux-pill shrink-0">{r.from} / night</span>
                </div>
                <p className="mt-4 text-foreground/75 leading-relaxed">{r.desc}</p>
                <Link
                  to="/rooms"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brass"
                >
                  Discover the room details
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="px-4 md:px-6">
        <div className="lux-panel-dark mx-auto max-w-7xl rounded-[2.4rem] px-6 py-12 text-cream md:px-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-brass">What booking direct feels like</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.02]">
                Small-hotel service, made obvious.
              </h2>
            </div>
            <div className="md:col-span-8 grid gap-5 md:grid-cols-3">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <article
                    key={perk.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
                  >
                    <Icon className="h-5 w-5 text-brass" strokeWidth={2} />
                    <h3 className="mt-5 font-serif text-2xl">{perk.title}</h3>
                    <p className="mt-3 text-cream/70 leading-relaxed">{perk.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The Neighborhood"
        title={
          <>
            The Seine runs past our door.
            <br />
            <em className="not-italic text-brass">Central Paris stays close.</em>
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={neighborhood}
                alt="A misty morning along the Seine near Ivry"
                loading="lazy"
                width={1280}
                height={1600}
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,29,36,0.56))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream md:p-8">
                <p className="eyebrow text-brass">Morning route</p>
                <p className="mt-3 max-w-xl font-serif text-3xl leading-tight">
                  Walk the quay to the Bibliothèque, stop for coffee, and rejoin the city when
                  you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="lux-card rounded-[2rem] p-6">
                <p className="eyebrow">One-line access</p>
                <div className="mt-5 space-y-4">
                  {[
                    ["Latin Quarter", "10 min"],
                    ["Notre-Dame", "12 min"],
                    ["Bercy / Accor Arena", "6 min"],
                  ].map(([place, time]) => (
                    <div
                      key={place}
                      className="flex items-center justify-between border-b border-foreground/8 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="font-serif text-2xl">{place}</span>
                      <span className="text-sm text-foreground/55">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lux-card rounded-[2rem] p-6">
                <p className="eyebrow">A guest note</p>
                <blockquote className="mt-4 font-serif text-3xl leading-tight">
                  “The walk along the Seine in the morning made the trip.”
                </blockquote>
                <p className="mt-4 text-sm text-foreground/60">Yuki S. · Tokyo · Google Reviews</p>
                <Link
                  to="/neighborhood"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brass"
                >
                  Explore the area
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="In their words" title="What guests say after they leave.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              q: "Spacious, spotless, and unexpectedly quiet — we slept better than in the five-star we left in the Marais.",
              a: "Helen & Marc · London",
              s: "Booking.com · 9/10",
            },
            {
              q: "The owner met us at the door with espresso. The whole stay felt like someone had thought about how travelers actually recover.",
              a: "Nadia T. · Montréal",
              s: "Direct guest feedback",
            },
          ].map((t) => (
            <figure key={t.a} className="lux-card rounded-[2rem] p-7 md:p-8">
              <div className="flex items-center gap-2 text-brass">
                <Sparkles className="h-4 w-4" strokeWidth={2} />
                <Sparkles className="h-4 w-4" strokeWidth={2} />
                <Sparkles className="h-4 w-4" strokeWidth={2} />
              </div>
              <blockquote className="mt-5 font-serif text-3xl leading-snug text-balance">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-4 text-sm text-foreground/60">
                <span>{t.a}</span>
                <span className="eyebrow">{t.s}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="pt-0 !pb-24 md:!pb-28">
        <div className="lux-card overflow-hidden rounded-[2.5rem] p-8 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.98] md:text-6xl">
                Reserve your <em className="not-italic text-brass">quieter Paris.</em>
              </h2>
              <p className="mt-5 max-w-lg text-lg text-foreground/70">
                Best rates booked direct, no platform fees, and free cancellation up to 48 hours
                before arrival.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="lux-pill">
                  <Clock3 className="h-3.5 w-3.5 text-brass" strokeWidth={2} />
                  24/7 reception
                </span>
                <span className="lux-pill">
                  <Sparkles className="h-3.5 w-3.5 text-brass" strokeWidth={2} />
                  Direct booking perks
                </span>
              </div>
            </div>
            <div className="md:col-span-7">
              <BookingBar />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
