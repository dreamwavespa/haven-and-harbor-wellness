"use client";

import { useState } from "react";
import { Flame, Plus, Target } from "lucide-react";
import { goals as initialGoals } from "@/lib/data";
import { MoodLog } from "@/components/goals/mood-log";

export function GoalsDashboard() {
  const [goals, setGoals] = useState(initialGoals);

  const bump = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, progress: Math.min(100, g.progress + 8), streak: g.streak + 1 } : g))
    );
  };

  const overall = Math.round(goals.reduce((a, g) => a + g.progress, 0) / goals.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-display text-xl">Overall wellness progress</h3>
            <span className="font-display text-2xl text-[hsl(var(--terracotta))]">{overall}%</span>
          </div>
          <p className="text-sm text-[hsl(var(--foreground))]/55 mb-4">Across all active goals this month</p>
          <div className="h-3 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--sage))] to-[hsl(var(--terracotta))]" style={{ width: `${overall}%` }} />
          </div>
        </div>

        <div className="space-y-4">
          {goals.map((g) => (
            <div key={g.id} className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--sage))]">{g.category}</span>
                  <h4 className="font-display text-lg mt-0.5">{g.title}</h4>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(38_68%_45%)] bg-[hsl(var(--gold)/0.15)] rounded-full px-3 py-1">
                  <Flame className="h-3.5 w-3.5" /> {g.streak} wk streak
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2.5 rounded-full bg-[hsl(var(--muted))] overflow-hidden">
                  <div className="h-full rounded-full bg-[hsl(var(--terracotta))] transition-all duration-500" style={{ width: `${g.progress}%` }} />
                </div>
                <span className="text-sm font-semibold w-10 text-right">{g.progress}%</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-[hsl(var(--foreground))]/50">Target: {g.target}</p>
                <button
                  onClick={() => bump(g.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--terracotta))] hover:underline"
                >
                  <Plus className="h-3.5 w-3.5" /> Log today
                </button>
              </div>
            </div>
          ))}

          <button className="w-full rounded-3xl border border-dashed border-[hsl(var(--border))] p-6 flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--foreground))]/55 hover:bg-[hsl(var(--sage-light))]/40 transition-colors">
            <Target className="h-4 w-4" /> Add a new wellness goal
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <MoodLog />
        <div className="rounded-3xl bg-[hsl(var(--sage-light))] p-7">
          <h4 className="font-display text-lg mb-2">Care team note</h4>
          <p className="text-sm text-[hsl(var(--foreground))]/70 leading-relaxed italic font-display">
            "Your sleep consistency dipped this week — let's talk about it Thursday. In the meantime, try the body scan in your Resources tab tonight."
          </p>
          <p className="text-xs text-[hsl(var(--foreground))]/50 mt-3">— Dr. Naomi Okafor</p>
        </div>
      </div>
    </div>
  );
}