 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Leaf, Shield, Award, Heart } from "lucide-react";
 
 const features = [
   {
     icon: Shield,
     title: "Premium Quality",
     description: "Rigorous quality checks ensure every product meets the highest standards of excellence.",
   },
   {
     icon: Leaf,
     title: "100% Natural",
     description: "Made from pure, natural materials with no synthetic additives or harmful chemicals.",
   },
   {
     icon: Award,
     title: "Trusted Manufacturing",
     description: "Decades of experience in crafting authentic vedic products with precision and care.",
   },
   {
     icon: Heart,
     title: "Made with Devotion",
     description: "Every product is created with reverence and respect for sacred traditions.",
   },
 ];
 
 export const WhyChooseSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="why-us" className="section-padding bg-secondary/30">
       <div className="section-container">
         <div ref={ref} className="max-w-6xl mx-auto">
           {/* Section Header */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
             <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
               Why Choose Us
             </p>
             <h2 className="heading-lg text-foreground mb-6">Our Commitment to Purity</h2>
             <div className="divider-ornate mb-8" />
             <p className="body-lg max-w-2xl mx-auto">
               We uphold the sacred trust of our customers through unwavering 
               dedication to quality, authenticity, and tradition.
             </p>
           </motion.div>
 
           {/* Features Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {features.map((feature, index) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, y: 30 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                 className="flex gap-5 p-6 bg-card rounded-lg border border-border/50 hover:border-primary/20 transition-colors"
               >
                 <div className="flex-shrink-0">
                   <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                     <feature.icon className="w-6 h-6 text-primary" />
                   </div>
                 </div>
                 <div>
                   <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                     {feature.title}
                   </h3>
                   <p className="text-muted-foreground leading-relaxed">
                     {feature.description}
                   </p>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };