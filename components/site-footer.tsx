import Link from "next/link";
import { Leaf, Phone, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(var(--ink))] text-[hsl(var(--cream))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-[hsl(var(--terracotta))]">
              <Leaf className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-lg">Haven &amp; Harbor</span>
          </div>
          <p className="text-sm text-[hsl(var(--cream))]/60 leading-relaxed max-w-xs">
            A community mental wellness center walking alongside you between
            sessions, not just during them.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[hsl(var(--cream))]/50 mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services" className="hover:text-[hsl(var(--gold))]">Discover Services</Link></li>
            <li><Link href="/book" className="hover:text-[hsl(var(--gold))]">Book an Appointment</Link></li>
            <li><Link href="/goals" className="hover:text-[hsl(var(--gold))]">Track Wellness Goals</Link></li>
            <li><Link href="/resources" className="hover:text-[hsl(var(--gold))]">Self-Guided Resources</Link></li>
            <li><Link href="/app" className="hover:text-[hsl(var(--gold))]">Get the App</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[hsl(var(--cream))]/50 mb-4">
            Visit Us
          </h4>
          <ul className="space-y-3 text-sm text-[hsl(var(--cream))]/75">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--gold))]" />219 Willowmere Ave, Suite 3, Riverside</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-[hsl(var(--gold))]" />(555) 014-2277</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-[hsl(var(--gold))]" />hello@havenharbor.org</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-[hsl(var(--cream))]/50 mb-4">
            Hours
          </h4>
          <ul className="space-y-2 text-sm text-[hsl(var(--cream))]/75">
            <li className="flex justify-between gap-4"><span>Mon – Fri</span><span>8am – 8pm</span></li>
            <li className="flex justify-between gap-4"><span>Saturday</span><span>9am – 3pm</span></li>
            <li className="flex justify-between gap-4"><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[hsl(var(--cream))]/40">
        © 2026 Haven &amp; Harbor Wellness Center. Not a substitute for emergency care — call 911 or 988 in a crisis.
      </div>
    </footer>
  );
}