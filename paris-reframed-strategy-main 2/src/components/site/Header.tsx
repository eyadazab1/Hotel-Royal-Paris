import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const nav = [
  { to: "/rooms", label: "The Rooms" },
  { to: "/hotel", label: "The Hotel" },
  { to: "/neighborhood", label: "The Neighborhood" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "px-3 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled ? "lux-panel rounded-full px-6 md:px-8" : "px-6 md:px-10"
        }`}
      >
        <div className="h-20 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 leading-none group"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-white/70 text-foreground shadow-sm">
              <Sparkles className="h-4 w-4 text-brass" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <span className="block truncate font-serif text-xl md:text-[1.7rem] tracking-tight">
                Hôtel Royal Paris
              </span>
              <span className="mt-1 hidden text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-foreground/55 md:block">
                Ivry · Riverside calm · Direct booking perks
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-foreground/10 bg-white/55 px-2 py-2 backdrop-blur md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-full px-4 py-2 text-sm tracking-wide transition-colors ${
                  location.pathname === n.to
                    ? "bg-foreground text-cream hover:text-cream"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-foreground/10 bg-white/50 px-4 py-2 text-xs text-foreground/70 backdrop-blur lg:flex">
              <span className="h-2 w-2 rounded-full bg-forest" />
              Free cancellation up to 48h
            </div>
            <Link to="/contact" className="lux-button hidden md:inline-flex">
              Plan Your Stay
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-foreground/10 bg-white/65 backdrop-blur md:hidden"
            >
              <span
                className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-3 mt-3 md:hidden">
          <div className="lux-panel rounded-[2rem] px-6 py-6">
            <div className="mb-5 rounded-[1.5rem] bg-foreground px-4 py-4 text-cream">
              <p className="eyebrow text-brass">Direct booking perks</p>
              <p className="mt-3 font-serif text-2xl leading-tight">
                Quiet rooms, best-rate promise, and a front desk that actually answers.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-full border border-foreground/10 bg-white/55 px-5 py-4 font-serif text-xl"
                >
                  <span>{n.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-brass" strokeWidth={2} />
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="lux-button mt-5 w-full">
              Plan Your Stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
