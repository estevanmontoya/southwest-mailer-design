import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Mail, Phone, QrCode, Shield, Sparkles, Truck, Users } from "lucide-react";
import heroImg from "@/assets/suburb-hero.jpg";
import postcardImg from "@/assets/postcard-stack.jpg";
import mailboxImg from "@/assets/mailbox.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Southwest Media Agency — Reach Thousands of Homes for 10¢ Each" },
      {
        name: "description",
        content:
          "Affordable shared direct mail postcard advertising for local businesses across the Southwest. Reach thousands of middle-class suburban homes for just 10¢ per household.",
      },
      { property: "og:title", content: "Southwest Media Agency — Direct Mail Advertising" },
      {
        property: "og:description",
        content: "Shared postcard mailers delivered to thousands of Southwest suburban homes for 10¢ each.",
      },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">SW</span>
          <span className="hidden sm:inline">Southwest Media Agency</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#packages" className="hover:text-primary">Packages</a>
          <a href="#how" className="hover:text-primary">How It Works</a>
          <a href="#areas" className="hover:text-primary">Service Areas</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
        </nav>
        <a
          href="#reserve"
          className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Reserve Spot <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-24 lg:px-8">
        <div className="lg:col-span-6 lg:pt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Shared Direct Mail · Southwest USA
          </span>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Reach Thousands of Homes for Just{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">10¢ Per Household</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Affordable postcard advertising for local businesses. Get your offer in the hands of real
            middle-class suburban homeowners — no clicks, no algorithms, just mailboxes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reserve" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition hover:opacity-90">
              Reserve Your Spot <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3.5 text-base font-bold text-foreground transition hover:bg-foreground hover:text-background">
              View Packages
            </a>
            <a href="#areas" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-base font-bold text-secondary-foreground transition hover:opacity-90">
              Check Availability
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Per Home</dt>
              <dd className="mt-1 text-3xl font-black text-foreground">10¢</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Homes Reached</dt>
              <dd className="mt-1 text-3xl font-black text-foreground">5K+</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industry Lock</dt>
              <dd className="mt-1 text-3xl font-black text-foreground">1 of 1</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg">
            <img
              src={heroImg}
              alt="Aerial view of a Southwest suburban neighborhood at sunset"
              width={1600}
              height={1100}
              className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-2xl"
            />
            {/* Postcard mockup 1 */}
            <div
              className="absolute -left-6 top-12 w-56 -rotate-6 rounded-xl bg-card p-3 sm:w-72"
              style={{ boxShadow: "var(--shadow-postcard)" }}
            >
              <div className="rounded-lg p-4 text-primary-foreground" style={{ background: "var(--gradient-sunset)" }}>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Metro Mailer · 9×12</div>
                <div className="mt-2 text-2xl font-black leading-tight">Save 25% This Spring</div>
                <div className="mt-3 inline-block rounded-full bg-background/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Your Logo Here</div>
              </div>
            </div>
            {/* Postcard mockup 2 */}
            <div
              className="absolute -right-4 bottom-8 w-48 rotate-6 rounded-xl bg-card p-3 sm:w-64"
              style={{ boxShadow: "var(--shadow-postcard)" }}
            >
              <div className="rounded-lg bg-secondary p-4 text-secondary-foreground">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Community Card · 6.5×12</div>
                <div className="mt-2 text-xl font-black leading-tight">Open House Sunday</div>
                <div className="mt-3 h-10 w-10 rounded-md bg-background/10 grid place-items-center">
                  <QrCode className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosBar() {
  return (
    <div className="border-b border-border bg-muted/50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        <span>Phoenix</span><span>·</span>
        <span>Scottsdale</span><span>·</span>
        <span>Tucson</span><span>·</span>
        <span>Albuquerque</span><span>·</span>
        <span>Las Vegas</span><span>·</span>
        <span>El Paso</span>
      </div>
    </div>
  );
}

const packages = [
  {
    name: "Metro Mailer",
    size: "9 × 12 Postcard",
    homes: "5,000",
    features: [
      "Oversized 9×12 postcard format",
      "Delivered to 5,000 homes",
      "Exclusive industry placement",
      "Shared mailer with non-competing brands",
      "Approx. 10¢ per home",
    ],
    accent: "primary" as const,
  },
  {
    name: "Community Card",
    size: "6.5 × 12 Postcard",
    homes: "2,500",
    features: [
      "Tall 6.5×12 postcard format",
      "Delivered to 2,500 homes",
      "Exclusive industry placement",
      "Shared mailer with non-competing brands",
      "Approx. 10¢ per home",
    ],
    accent: "secondary" as const,
  },
];

function Packages() {
  return (
    <section id="packages" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Packages</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Pick your mailer. Lock your industry.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Two formats. One promise — <strong className="text-foreground">one business per industry per mailer</strong>.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {packages.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition hover:border-primary sm:p-10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-black">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{p.size}</p>
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 text-center ${p.accent === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Homes</div>
                  <div className="text-2xl font-black leading-none">{p.homes}</div>
                </div>
              </div>

              {/* Postcard preview */}
              <div
                className={`mt-8 aspect-[5/3] w-full rounded-2xl p-6 ${p.accent === "primary" ? "text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                style={p.accent === "primary" ? { background: "var(--gradient-sunset)" } : undefined}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-75">{p.size}</div>
                  <div>
                    <div className="text-3xl font-black leading-tight sm:text-4xl">Your Headline Here</div>
                    <div className="mt-2 text-sm opacity-80">Shared with up to 9 non-competing local businesses.</div>
                  </div>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Starting at</div>
                  <div className="text-2xl font-black">~10¢ per home</div>
                </div>
                <a
                  href="#reserve"
                  className="inline-flex items-center gap-1 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition hover:bg-primary"
                >
                  Reserve <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl border-2 border-primary bg-primary/5 px-6 py-5 text-center">
          <Shield className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-base font-bold sm:text-lg">One Business Per Industry Per Mailer — guaranteed exclusivity.</p>
        </div>
      </div>
    </section>
  );
}

function AddOn() {
  return (
    <section className="border-b border-border bg-secondary py-20 text-secondary-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Add-on</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Landing Page + QR Code
          </h2>
          <p className="mt-2 text-3xl font-black text-accent">$150 flat</p>
          <p className="mt-4 max-w-lg text-lg text-secondary-foreground/80">
            Turn every postcard into a measurable campaign. We build the page, generate the QR, and route the leads.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Mobile responsive landing page",
              "Unique QR code",
              "Click-to-call button",
              "Contact form",
              "Business information",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm font-medium">
                <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#reserve"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition hover:opacity-90"
          >
            Add to my package <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rotate-3 rounded-3xl bg-background/5" />
          <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-3xl border border-background/10 bg-background p-6 text-foreground shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="ml-3 text-xs text-muted-foreground">yourbusiness.swma.co</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="h-6 w-3/4 rounded bg-muted" />
              <div className="h-3 w-full rounded bg-muted" />
              <div className="h-3 w-5/6 rounded bg-muted" />
              <div className="flex items-center gap-3 pt-2">
                <div className="grid h-16 w-16 place-items-center rounded-lg border-2 border-foreground">
                  <QrCode className="h-10 w-10" />
                </div>
                <button type="button" className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                  <Phone className="h-4 w-4" /> Call Now
                </button>
              </div>
              <div className="grid gap-2 pt-2">
                <div className="h-9 rounded-md border border-input" />
                <div className="h-9 rounded-md border border-input" />
                <div className="h-9 rounded-md bg-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Reserve your spot", d: "Pick a mailer and lock your industry. We confirm availability in your zone." },
  { n: "02", t: "Design your postcard", d: "Send us your art or use our in-house design team — included with every package." },
  { n: "03", t: "We print & mail", d: "Bulk-printed alongside non-competing local brands and dropped via USPS EDDM." },
  { n: "04", t: "Track the response", d: "Add a QR-coded landing page to measure scans, calls, and form fills." },
];

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">How It Works</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">From idea to mailbox in 2 weeks.</h2>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border-2 border-border bg-card p-6 transition hover:border-primary">
              <div className="text-5xl font-black text-primary">{s.n}</div>
              <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Users, t: "Real households", d: "Targeting middle-class suburban homeowners with disposable income." },
  { icon: Shield, t: "Industry exclusivity", d: "You're the only plumber, dentist, or realtor on every mailer." },
  { icon: Truck, t: "Done-for-you", d: "Design, print, postage, and delivery — all handled in-house." },
  { icon: Mail, t: "Tangible & trusted", d: "Postcards get held, posted, and remembered — unlike skipped ads." },
];

function Benefits() {
  return (
    <section className="border-b border-border bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Benefits</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              The cheapest way to land in 5,000 real homes.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Shared direct mail gives you billboard-level reach for a fraction of the cost — without
              competing with five other businesses in your trade.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.t} className="rounded-2xl border border-border bg-card p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={postcardImg}
              alt="Stack of printed marketing postcards"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const areas = [
  { city: "Phoenix Metro", state: "AZ", zones: 14 },
  { city: "Scottsdale", state: "AZ", zones: 6 },
  { city: "Tucson", state: "AZ", zones: 5 },
  { city: "Albuquerque", state: "NM", zones: 7 },
  { city: "Las Vegas", state: "NV", zones: 9 },
  { city: "El Paso", state: "TX", zones: 5 },
  { city: "Santa Fe", state: "NM", zones: 3 },
  { city: "Mesa", state: "AZ", zones: 6 },
];

function ServiceAreas() {
  return (
    <section id="areas" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Service Areas</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Covering the Southwest's fastest-growing suburbs.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We map every zone by household income, ownership rate, and route density — so your card
              lands where it actually pays back.
            </p>
            <a
              href="#reserve"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-base font-bold text-background transition hover:bg-primary"
            >
              Check Availability <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border-2 border-border">
              <img src={mailboxImg} alt="Suburban Southwest mailbox" width={1200} height={900} loading="lazy" className="aspect-[3/2] w-full object-cover" />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {areas.map((a) => (
                <li key={a.city} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-1.5 text-primary">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{a.state}</span>
                  </div>
                  <div className="mt-1 text-sm font-bold">{a.city}</div>
                  <div className="text-xs text-muted-foreground">{a.zones} zones</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What does 'shared mailer' mean?", a: "Your postcard goes out alongside up to 9 other non-competing local businesses, splitting the postage and print cost so each advertiser pays roughly 10¢ per household." },
  { q: "How do I know my competitor won't be on the same card?", a: "Every mailer is locked: one business per industry. Once you reserve, that trade is yours in that zone for the run." },
  { q: "Do you handle the design?", a: "Yes — in-house design is included. Send us your logo, photos, and offer; we produce print-ready art for your approval." },
  { q: "When will my postcard arrive in homes?", a: "Standard turnaround is about two weeks from approved art. We'll send you a mail drop date and tracking confirmation." },
  { q: "What's the minimum commitment?", a: "A single mailer. There are no contracts — most clients book quarterly once they see the response." },
  { q: "Can I add a QR-coded landing page?", a: "Absolutely. Our $150 add-on includes a mobile landing page, unique QR, click-to-call, and a contact form." },
];

function Faq() {
  return (
    <section id="faq" className="border-b border-border bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Questions, answered.</h2>
        </div>
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 open:bg-muted/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-background transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReserveCta() {
  return (
    <section id="reserve" className="relative overflow-hidden bg-foreground py-24 text-background sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-sunset)" }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          Reserve your industry. Before someone else does.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-background/80">
          We only run one plumber, one dentist, one realtor per mailer. Spots fill 4–6 weeks ahead.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@swma.co" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-xl transition hover:opacity-90">
            Reserve Your Spot <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+18005550199" className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 px-7 py-4 text-base font-bold text-background transition hover:bg-background hover:text-foreground">
            <Phone className="h-4 w-4" /> (800) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs">SW</span>
          Southwest Media Agency
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Southwest Media Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <LogosBar />
      <Packages />
      <AddOn />
      <HowItWorks />
      <Benefits />
      <ServiceAreas />
      <Faq />
      <ReserveCta />
      <Footer />
    </main>
  );
}
