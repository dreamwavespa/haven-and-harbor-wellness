import { Search, CalendarCheck, Target, BookOpen, Bell, Home, Flame, Wind, Check } from "lucide-react";

export function DiscoverScreen() {
  return (
    <div className="h-full flex flex-col px-4 pt-9 pb-4 text-[hsl(var(--foreground))]">
      <div className="flex items-center justify-between mb-4">
        <p className="font-display text-lg">Hi, Jordan</p>
        <Bell className="h-4 w-4 opacity-60" />
      </div>
      <div className="flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-3 py-2 mb-4">
        <Search className="h-3.5 w-3.5 opacity-40" />
        <span className="text-[11px] opacity-40">Search services...</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {["Individual", "Group", "Psychiatry", "Workshops"].map((c) => (
          <div key={c} className="rounded-2xl bg-[hsl(var(--sage-light))] px-3 py-3">
            <p className="text-[11px] font-semibold text-[hsl(var(--sage))]">{c}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-3 mb-2">
        <p className="text-[11px] font-semibold mb-0.5">Same-Day Crisis Consult</p>
        <p className="text-[10px] opacity-50">Free · 30 min · Available today</p>
      </div>
      <div className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-3">
        <p className="text-[11px] font-semibold mb-0.5">Mindfulness Workshop</p>
        <p className="text-[10px] opacity-50">$25 · This Saturday</p>
      </div>
      <div className="mt-auto grid grid-cols-4 gap-1 pt-3 border-t border-[hsl(var(--border))]">
        {[Home, CalendarCheck, Target, BookOpen].map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <Icon className={`h-4 w-4 ${i === 0 ? "text-[hsl(var(--terracotta))]" : "opacity-35"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function BookScreen() {
  return (
    <div className="h-full flex flex-col px-4 pt-9 pb-4 text-[hsl(var(--foreground))]">
      <p className="font-display text-lg mb-4">Book a session</p>
      <div className="flex gap-2 mb-4">
        <span className="text-[10px] rounded-full bg-[hsl(var(--terracotta))] text-white px-3 py-1.5">Virtual</span>
        <span className="text-[10px] rounded-full border border-[hsl(var(--border))] px-3 py-1.5">In-person</span>
      </div>
      <p className="text-[10px] uppercase tracking-wide opacity-40 mb-2">Thursday, Jul 17</p>
      <div className="grid grid-cols-3 gap-1.5 mb-4">
        {["9:00", "10:30", "1:00", "2:30", "4:00", "5:45"].map((t, i) => (
          <div key={t} className={`rounded-xl text-center py-2 text-[10px] ${i === 2 ? "bg-[hsl(var(--sage))] text-white" : "border border-[hsl(var(--border))]"}`}>{t}</div>
        ))}
      </div>
      <div className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-3 mb-4">
        <p className="text-[11px] font-semibold">Dr. Naomi Okafor</p>
        <p className="text-[10px] opacity-50">Licensed Clinical Psychologist</p>
      </div>
      <button className="mt-auto rounded-full bg-[hsl(var(--terracotta))] text-white text-[11px] font-semibold py-2.5">
        Confirm booking
      </button>
    </div>
  );
}

export function GoalsScreen() {
  return (
    <div className="h-full flex flex-col px-4 pt-9 pb-4 text-[hsl(var(--foreground))]">
      <p className="font-display text-lg mb-4">Your goals</p>
      <div className="rounded-2xl bg-[hsl(var(--sage-light))] p-3 mb-3">
        <div className="flex justify-between text-[11px] mb-1"><span>Mindful breathing</span><span className="font-semibold">80%</span></div>
        <div className="h-1.5 rounded-full bg-white/60 overflow-hidden"><div className="h-full bg-[hsl(var(--sage))]" style={{ width: "80%" }} /></div>
      </div>
      <div className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-3 mb-3">
        <div className="flex justify-between text-[11px] mb-1"><span>Sleep consistency</span><span className="font-semibold">62%</span></div>
        <div className="h-1.5 rounded-full bg-[hsl(var(--muted))] overflow-hidden"><div className="h-full bg-[hsl(var(--terracotta))]" style={{ width: "62%" }} /></div>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[hsl(38_68%_45%)] bg-[hsl(var(--gold)/0.18)] rounded-full px-2.5 py-1 w-fit mb-4">
        <Flame className="h-3 w-3" /> 12 week streak
      </div>
      <p className="text-[10px] uppercase tracking-wide opacity-40 mb-2">Today's check-in</p>
      <div className="flex justify-between px-1">
        {["😔","😕","😐","🙂","😄"].map((e, i) => (
          <span key={i} className={`text-lg ${i === 3 ? "scale-125" : "opacity-50"}`}>{e}</span>
        ))}
      </div>
    </div>
  );
}

export function ResourcesScreen() {
  return (
    <div className="h-full flex flex-col px-4 pt-9 pb-4 text-[hsl(var(--foreground))]">
      <p className="font-display text-lg mb-4">Resources</p>
      <div className="rounded-2xl bg-[hsl(var(--terracotta))] text-white p-3 mb-3 flex items-center gap-2">
        <Wind className="h-4 w-4" />
        <div>
          <p className="text-[11px] font-semibold">5-Minute Box Breathing</p>
          <p className="text-[9px] opacity-80">Playing now · 2:14 left</p>
        </div>
      </div>
      {["Grounding 5-4-3-2-1", "Body Scan for Sleep", "Loving-Kindness Meditation"].map((r) => (
        <div key={r} className="rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-3 mb-2 flex items-center justify-between">
          <p className="text-[11px] font-medium">{r}</p>
          <Check className="h-3.5 w-3.5 opacity-30" />
        </div>
      ))}
    </div>
  );
}