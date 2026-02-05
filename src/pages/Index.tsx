 import { Navbar } from "@/components/Navbar";
 import { HeroSection } from "@/components/HeroSection";
 import { AboutSection } from "@/components/AboutSection";
 import { ProductsSection } from "@/components/ProductsSection";
 import { WhyChooseSection } from "@/components/WhyChooseSection";
 import { ContactSection } from "@/components/ContactSection";
 import { Footer } from "@/components/Footer";
 import { useEffect } from "react";
 
 const Index = () => {
   useEffect(() => {
     // Update page title and meta for SEO
     document.title = "Radharaman Vedic Products | Premium Pooja Essentials";
   }, []);
 
   return (
     <div className="min-h-screen bg-background">
       <Navbar />
       <main>
         <HeroSection />
         <AboutSection />
         <ProductsSection />
         <WhyChooseSection />
         <ContactSection />
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Index;
