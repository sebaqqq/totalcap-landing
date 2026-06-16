import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import CourseCatalog from "../components/CourseCatalog";
import CareerPathMap from "../components/CareerPathMap";
import AulaVirtual from "../components/AulaVirtual";
import TrustSection from "../components/TrustSection";
import DiplomaVerificationDemo from "../components/DiplomaVerificationDemo";
import Testimonials from "../components/Testimonials";
import B2BSection from "../components/B2BSection";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import ContactForm from "../components/ContactForm";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <CourseCatalog />
      <CareerPathMap />
      <AulaVirtual />
      <TrustSection />
      <DiplomaVerificationDemo />
      <Testimonials />
      <B2BSection />
      <FAQSection />
      <FinalCTA />
      <ContactForm />
    </main>
  );
}
