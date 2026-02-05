 import { motion } from "framer-motion";
 import heroBg from "@/assets/hero-bg.jpg";
 
 export const HeroSection = () => {
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center overflow-hidden"
     >
       {/* Background Image */}
       <div className="absolute inset-0">
         <img
           src={heroBg}
           alt="Spiritual background"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 section-container text-center px-4 py-20 md:py-32">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-4xl mx-auto"
         >
           {/* Decorative element */}
           <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="w-12 h-12 mx-auto mb-8 rounded-full border-2 border-primary/30 flex items-center justify-center"
           >
             <span className="text-2xl">🙏</span>
           </motion.div>
 
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.5 }}
             className="text-sm md:text-base uppercase tracking-[0.3em] text-primary font-medium mb-6"
           >
             Pure • Traditional • Sacred
           </motion.p>
 
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="heading-xl text-foreground mb-6"
           >
             Radharaman
             <span className="block text-primary">Vedic Products</span>
           </motion.h1>
 
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="body-lg max-w-2xl mx-auto mb-10"
           >
             Crafting purity for your sacred rituals. Premium quality pooja essentials
             rooted in tradition and authenticity.
           </motion.p>
 
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
           >
             <a
               href="#products"
               className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
             >
               Explore Products
             </a>
             <a
               href="#about"
               className="px-8 py-3.5 bg-transparent border border-foreground/20 text-foreground font-medium rounded-md hover:bg-foreground/5 transition-all duration-300"
             >
               Our Story
             </a>
           </motion.div>
         </motion.div>
 
         {/* Scroll indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.5 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2"
         >
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center pt-2"
           >
             <div className="w-1.5 h-3 bg-primary rounded-full" />
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };