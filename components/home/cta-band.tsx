import Link from "next/link";
import { Smartphone, ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[hsl(var(--ink))] text-[hsl(var(--cream))] px-8 sm:px-14 py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          className="absolute -bottom-20 -right-10 h-64 w-64 bg-[hsl(var(--terracotta)/0.35)] blob animate-float"
          aria-hidden
        />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold mb-5">
            <Smartphone className="h-3.5 w-3.5" /> Haven &amp; Harbor Companion App
          </span>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-balance mb-5">
            Your care team fits in your pocket now.
          </h2>
          <p className="text-[hsl(var(--cream))]/65 leading-relaxed max-w-md mb-8">
            Reschedule in a tap, log how you're feeling in ten seconds, and
            open a grounding exercise the moment you need one — no waiting
            for your next appointment.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--cream))] text-[hsl(var(--ink))] px-6 py-3.5 text-sm font-semibold hover:bg-white transition-colors"
          >
            See the app <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative hidden lg:block h-64" />
      </div>
    </section>
  );
}