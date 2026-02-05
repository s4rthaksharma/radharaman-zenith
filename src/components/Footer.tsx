 import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
 
 const socialLinks = [
   { name: "Facebook", icon: Facebook, href: "#" },
   { name: "Instagram", icon: Instagram, href: "#" },
   { name: "Twitter", icon: Twitter, href: "#" },
   { name: "YouTube", icon: Youtube, href: "#" },
 ];
 
 const quickLinks = [
   { name: "Home", href: "#home" },
   { name: "About Us", href: "#about" },
   { name: "Products", href: "#products" },
   { name: "Contact", href: "#contact" },
 ];
 
 export const Footer = () => {
   return (
     <footer className="bg-foreground text-primary-foreground">
       <div className="section-container py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
           {/* Brand */}
           <div className="lg:col-span-2">
             <h3 className="font-heading text-2xl font-semibold mb-4">
               Radharaman Vedic Products
             </h3>
             <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
               Crafting purity for your sacred rituals. Premium quality pooja 
               essentials rooted in tradition, authenticity, and devotion.
             </p>
             <div className="flex gap-4">
               {socialLinks.map((social) => (
                 <a
                   key={social.name}
                   href={social.href}
                   aria-label={social.name}
                   className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
                 >
                   <social.icon className="w-4 h-4 text-primary-foreground group-hover:text-primary-foreground" />
                 </a>
               ))}
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
             <ul className="space-y-3">
               {quickLinks.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-primary-foreground/70 hover:text-primary transition-colors"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Address */}
           <div>
             <h4 className="font-heading text-lg font-medium mb-4">Visit Us</h4>
             <address className="not-italic text-primary-foreground/70 leading-relaxed">
               123 Vedic Lane, Spiritual Market
               <br />
               Varanasi, Uttar Pradesh 221001
               <br />
               <br />
               <span className="text-primary-foreground">+91 98765 43210</span>
               <br />
               <span className="text-primary-foreground">info@radharaman.com</span>
             </address>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-primary-foreground/50">
             © {new Date().getFullYear()} Radharaman Vedic Products. All rights reserved.
           </p>
           <p className="text-sm text-primary-foreground/50">
             Made with 🙏 in India
           </p>
         </div>
       </div>
     </footer>
   );
 };