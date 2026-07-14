import { PhoneFrame } from "@/components/app-showcase/phone-frame";
import { DiscoverScreen, BookScreen, GoalsScreen, ResourcesScreen } from "@/components/app-showcase/screens";
import { Apple, Smartphone, Bell, Wifi } from "lucide-react";

const features = [
  { icon: Bell, title: "Gentle nudges", desc: "Appointment reminders and goal check-ins that feel supportive, never nagging." },
  { icon: Wifi, title: "Works offline", desc: "Save meditations and worksheets to use anywhere, signal or not." },
  { icon: Smartphone, title: "One tap to reschedule", desc: "Move a session without a single phone call to the front desk." },
];

export default function AppShowcasePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3">
          The companion app
        </p>
        <h1 className="font-display text-3xl sm:text-5xl text-balance mb-4">
          Everything on this site, now in your pocket.
        </h1>
        <p className="text-[hsl(var(--foreground))]/60 leading-relaxed mb-8">
          The Haven &amp; Harbor app mirrors the website's four pillars —
          discover, book, track, and support yourself — reshaped for quick,
          one-handed moments between sessions.
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--ink))] text-[hsl(var(--cream))] px-5 py-3 text-sm font-semibold">
            <Apple className="h-4 w-4" /> App Store
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--ink)/0.15)] px-5 py-3 text-sm font-semibold">
            <Smartphone className="h-4 w-4" /> Google Play
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 justify-items-center mb-20 overflow-x-auto">
        <PhoneFrame label="Discover"><DiscoverScreen /></PhoneFrame>
        <PhoneFrame label="Book"><BookScreen /></PhoneFrame>
        <PhoneFrame label="Track Goals"><GoalsScreen /></PhoneFrame>
        <PhoneFrame label="Resources"><ResourcesScreen /></PhoneFrame>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 text-center">
            <div className="h-11 w-11 rounded-2xl bg-[hsl(var(--sage-light))] grid place-items-center mx-auto mb-4">
              <f.icon className="h-5 w-5 text-[hsl(var(--sage))]" />
            </div>
            <h3 className="font-display text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-[hsl(var(--foreground))]/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}