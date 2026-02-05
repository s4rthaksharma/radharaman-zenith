 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { Menu, X } from "lucide-react";
 
 const navLinks = [
   { name: "Home", href: "#home" },
   { name: "About", href: "#about" },
   { name: "Products", href: "#products" },
   { name: "Why Us", href: "#why-us" },
   { name: "Contact", href: "#contact" },
 ];
 
 export const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <motion.header
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/95 backdrop-blur-md shadow-sm"
           : "bg-transparent"
       }`}
     >
       <nav className="section-container">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <a href="#home" className="flex items-center gap-2">
             <span className="font-heading text-xl md:text-2xl font-semibold text-foreground">
               Radharaman
             </span>
             <span className="hidden sm:inline text-primary font-heading text-lg">
               Vedic Products
             </span>
           </a>
 
           {/* Desktop Navigation */}
           <ul className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <li key={link.name}>
                 <a
                   href={link.href}
                   className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                 >
                   {link.name}
                 </a>
               </li>
             ))}
           </ul>
 
           {/* CTA Button */}
           <a
             href="#contact"
             className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
           >
             Enquire Now
           </a>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 text-foreground"
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
 
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="md:hidden bg-background border-t border-border"
           >
             <ul className="py-4 space-y-2">
               {navLinks.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
               <li className="px-4 pt-2">
                 <a
                   href="#contact"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="block w-full text-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md"
                 >
                   Enquire Now
                 </a>
               </li>
             </ul>
           </motion.div>
         )}
       </nav>
     </motion.header>
   );
 };