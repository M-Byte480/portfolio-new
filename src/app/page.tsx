'use client'
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {
    return (
        <>
            <Navbar/>
            <IntroSection/>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer/>
        </>
    );
}
