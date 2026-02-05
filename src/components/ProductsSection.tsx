 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import cottonRolls from "@/assets/product-cotton-rolls.jpg";
 import cottonWicks from "@/assets/product-cotton-wicks.jpg";
 import gangaJal from "@/assets/product-ganga-jal.jpg";
 import dhoopBatti from "@/assets/product-dhoop-batti.jpg";
 
 const products = [
   {
     name: "Cotton Rolls",
     description: "Premium quality cotton rolls for clean and sacred rituals. Soft, pure, and absorbent.",
     image: cottonRolls,
   },
   {
     name: "Cotton Wicks (Batti)",
     description: "Hand-rolled cotton wicks for diyas and lamps. Burns evenly with a steady, sacred flame.",
     image: cottonWicks,
   },
   {
     name: "Ganga Jal",
     description: "Pure and sacred water from the holy river Ganges. Sourced with utmost reverence.",
     image: gangaJal,
   },
   {
     name: "Dhoop Batti",
     description: "Natural incense sticks with divine fragrances. Handcrafted from pure herbs and resins.",
     image: dhoopBatti,
   },
 ];
 
 export const ProductsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="products" className="section-padding">
       <div className="section-container">
         {/* Section Header */}
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
             Our Offerings
           </p>
           <h2 className="heading-lg text-foreground mb-6">Sacred Products</h2>
           <div className="divider-ornate mb-8" />
           <p className="body-lg max-w-2xl mx-auto">
             Discover our carefully curated collection of pooja essentials, 
             crafted with devotion and delivered with care.
           </p>
         </motion.div>
 
         {/* Products Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
           {products.map((product, index) => (
             <motion.div
               key={product.name}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
               className="group"
             >
               <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                 {/* Image */}
                 <div className="aspect-square overflow-hidden">
                   <img
                     src={product.image}
                     alt={product.name}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                 </div>
 
                 {/* Content */}
                 <div className="p-5">
                   <h3 className="font-heading text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                     {product.name}
                   </h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     {product.description}
                   </p>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.8 }}
           className="text-center mt-12"
         >
           <a
             href="#contact"
             className="inline-flex px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-300"
           >
             Enquire About Products
           </a>
         </motion.div>
       </div>
     </section>
   );
 };