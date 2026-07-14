"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock, Wallet, MapPin } from "lucide-react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Service } from "@/types";

const categories: Array<Service["category"] | "All"> = [
  "All",
  "Individual",
  "Group",
  "Psychiatry",
  "Teen & Family",
  "Workshops",
  "Crisis",
];

export function ServicesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--foreground))]/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by need — e.g. anxiety, teens, grief..."
            className="w-full rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--terracotta))] transition-shadow"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              category === c
                ? "bg-[hsl(var(--terracotta))] text-[hsl(var(--primary-foreground))] border-[hsl(var(--terracotta))]"
                : "border-[hsl(var(--border))] hover:bg-[hsl(var(--sage-light))]"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-3xl border border-dashed border-[hsl(var(--border))]">
          <p className="font-display text-xl mb-2">No services matched that search</p>
          <p className="text-sm text-[hsl(var(--foreground))]/55">
            Try a different keyword, or{" "}
            <Link href="/book" className="underline">
              talk to our intake team
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 flex flex-col hover:shadow-[0_20px_40px_-24px_hsl(var(--ink)/0.3)] transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-xl leading-snug">{s.name}</h3>
                <span className="shrink-0 text-[10px] uppercase tracking-wide font-semibold rounded-full bg-[hsl(var(--sage-light))] text-[hsl(var(--sage))] px-3 py-1">
                  {s.category}
                </span>
              </div>
              <p className="text-sm text-[hsl(var(--foreground))]/65 leading-relaxed mb-5 flex-1">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[hsl(var(--foreground))]/55 mb-5">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{s.duration}</span>
                <span className="flex items-center gap-1.5"><Wallet className="h-3.5 w-3.5" />{s.price}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{s.format}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-[hsl(var(--muted))] px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/book?service=${s.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--terracotta))] hover:gap-3 transition-all mt-auto"
              >
                Book this service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}