import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-28 md:mt-36 px-4 pb-4 md:px-6 md:pb-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink text-cream shadow-[0_36px_120px_-48px_rgba(8,10,12,0.8)]">
        <div className="grid gap-12 px-6 py-12 md:grid-cols-12 md:px-10 md:py-16">
          <div className="md:col-span-5">
            <div className="lux-pill border-white/10 bg-white/5 text-cream/80">
              Boutique calm on the Left Bank edge
            </div>
            <div className="mt-6 font-serif text-4xl md:text-5xl leading-[0.95]">
              Hôtel Royal Paris
            </div>
            <p className="eyebrow mt-3 text-brass">Ivry · Rive Gauche</p>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              Paris, with room to breathe. A quiet riverside stay with direct access to the Latin
              Quarter, Bercy, and the city beyond.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-cream/70">
              <span className="lux-pill border-white/10 bg-white/5 text-cream/80">
                8.2 Booking.com
              </span>
              <span className="lux-pill border-white/10 bg-white/5 text-cream/80">
                7.7 Google Reviews
              </span>
              <span className="lux-pill border-white/10 bg-white/5 text-cream/80">
                Family-run since 1978
              </span>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brass transition-colors hover:text-cream"
            >
              Start a direct booking enquiry
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="md:col-span-3 md:pl-6">
            <p className="eyebrow text-cream/45">Visit</p>
            <address className="mt-4 not-italic leading-relaxed text-cream/80">
              22 Rue de la Liberté
              <br />
              94200 Ivry-sur-Seine
              <br />
              France
            </address>
            <p className="mt-5 text-sm text-cream/55">
              7 minutes to Bibliothèque F. Mitterrand, 10 to the Latin Quarter.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-cream/45">Reach</p>
            <ul className="mt-4 space-y-3 text-cream/80">
              <li>+33 1 46 70 00 00</li>
              <li>stay@royalparis.fr</li>
              <li>Front desk, 24/7</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-cream/45">Explore</p>
            <ul className="mt-4 space-y-3 text-cream/80">
              <li>
                <Link to="/rooms" className="hover:text-brass transition-colors">
                  The Rooms
                </Link>
              </li>
              <li>
                <Link to="/hotel" className="hover:text-brass transition-colors">
                  The Hotel
                </Link>
              </li>
              <li>
                <Link to="/neighborhood" className="hover:text-brass transition-colors">
                  Neighborhood
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brass transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-xs text-cream/50 md:flex-row md:px-10">
            <span>© {new Date().getFullYear()} Hôtel Royal Paris. Tous droits réservés.</span>
            <span>3-star property · Best-rate promise · Free cancellation up to 48 hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
