import { motion } from 'framer-motion';
import { Building2, HardHat, Monitor, Sofa } from 'lucide-react';

const features = [
  {
    icon: <Building2 size={20} />,
    title: 'Government & NGO Supply',
    description: 'Bidding and fulfilling large-scale procurement requirements with unmatched reliability.'
  },
  {
    icon: <HardHat size={20} />,
    title: 'Construction & Finishing',
    description: 'High-quality building materials, including premium glass and architectural finishing materials.'
  },
  {
    icon: <Monitor size={20} />,
    title: 'Technology & Automotive',
    description: 'Importing top-tier computer equipment and reliable car spare parts for enterprises.'
  },
  {
    icon: <Sofa size={20} />,
    title: 'Furniture & Textiles',
    description: 'Sourcing and supplying premium home and office furniture alongside high-quality fabrics.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark">
                What We <span className="italic text-brand-accent">Offer</span>
              </h2>
              <div className="flex gap-4">
                <div className="w-1 bg-brand-dark rounded-full"></div>
                <p className="text-text-muted max-w-md font-sans leading-relaxed">
                  From large-scale governmental tenders to specialized corporate imports, we deliver excellence across diverse sectors globally.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-dark flex items-center justify-center text-white mb-4 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide text-brand-dark">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-md lg:max-w-none">
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1637241612956-b7309005288b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=markus-winkler-HtLkTOr_DQc-unsplash.jpg&w=1920"
              alt="Construction Materials"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
              alt="Technology"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2070"
              alt="Furniture"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
