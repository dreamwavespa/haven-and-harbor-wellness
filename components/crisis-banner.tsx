import { Phone } from "lucide-react";

export function CrisisBanner() {
  return (
    <div className="bg-[hsl(var(--ink))] text-[hsl(var(--cream))] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <Phone className="h-3.5 w-3.5 shrink-0 opacity-80" />
        <span className="opacity-90">
          In crisis right now? Call or text{" "}
          <span className="font-semibold">988</span> — Suicide &amp; Crisis
          Lifeline, free &amp; confidential, 24/7.
        </span>
      </div>
    </div>
  );
}