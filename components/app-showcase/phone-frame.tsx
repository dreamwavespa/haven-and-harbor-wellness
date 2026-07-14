import { ReactNode } from "react";

export function PhoneFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-[260px] h-[540px] rounded-[2.75rem] bg-[hsl(var(--ink))] p-3 shadow-[0_40px_70px_-30px_hsl(var(--ink)/0.5)]">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-[hsl(var(--ink))] rounded-full z-20" />
        <div className="relative h-full w-full rounded-[2.1rem] overflow-hidden bg-[hsl(var(--cream))]">
          {children}
        </div>
      </div>
      <p className="text-sm font-medium text-[hsl(var(--foreground))]/70">{label}</p>
    </div>
  );
}