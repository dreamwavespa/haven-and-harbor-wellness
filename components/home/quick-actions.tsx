import Link from "next/link";
import { Search, CalendarCheck, Target, BookOpen } from "lucide-react";

const actions = [
  {
    href: "/services",
    icon: Search,
    title: "Discover Services",
    desc: "Browse therapy, psychiatry, groups & workshops matched to your needs.",
  },
  {
    href: "/book",
    icon: CalendarCheck,
    title: "Book an Appointment",
    desc: "Pick a provider, a time that works, and confirm in under two minutes.",
  },
  {
    href: "/goals",
    icon: Target,
    title: "Track Wellness Goals",
    desc: "Log mood, streaks, and milestones — see your progress add up.",
  },
  {
    href: "/resources",
    icon: BookOpen,
    title: "Self-Guided Resources",
    desc: "Meditations, worksheets & exercises to lean on between visits.",
  },
];

export function QuickActions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((a, i) => (
          <Link
            key={a.href}
            href={a.href}
            className="group relative rounded-3xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-6 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_hsl(var(--ink)/0.3)] transition-all duration-300"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="h-11 w-11 rounded-2xl bg-[hsl(var(--sage-light))] grid place-items-center mb-5 group-hover:bg-[hsl(var(--terracotta))] transition-colors duration-300">
              <a.icon className="h-5 w-5 text-[hsl(var(--sage))] group-hover:text-[hsl(var(--primary-foreground))] transition-colors duration-300" />
            </div>
            <h3 className="font-display text-lg mb-2">{a.title}</h3>
            <p className="text-sm text-[hsl(var(--foreground))]/60 leading-relaxed">{a.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}