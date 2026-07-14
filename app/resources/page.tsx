import { ResourcesLibrary } from "@/components/resources/resources-library";

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3">
        Self-guided resources
      </p>
      <h1 className="font-display text-3xl sm:text-5xl max-w-2xl text-balance mb-4">
        Something steadying, whenever you need it.
      </h1>
      <p className="text-[hsl(var(--foreground))]/60 max-w-xl mb-12 leading-relaxed">
        Meditations, worksheets, and short reads curated by our clinical
        team — free to explore any time, day or night.
      </p>
      <ResourcesLibrary />
    </div>
  );
}