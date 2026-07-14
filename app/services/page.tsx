import { ServicesExplorer } from "@/components/services/services-explorer";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3">
        Discover services
      </p>
      <h1 className="font-display text-3xl sm:text-5xl max-w-2xl text-balance mb-4">
        Find the kind of support that fits where you are today.
      </h1>
      <p className="text-[hsl(var(--foreground))]/60 max-w-xl mb-12 leading-relaxed">
        Search or filter by category — every service below can be booked
        directly, in-person or virtually, on a sliding scale where noted.
      </p>
      <ServicesExplorer />
    </div>
  );
}