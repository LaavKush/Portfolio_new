import ClientLayout from "./client-layout";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import HeroSection from "@/app/components/HeroSection";

export default function HomePage() {
  return (
    <ClientLayout>
      <div className="relative bg-black min-h-screen overflow-hidden">
        <ParticlesBackground />
        <HeroSection />
      </div>
    </ClientLayout>
  );
}
