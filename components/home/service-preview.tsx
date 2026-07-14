import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cats = [
  { name: "Individual Therapy", tint: "bg-[hsl(var(--terracotta)/0.12)]", text: "text-[hsl(var(--terracotta))]" },
  { name: "Group & Peer Support", tint: "bg-[hsl(var(--sage)/0.14)]", text: "text-[hsl(var(--sage))]" },
  { name: "Psychiatry & Medication", tint: "bg-[hsl(var(--gold)/0.18)]", text: "text-[hsl(38_68%_38%)]" },
  { name: "Teen & Family Counseling", tint: "bg-[hsl(var(--terracotta)/0.12)]", text: "text-[hsl(var(--terracotta))]" },
  { name: "Workshops & Classes", tint: "bg-[hsl(var(--sage)/0.14)]", text: "text-[hsl(var(--sage))]" },
  { name: "Crisis & Same-Day Care", tint: "bg-[hsl(var(--gold)/0.18)]", text: "text-[hsl(38_68%_38%)]" },
];

export function ServicePreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3">What we offer</p>
          <h2 className="font-display text-3xl sm:text-4xl max-w-lg text-balance">
            Six ways to find your footing, all under one roof.
          </h2>
        </div>
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[hsl(var(--terracotta))] transition-colors shrink-0">
          View all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cats.map((c) => (
          <div
            key={c.name}
            className={`rounded-3xl p-7 ${c.tint} border border-[hsl(var(--border))] flex items-center justify-between`}
          >
            <span className={`font-display text-lg ${c.text}`}>{c.name}</span>
            <ArrowRight className={`h-4 w-4 ${c.text} opacity-60`} />
          </div>
        ))}
      </div>
    </section>
  );
}