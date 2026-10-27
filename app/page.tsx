import Image from "next/image";

const experiences = [
  {
    label: "01 · Surf",
    title: "Catch your first – or best – Atlantic wave",
    body: "Lessons and guided sessions on the beaches just outside the city, matched to your level, with boards, wetsuits and transfers included.",
    price: "From €35",
    image: "/images/surf.jpg",
    alt: "A surfer riding a green Atlantic wave",
    position: "46% 50%",
  },
  {
    label: "02 · Yoga",
    title: "Slow down where the city meets the light",
    body: "Small-group and private classes on terraces, gardens and beaches, at sunrise or sunset. All levels welcome.",
    price: "From €20",
    image: "/images/yoga.jpg",
    alt: "A small group doing sunset yoga on the beach facing the sea",
    position: "62% 55%",
  },
  {
    label: "03 · Tables",
    title: "Eat where Lisbon actually eats",
    body: "From family-run tascas to chef’s counters, we reserve the seats and tell you what to order – or join you at the table.",
    price: "From €25",
    image: "/images/tables.jpg",
    alt: "Figs and chocolate salami on a blue Portuguese plate with a coffee",
    position: "50% 62%",
  },
];

const steps = [
  {
    title: "Tell us what you love",
    body: "Your dates, your pace, and what you want to feel in Lisbon.",
  },
  {
    title: "Get your plan",
    body: "We send a short, personal itinerary built around surf, yoga and food.",
  },
  {
    title: "Just show up",
    body: "Local hosts, bookings and transfers are handled. You simply enjoy.",
  },
];

const fieldClass =
  "min-h-12 rounded border border-field bg-white px-3.5 text-base font-normal text-foreground";

const pillPrimary =
  "inline-flex items-center rounded-full bg-accent px-7 font-medium text-white transition-colors hover:bg-accent-hover hover:text-white active:bg-accent-active";

export default function Home() {
  return (
    <div className="flex-1">
      <header className="border-b border-line">
        <nav className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-8 py-6">
          <a
            href="#top"
            aria-label="Soul & Taste, back to top"
            className="inline-flex flex-col font-display text-[26px] font-semibold leading-[0.92] tracking-[-0.045em] text-foreground hover:text-foreground"
          >
            <span className="flex items-start gap-1">
              soul
              <span className="mt-[3px] size-1.5 rounded-full bg-accent" />
            </span>
            <span>
              <span className="font-light text-accent">&amp;</span>taste
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-8 text-[15px]">
            <a href="#experiences">Experiences</a>
            <a href="#how">How it works</a>
            <a href="#contact" className={`${pillPrimary} min-h-11 px-[22px]`}>
              Plan your trip
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="top"
          className="mx-auto max-w-[1200px] px-8 pb-24 pt-20 md:pt-[120px]"
        >
          <p className="mb-6 text-[13px] uppercase tracking-[0.14em] text-muted">
            Lisbon · Portugal
          </p>
          <h1 className="max-w-[900px] font-display text-[clamp(44px,7vw,96px)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Get to know Lisbon through the moments you’ll never forget.
          </h1>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-[520px] text-[19px] text-muted">
              Morning waves on the Atlantic, yoga as the light hits the Tagus,
              and tables the locals keep to themselves. Small groups, local
              hosts, no tourist traps.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#experiences" className={`${pillPrimary} min-h-[52px]`}>
                Explore experiences
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center rounded-full border border-foreground px-7 font-medium"
              >
                Ask us anything
              </a>
            </div>
          </div>
          <div className="relative mt-20 h-[320px] overflow-hidden rounded bg-[#eef1f4] md:h-[560px]">
            <Image
              src="/images/hero-alfama.jpg"
              alt="Terracotta rooftops of Alfama with the dome of the National Pantheon at golden hour"
              fill
              priority
              quality={60}
              sizes="(max-width: 1200px) 100vw, 1136px"
              className="object-cover"
              style={{ objectPosition: "50% 34%" }}
            />
          </div>
        </section>

        <section
          id="experiences"
          className="mx-auto max-w-[1200px] px-8 py-24"
        >
          <div className="mb-14 flex flex-col gap-4">
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em]">
              Three ways in.
            </h2>
            <p className="max-w-[420px] text-muted">
              Book one, or combine them into a few days that feel like living
              here.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            {experiences.map((e) => (
              <article key={e.label} className="group flex flex-col gap-5">
                <div className="relative mb-3 mr-3">
                  {/* Offset accent block behind the photo */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 rounded-md border border-accent/35 bg-accent/10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
                  />
                  <div className="relative rounded-md bg-white p-2 shadow-[0_1px_2px_rgba(21,23,26,0.06),0_16px_32px_-16px_rgba(21,23,26,0.3)] ring-1 ring-line">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#eef1f4]">
                      <Image
                        src={e.image}
                        alt={e.alt}
                        fill
                        quality={60}
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        style={{ objectPosition: e.position }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {e.label}
                </p>
                <h3 className="font-display text-[26px] font-semibold leading-[1.2] tracking-[-0.015em]">
                  {e.title}
                </h3>
                <p className="text-muted">{e.body}</p>
                <p className="mt-auto border-t border-line pt-4 text-[15px]">
                  {e.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="border-y border-line">
          <div className="mx-auto max-w-[1200px] px-8 py-24">
            <h2 className="mb-14 font-display text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em]">
              How it works
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12">
              {steps.map((s, i) => (
                <div key={s.title} className="flex flex-col gap-3">
                  <span className="font-display text-[44px] font-medium leading-none text-accent">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1200px] px-8 py-28">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Let’s plan your Lisbon.
              </h2>
              <p className="max-w-[420px] text-muted">
                Send us a note and we’ll reply within 24 hours with ideas for
                your days.
              </p>
              <p className="mt-2 text-[15px]">
                Prefer to chat?{" "}
                <a
                  href="https://wa.me/351924739922"
                  className="font-medium underline"
                >
                  WhatsApp +351 924 739 922
                </a>
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Travel dates
                <input
                  type="text"
                  name="dates"
                  placeholder="e.g. 12–16 May"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                What are you looking for?
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Surf, yoga, food – or all three"
                  className={`${fieldClass} resize-y py-3`}
                />
              </label>
              {/* TODO: wire up submission (email service or API route) */}
              <button
                type="button"
                className="min-h-[52px] cursor-pointer self-start rounded-full bg-accent px-8 font-medium text-white transition-colors hover:bg-accent-hover active:bg-accent-active"
              >
                Send request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 p-8 text-sm text-muted">
          <span>
            © 2026 Soul &amp; Taste · Lisbon, Portugal · Photos: Veronika
            Martinelli, Ivo Sousa Martins, Alexandra Smielova, Katie Luka on
            Unsplash
          </span>
          <a href="#top" className="text-muted">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
