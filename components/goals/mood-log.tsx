"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const moods = [
  { emoji: "😔", label: "Low" },
  { emoji: "😕", label: "Down" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😄", label: "Great" },
];

const history = [40, 55, 35, 60, 70, 50, 80, 65, 75, 90, 60, 85];

export function MoodLog() {
  const [selected, setSelected] = useState<number | null>(null);
  const [logged, setLogged] = useState(false);

  return (
    <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7">
      <h3 className="font-display text-xl mb-1">How are you feeling today?</h3>
      <p className="text-sm text-[hsl(var(--foreground))]/55 mb-6">Takes ten seconds. Helps your care team spot patterns.</p>

      <div className="flex justify-between mb-6">
        {moods.map((m, i) => (
          <button
            key={m.label}
            onClick={() => {
              setSelected(i);
              setLogged(true);
            }}
            className={cn(
              "flex flex-col items-center gap-1.5 rounded-2xl px-3 py-3 transition-all",
              selected === i ? "bg-[hsl(var(--terracotta)/0.12)] scale-110" : "hover:bg-[hsl(var(--sage-light))]"
            )}
          >
            <span className="text-2xl">{m.emoji}</span>
            <span className="text-[10px] text-[hsl(var(--foreground))]/50">{m.label}</span>
          </button>
        ))}
      </div>

      {logged && (
        <p className="text-xs text-[hsl(var(--sage))] font-medium mb-6 text-center">
          Logged — thanks for checking in with yourself today.
        </p>
      )}

      <div>
        <p className="text-xs uppercase tracking-wide text-[hsl(var(--foreground))]/45 mb-3">Last 12 weeks</p>
        <div className="flex items-end gap-1.5 h-20">
          {history.map((v, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-[hsl(var(--sage)/0.3)]" style={{ height: `${v}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}