 import { motion, useInView } from "framer-motion";
 import { useRef, useState } from "react";
 import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
 import { useToast } from "@/hooks/use-toast";
 
 export const ContactSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const { toast } = useToast();
 
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1000));
 
     toast({
       title: "Message Sent!",
       description: "Thank you for your enquiry. We'll get back to you soon.",
     });
 
     setFormData({ name: "", email: "", phone: "", message: "" });
     setIsSubmitting(false);
   };
 
   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     setFormData((prev) => ({
       ...prev,
       [e.target.name]: e.target.value,
     }));
   };
 
   return (
     <section id="contact" className="section-padding">
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
               Get In Touch
             </p>
             <h2 className="heading-lg text-foreground mb-6">Contact Us</h2>
             <div className="divider-ornate mb-8" />
             <p className="body-lg max-w-2xl mx-auto">
               Have questions about our products? We'd love to hear from you. 
               Reach out and we'll respond as soon as possible.
             </p>
           </motion.div>
 
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
             {/* Contact Info */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="space-y-8"
             >
               <div>
                 <h3 className="font-heading text-2xl font-medium text-foreground mb-6">
                   Let's Connect
                 </h3>
                 <p className="text-muted-foreground leading-relaxed mb-8">
                   Whether you're looking to place a bulk order or have questions 
                   about our products, our team is here to assist you.
                 </p>
               </div>
 
               <div className="space-y-6">
                 <a
                   href="tel:+919876543210"
                   className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                 >
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <Phone className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">Call Us</p>
                     <p className="font-medium text-foreground">+91 98765 43210</p>
                   </div>
                 </a>
 
                 <a
                   href="https://wa.me/919876543210"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                 >
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <MessageCircle className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">WhatsApp</p>
                     <p className="font-medium text-foreground">+91 98765 43210</p>
                   </div>
                 </a>
 
                 <a
                   href="mailto:info@radharaman.com"
                   className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                 >
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <Mail className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">Email</p>
                     <p className="font-medium text-foreground">info@radharaman.com</p>
                   </div>
                 </a>
 
                 <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <MapPin className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-sm text-muted-foreground">Address</p>
                     <p className="font-medium text-foreground">
                       123 Vedic Lane, Spiritual Market
                       <br />
                       Varanasi, Uttar Pradesh 221001
                     </p>
                   </div>
                 </div>
               </div>
             </motion.div>
 
             {/* Contact Form */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
               <form
                 onSubmit={handleSubmit}
                 className="p-8 bg-card rounded-xl border border-border/50"
               >
                 <h3 className="font-heading text-2xl font-medium text-foreground mb-6">
                   Send an Enquiry
                 </h3>
 
                 <div className="space-y-5">
                   <div>
                     <label
                       htmlFor="name"
                       className="block text-sm font-medium text-foreground mb-2"
                     >
                       Your Name
                     </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                       placeholder="Enter your name"
                     />
                   </div>
 
                   <div>
                     <label
                       htmlFor="email"
                       className="block text-sm font-medium text-foreground mb-2"
                     >
                       Email Address
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                       className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                       placeholder="Enter your email"
                     />
                   </div>
 
                   <div>
                     <label
                       htmlFor="phone"
                       className="block text-sm font-medium text-foreground mb-2"
                     >
                       Phone Number
                     </label>
                     <input
                       type="tel"
                       id="phone"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                       placeholder="Enter your phone number"
                     />
                   </div>
 
                   <div>
                     <label
                       htmlFor="message"
                       className="block text-sm font-medium text-foreground mb-2"
                     >
                       Your Message
                     </label>
                     <textarea
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                       rows={4}
                       className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                       placeholder="Tell us about your requirements..."
                     />
                   </div>
 
                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? "Sending..." : "Send Message"}
                   </button>
                 </div>
               </form>
             </motion.div>
           </div>
         </div>
       </div>
     </section>
   );
 };