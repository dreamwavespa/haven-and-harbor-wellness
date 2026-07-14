const quotes = [
  {
    quote:
      "The app reminders between sessions kept me accountable in a way nothing else has. I actually finished my worksheets this time.",
    name: "Priya S.",
    role: "Client since 2023",
  },
  {
    quote:
      "Booking used to be the hardest part of getting help. Here it took me ninety seconds, and I saw someone that same week.",
    name: "Marcus T.",
    role: "Client since 2024",
  },
  {
    quote:
      "Watching my mood chart trend upward over six weeks was the first proof I had that things were actually getting better.",
    name: "Elena R.",
    role: "Client since 2022",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[hsl(var(--sage-light))]/60 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3 text-center">
          From our community
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-14 text-balance">
          Real progress, in their own words.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-3xl bg-[hsl(var(--card))] p-8 border border-[hsl(var(--border))] flex flex-col"
            >
              <blockquote className="font-display italic text-lg leading-relaxed text-balance flex-1">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{q.name}</span>
                <span className="text-[hsl(var(--foreground))]/50"> — {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}