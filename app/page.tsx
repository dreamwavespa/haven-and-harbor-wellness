import { Hero } from "@/components/home/hero";
import { QuickActions } from "@/components/home/quick-actions";
import { ServicePreview } from "@/components/home/service-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBand } from "@/components/home/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ServicePreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}