"use client";

import { useMemo, useState } from "react";
import { Search, Wind, FileText, Dumbbell, Headphones, Clock } from "lucide-react";
import { resources } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Resource } from "@/types";

const typeIcon: Record<Resource["type"], typeof Wind> = {
  Meditation: Wind,
  Article: FileText,
  Exercise: Dumbbell,
  Audio: Headphones,
};

const types: Array<Resource["type"] | "All"> = ["All", "Meditation", "Article", "Exercise", "Audio"];

export function ResourcesLibrary() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<(typeof types)[number]>("All");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesType = type === "All" || r.type === type;
      const matchesQuery =
        query.trim().length === 0 ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.category.toLowerCase().includes(query.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [query, type]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--foreground))]/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources — e.g. sleep, grief, self-compassion..."
            className="w-full rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--terracotta))] transition-shadow"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              type === t
                ? "bg-[hsl(var(--terracotta))] text-[hsl(var(--primary-foreground))] border-[hsl(var(--terracotta))]"
                : "border-[hsl(var(--border))] hover:bg-[hsl(var(--sage-light))]"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-3xl border border-dashed border-[hsl(var(--border))]">
          <p className="font-display text-xl mb-2">Nothing matched that search</p>
          <p className="text-sm text-[hsl(var(--foreground))]/55">Try a broader term, or clear the filter above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => {
            const Icon = typeIcon[r.type];
            return (
              <div
                key={r.id}
                className="group rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_hsl(var(--ink)/0.3)] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[hsl(var(--sage-light))] grid place-items-center group-hover:bg-[hsl(var(--terracotta))] transition-colors">
                    <Icon className="h-4.5 w-4.5 text-[hsl(var(--sage))] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--foreground))]/40">{r.category}</span>
                </div>
                <h3 className="font-display text-lg mb-2 leading-snug">{r.title}</h3>
                <p className="text-sm text-[hsl(var(--foreground))]/60 leading-relaxed mb-5">{r.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-[hsl(var(--foreground))]/45">
                    <Clock className="h-3.5 w-3.5" /> {r.duration}
                  </span>
                  <span className="text-xs font-semibold text-[hsl(var(--terracotta))]">
                    {r.type === "Article" ? "Read" : "Play"} →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}