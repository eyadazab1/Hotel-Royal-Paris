import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="lux-panel max-w-md rounded-[2rem] p-10 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl">This page is elsewhere.</h1>
        <p className="mt-4 text-foreground/70">
          The page you&apos;re seeking has wandered off the map.
        </p>
        <Link to="/" className="lux-button mt-8">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="lux-panel max-w-md rounded-[2rem] p-10 text-center">
        <h1 className="font-serif text-3xl">Something went sideways.</h1>
        <p className="mt-3 text-foreground/70 text-sm">Please try again, or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="lux-button"
          >
            Try Again
          </button>
          <a href="/" className="lux-button-outline">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hôtel Royal Paris — Paris, with room to breathe" },
      {
        name: "description",
        content:
          "A quiet 3-star refuge along the Seine in Ivry — ten minutes from the Latin Quarter. Spacious rooms, refined service, transparent rates.",
      },
      { name: "theme-color", content: "#111f26" },
      { property: "og:title", content: "Hôtel Royal Paris — Paris, with room to breathe" },
      {
        property: "og:description",
        content:
          "A quiet 3-star refuge along the Seine in Ivry — ten minutes from the Latin Quarter.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="lux-shell">
        <div className="lux-orb lux-orb-brass left-[-8rem] top-[18rem] h-64 w-64 md:h-[24rem] md:w-[24rem]" />
        <div className="lux-orb lux-orb-seine right-[-6rem] top-[44rem] h-60 w-60 md:h-[28rem] md:w-[28rem]" />
        <Header />
        <main className="relative pt-20 md:pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
