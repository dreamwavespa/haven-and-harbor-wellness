"use client";

import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, CalendarCheck, Video, Building2 } from "lucide-react";
import { services, providers } from "@/lib/data";
import { cn } from "@/lib/utils";

const steps = ["Service", "Provider", "Time", "Details", "Confirm"];

const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:45 PM"];
const days = ["Mon 14", "Tue 15", "Wed 16", "Thu 17", "Fri 18"];

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [providerId, setProviderId] = useState<string | null>(null);
  const [mode, setMode] = useState<"In-person" | "Virtual">("Virtual");
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  const service = services.find((s) => s.id === serviceId);
  const provider = providers.find((p) => p.id === providerId);

  const canContinue = useMemo(() => {
    if (step === 0) return !!serviceId;
    if (step === 1) return !!providerId;
    if (step === 2) return !!day && !!time;
    if (step === 3) return name.trim().length > 1 && email.includes("@");
    return true;
  }, [step, serviceId, providerId, day, time, name, email]);

  if (done) {
    return (
      <div className="max-w-xl mx-auto text-center py-10">
        <div className="h-16 w-16 rounded-full bg-[hsl(var(--sage-light))] grid place-items-center mx-auto mb-6">
          <Check className="h-7 w-7 text-[hsl(var(--sage))]" />
        </div>
        <h2 className="font-display text-3xl mb-3">You're booked, {name.split(" ")[0] || "friend"}.</h2>
        <p className="text-[hsl(var(--foreground))]/65 leading-relaxed mb-8">
          {service?.name} with {provider?.name} on {day} at {time} ({mode}).
          A confirmation is on its way to {email}. Add it to your Haven &amp; Harbor app for reminders and a pre-session check-in.
        </p>
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 text-left text-sm space-y-2">
          <p className="flex justify-between"><span className="text-[hsl(var(--foreground))]/55">Service</span><span className="font-medium">{service?.name}</span></p>
          <p className="flex justify-between"><span className="text-[hsl(var(--foreground))]/55">Provider</span><span className="font-medium">{provider?.name}</span></p>
          <p className="flex justify-between"><span className="text-[hsl(var(--foreground))]/55">When</span><span className="font-medium">{day}, {time}</span></p>
          <p className="flex justify-between"><span className="text-[hsl(var(--foreground))]/55">Format</span><span className="font-medium">{mode}</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "h-9 w-9 rounded-full grid place-items-center text-xs font-semibold border-2 transition-colors",
                  i < step
                    ? "bg-[hsl(var(--sage))] border-[hsl(var(--sage))] text-white"
                    : i === step
                    ? "border-[hsl(var(--terracotta))] text-[hsl(var(--terracotta))]"
                    : "border-[hsl(var(--border))] text-[hsl(var(--foreground))]/35"
                )}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className={cn("text-[11px] hidden sm:block", i === step ? "font-semibold" : "text-[hsl(var(--foreground))]/45")}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn("h-0.5 flex-1 mx-2 rounded-full", i < step ? "bg-[hsl(var(--sage))]" : "bg-[hsl(var(--border))]")} />
            )}
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 sm:p-10 min-h-[380px]">
        {step === 0 && (
          <div>
            <h2 className="font-display text-2xl mb-6">Which service would you like?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setServiceId(s.id)}
                  className={cn(
                    "text-left rounded-2xl border p-4 transition-colors",
                    serviceId === s.id ? "border-[hsl(var(--terracotta))] bg-[hsl(var(--terracotta)/0.06)]" : "border-[hsl(var(--border))] hover:bg-[hsl(var(--sage-light))]/50"
                  )}
                >
                  <p className="font-medium text-sm mb-1">{s.name}</p>
                  <p className="text-xs text-[hsl(var(--foreground))]/50">{s.duration} · {s.price}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="font-display text-2xl mb-6">Choose a provider</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {providers.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setProviderId(p.id)}
                  className={cn(
                    "text-left rounded-2xl border p-4 transition-colors",
                    providerId === p.id ? "border-[hsl(var(--terracotta))] bg-[hsl(var(--terracotta)/0.06)]" : "border-[hsl(var(--border))] hover:bg-[hsl(var(--sage-light))]/50"
                  )}
                >
                  <p className="font-medium text-sm">{p.name}</p>
                  <p className="text-xs text-[hsl(var(--foreground))]/50 mb-2">{p.title}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.specialties.map((sp) => (
                      <span key={sp} className="text-[10px] rounded-full bg-[hsl(var(--muted))] px-2 py-0.5">{sp}</span>
                    ))}
                  </div>
                  <p className="text-xs text-[hsl(var(--sage))] font-medium">Next: {p.nextAvailable}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-display text-2xl mb-6">Pick a day and time</h2>
            <div className="flex gap-2 mb-6 flex-wrap">
              <button onClick={() => setMode("Virtual")} className={cn("flex items-center gap-2 px-4 py-2 rounded-full text-sm border", mode === "Virtual" ? "bg-[hsl(var(--terracotta))] text-white border-[hsl(var(--terracotta))]" : "border-[hsl(var(--border))]")}>
                <Video className="h-3.5 w-3.5" /> Virtual
              </button>
              <button onClick={() => setMode("In-person")} className={cn("flex items-center gap-2 px-4 py-2 rounded-full text-sm border", mode === "In-person" ? "bg-[hsl(var(--terracotta))] text-white border-[hsl(var(--terracotta))]" : "border-[hsl(var(--border))]")}>
                <Building2 className="h-3.5 w-3.5" /> In-person
              </button>
            </div>
            <p className="text-xs uppercase tracking-wide text-[hsl(var(--foreground))]/45 mb-2">Day</p>
            <div className="flex gap-2 mb-6 flex-wrap">
              {days.map((d) => (
                <button key={d} onClick={() => setDay(d)} className={cn("px-4 py-2 rounded-full text-sm border", day === d ? "bg-[hsl(var(--sage))] text-white border-[hsl(var(--sage))]" : "border-[hsl(var(--border))]")}>{d}</button>
              ))}
            </div>
            <p className="text-xs uppercase tracking-wide text-[hsl(var(--foreground))]/45 mb-2">Time</p>
            <div className="grid grid-cols-3 gap-2">
              {times.map((t) => (
                <button key={t} onClick={() => setTime(t)} className={cn("px-4 py-2.5 rounded-xl text-sm border", time === t ? "bg-[hsl(var(--sage))] text-white border-[hsl(var(--sage))]" : "border-[hsl(var(--border))]")}>{t}</button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-display text-2xl mb-6">Your details</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-[hsl(var(--foreground))]/45 mb-1.5 block">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Lee" className="w-full rounded-xl border border-[hsl(var(--border))] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--terracotta))] bg-transparent" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-[hsl(var(--foreground))]/45 mb-1.5 block">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jordan@email.com" className="w-full rounded-xl border border-[hsl(var(--border))] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--terracotta))] bg-transparent" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-[hsl(var(--foreground))]/45 mb-1.5 block">Anything we should know? (optional)</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="e.g. this is my first time, or I'd prefer a female provider..." className="w-full rounded-xl border border-[hsl(var(--border))] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--terracotta))] bg-transparent resize-none" />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="font-display text-2xl mb-6">Review &amp; confirm</h2>
            <div className="space-y-3 text-sm mb-6">
              <p className="flex justify-between border-b border-dashed border-[hsl(var(--border))] pb-3"><span className="text-[hsl(var(--foreground))]/55">Service</span><span className="font-medium">{service?.name}</span></p>
              <p className="flex justify-between border-b border-dashed border-[hsl(var(--border))] pb-3"><span className="text-[hsl(var(--foreground))]/55">Provider</span><span className="font-medium">{provider?.name}</span></p>
              <p className="flex justify-between border-b border-dashed border-[hsl(var(--border))] pb-3"><span className="text-[hsl(var(--foreground))]/55">When</span><span className="font-medium">{day}, {time} · {mode}</span></p>
              <p className="flex justify-between"><span className="text-[hsl(var(--foreground))]/55">Contact</span><span className="font-medium">{name} · {email}</span></p>
            </div>
            <button onClick={() => setDone(true)} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--terracotta))] text-white py-3.5 text-sm font-semibold hover:bg-[hsl(var(--terracotta-deep))] transition-colors">
              <CalendarCheck className="h-4 w-4" /> Confirm appointment
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 text-sm font-medium disabled:opacity-30 hover:text-[hsl(var(--terracotta))] transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        {step < 4 && (
          <button
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            disabled={!canContinue}
            className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--ink))] text-[hsl(var(--cream))] px-6 py-2.5 text-sm font-semibold disabled:opacity-30 hover:bg-black transition-colors"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}