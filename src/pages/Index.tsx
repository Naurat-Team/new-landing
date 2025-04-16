import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import DemoVideo from "@/components/DemoVideo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export const Index = () => {
  // Add scroll reveal effect for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (!section.classList.contains("animate-fade-in")) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative  overflow-y-scroll">
        <Hero />
        <HowItWorks />
        <Benefits />
        <DemoVideo />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};
