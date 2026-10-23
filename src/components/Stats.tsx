import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-brand-light border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl overflow-hidden relative max-w-lg mx-auto">
              {/* Gradient border effect wrapper */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent p-[2px] rounded-2xl">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Building" 
                className="w-full h-[500px] object-cover rounded-2xl relative z-10 p-2 opacity-90 grayscale"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark"
            >
              Built On <br />
              <span className="italic text-brand-accent">Proven Expertise</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4 mb-12"
            >
              <div className="w-1 bg-brand-dark rounded-full shrink-0"></div>
              <p className="text-text-muted max-w-md font-sans">
                Experience is the cornerstone of trust. Our track record in supplying vital goods to government and NGO sectors demonstrates our capacity for excellence and scale.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-4xl font-bold font-serif mb-2 text-brand-dark">15+</div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-bold">Years Active</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-serif text-brand-accent mb-2">200+</div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-bold">Tenders Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-serif mb-2 text-brand-dark">50+</div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-bold">Global Partners</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
