 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 const values = [
   {
     title: "Purity",
     description: "Every product is crafted with the highest standards of purity, using only natural and authentic materials.",
   },
   {
     title: "Tradition",
     description: "We honor centuries-old vedic practices, preserving the sacred essence of Indian spiritual heritage.",
   },
   {
     title: "Authenticity",
     description: "Sourced directly from trusted artisans and sacred origins, ensuring genuine quality in every offering.",
   },
 ];
 
 export const AboutSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="about" className="section-padding bg-secondary/30">
       <div className="section-container">
         <div ref={ref} className="max-w-5xl mx-auto">
           {/* Section Header */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
             <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
               Our Heritage
             </p>
             <h2 className="heading-lg text-foreground mb-6">About Radharaman</h2>
             <div className="divider-ornate mb-8" />
           </motion.div>
 
           {/* Story */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-center mb-16"
           >
             <p className="body-lg max-w-3xl mx-auto">
               Radharaman Vedic Products is dedicated to serving the spiritual needs of 
               devotees with premium quality pooja essentials. Born from a deep reverence 
               for Indian traditions, we bring you products that enhance your sacred rituals 
               with authenticity and purity. Our mission is to preserve the sanctity of 
               vedic practices while making them accessible to modern households.
             </p>
           </motion.div>
 
           {/* Values */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {values.map((value, index) => (
               <motion.div
                 key={value.title}
                 initial={{ opacity: 0, y: 30 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                 className="text-center p-8 bg-card rounded-lg border border-border/50"
               >
                 <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                   <span className="text-primary font-heading text-xl font-semibold">
                     {value.title.charAt(0)}
                   </span>
                 </div>
                 <h3 className="heading-md text-foreground mb-3">{value.title}</h3>
                 <p className="body-base text-muted-foreground">{value.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };