"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/services", label: "Discover Services" },
  { href: "/book", label: "Book an Appointment" },
  { href: "/goals", label: "Track Goals" },
  { href: "/resources", label: "Resources" },
  { href: "/app", label: "Get the App" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--cream))]/90 backdrop-blur-md border-b border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-[hsl(var(--terracotta))] text-[hsl(var(--cream))] rotate-0 group-hover:rotate-12 transition-transform duration-300">
            <Leaf className="h-4.5 w-4.5" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Haven <span className="italic text-[hsl(var(--terracotta))]">&amp;</span> Harbor
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-[hsl(var(--sage-light))]",
                pathname === item.href
                  ? "text-[hsl(var(--terracotta))]"
                  : "text-[hsl(var(--foreground))]/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-[hsl(var(--terracotta))] hover:bg-[hsl(var(--terracotta-deep))] text-[hsl(var(--primary-foreground))] px-5"
          >
            <Link href="/book">Book a Session</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-[hsl(var(--sage-light))]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-[hsl(var(--border))] px-4 py-3 flex flex-col gap-1 bg-[hsl(var(--cream))]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-3 py-2.5 rounded-xl text-sm font-medium",
                pathname === item.href
                  ? "bg-[hsl(var(--sage-light))] text-[hsl(var(--terracotta))]"
                  : "text-[hsl(var(--foreground))]/80"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-2 rounded-full bg-[hsl(var(--terracotta))] text-[hsl(var(--primary-foreground))]"
          >
            <Link href="/book" onClick={() => setOpen(false)}>
              Book a Session
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}