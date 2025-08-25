export const metadata = {
  title: "Kadim Dostum - Yapay Zeka Destekli Terapi",
  description: "Kadim Dostum ile ruh sağlığınızı keşfedin. AI destekli kişiselleştirilmiş terapi seansları ve 7/24 destek.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Cta />
    </>
  );
}
