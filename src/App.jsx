import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SocialProofToasts from "./components/SocialProofToasts";
import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import AulaVirtualPage from "./pages/AulaVirtualPage";
import EmpresasPage from "./pages/EmpresasPage";
import ContactoPage from "./pages/ContactoPage";
import InscripcionPage from "./pages/InscripcionPage";

export default function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/aula-virtual" element={<AulaVirtualPage />} />
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/inscripcion" element={<InscripcionPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <SocialProofToasts />
    </BrowserRouter>
  );
}
