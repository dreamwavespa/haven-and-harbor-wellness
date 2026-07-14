import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute -top-24 -right-32 h-96 w-96 bg-[hsl(var(--sage)/0.18)] blob animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute top-40 -left-24 h-72 w-72 bg-[hsl(var(--gold)/0.2)] blob animate-float"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--sage-light))] px-4 py-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--sage))] mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Community-rooted care, since 2011
          </span>
          <h1 className="font-display text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Support that meets you
            <br />
            <span className="italic text-[hsl(var(--terracotta))]">between</span> the sessions,
            <br />
            too.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[hsl(var(--foreground))]/70 max-w-xl leading-relaxed">
            Haven &amp; Harbor is your community's home for therapy, psychiatry,
            and peer support — plus the tools to track your progress and
            steady yourself on your own time, right from your phone.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--terracotta))] text-[hsl(var(--primary-foreground))] px-6 py-3.5 text-sm font-semibold hover:bg-[hsl(var(--terracotta-deep))] transition-colors shadow-[0_10px_30px_-10px_hsl(var(--terracotta)/0.6)]"
            >
              Find the right service
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--ink)/0.15)] px-6 py-3.5 text-sm font-semibold hover:bg-[hsl(var(--sage-light))] transition-colors"
            >
              Book an appointment
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            <div>
              <p className="font-display text-3xl">14k+</p>
              <p className="text-xs text-[hsl(var(--foreground))]/55 mt-1">Sessions held yearly</p>
            </div>
            <div>
              <p className="font-display text-3xl">42</p>
              <p className="text-xs text-[hsl(var(--foreground))]/55 mt-1">Licensed clinicians</p>
            </div>
            <div>
              <p className="font-display text-3xl">4.9</p>
              <p className="text-xs text-[hsl(var(--foreground))]/55 mt-1">Average client rating</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2.5rem] bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-[0_30px_60px_-30px_hsl(var(--ink)/0.25)] p-6 grain">
            <div className="flex items-center justify-between mb-5">
              <p className="font-display text-lg">This week's check-in</p>
              <span className="text-xs bg-[hsl(var(--sage-light))] text-[hsl(var(--sage))] rounded-full px-3 py-1 font-medium">On track</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Mindful breathing", value: 80 },
                { label: "Sleep consistency", value: 62 },
                { label: "Social connection", value: 45 },
              ].map((goal) => (
                <div key={goal.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[hsl(var(--foreground))]/75">{goal.label}</span>
                    <span className="font-semibold">{goal.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[hsl(var(--terracotta))]"
                      style={{ width: `${goal.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[hsl(var(--sage-light))] p-4 text-sm text-[hsl(var(--foreground))]/75 italic font-display">
              "Two minutes of box breathing before your 3pm meeting today —
              you've got this."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}