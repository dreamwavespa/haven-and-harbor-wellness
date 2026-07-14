import { GoalsDashboard } from "@/components/goals/goals-dashboard";

export default function GoalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3">
        Track wellness goals
      </p>
      <h1 className="font-display text-3xl sm:text-5xl max-w-2xl text-balance mb-4">
        Small, steady steps — measured over time.
      </h1>
      <p className="text-[hsl(var(--foreground))]/60 max-w-xl mb-12 leading-relaxed">
        Log a quick check-in, watch your streaks build, and let your care
        team see your progress between sessions.
      </p>
      <GoalsDashboard />
    </div>
  );
}