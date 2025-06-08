import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AdminSection } from "@/components/admin-section";
import { Footer } from "@/components/footer";
import { DigitalToolsSection } from "@/components/digital-tools";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AdminSection />
      <DigitalToolsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
