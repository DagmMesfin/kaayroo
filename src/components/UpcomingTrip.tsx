import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Globe, ArrowLeft, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: 'Phase 1',
    title: 'Global Sourcing & Bidding',
    desc: 'Identifying premium suppliers & securing tenders.',
    icon: <Globe size={24} className="text-white" />
  },
  {
    step: 'Phase 2',
    title: 'Import & Logistics',
    desc: 'Seamless shipping and customs clearance.',
    icon: <Truck size={24} className="text-white" />
  },
  {
    step: 'Phase 3',
    title: 'Quality Delivery',
    desc: 'Final inspection and client handover.',
    icon: <ShieldCheck size={24} className="text-white" />
  }
];

export default function UpcomingTrip() {
  return (
    <section id="process" className="relative py-16 lg:py-24 min-h-[600px] flex items-center bg-brand-light">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-brand-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-brand-dark/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark"
            >
              Our Trading <br />
              <span className="italic text-brand-accent">Process</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted mb-10 max-w-lg leading-relaxed font-sans"
            >
              At Kaayroo General Trading PLC, we ensure a streamlined operation from the initial bidding process to the final delivery. Our robust network guarantees efficiency, transparency, and top-tier quality for all our governmental and private clients.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between max-w-xs"
            >
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors text-brand-dark">
                  <ArrowLeft size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent transition-colors text-white">
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Timeline Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <div className="bg-white border border-gray-100 rounded-2xl p-10 relative overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.05)]">
              {/* Vertical line for timeline */}
              <div className="absolute left-[59px] top-12 bottom-12 w-[2px] bg-gray-100"></div>
              
              <div className="flex flex-col gap-10 relative z-10">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center shrink-0 shadow-[0_0_0_6px_rgba(255,255,255,1)] relative z-10">
                      {item.icon}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">{item.step}</div>
                      <h4 className="text-xl font-bold mb-2 tracking-wide text-brand-dark">{item.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
