import { BookingWizard } from "@/components/booking/booking-wizard";

export default function BookPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-[hsl(var(--sage))] font-semibold mb-3">
          Book an appointment
        </p>
        <h1 className="font-display text-3xl sm:text-5xl text-balance mb-4">
          A few taps, and you're on the calendar.
        </h1>
        <p className="text-[hsl(var(--foreground))]/60 max-w-xl mx-auto leading-relaxed">
          Choose your service, your provider, and a time that works — we'll
          take care of the confirmation and reminders.
        </p>
      </div>
      <BookingWizard />
    </div>
  );
}