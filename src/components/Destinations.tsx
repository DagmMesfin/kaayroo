import { useState } from 'react';
import { motion } from 'framer-motion';
import { PackageSearch } from 'lucide-react';

const categories = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
    title: 'Architectural Glass',
    description: 'Premium glass imports for commercial buildings',
    tag: 'Construction',
    category: 'Construction'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1000',
    title: 'Enterprise Hardware',
    description: 'High-performance computing equipment',
    tag: 'Technology',
    category: 'Technology'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    title: 'Executive Furniture',
    description: 'Luxury office and home furnishings',
    tag: 'Furniture',
    category: 'Furniture'
  }
];

const tabs = ['All', 'Construction', 'Technology', 'Furniture'];

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' 
    ? categories 
    : categories.filter(c => c.category === activeTab);

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark"
          >
            Global <span className="italic text-brand-accent">Sourcing</span> Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto font-sans"
          >
            Explore our diverse range of premium imports. We ensure the highest quality standards across all our trading verticals.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-colors border ${
                activeTab === tab 
                  ? 'bg-brand-dark text-white border-brand-dark' 
                  : 'bg-transparent text-text-muted border-gray-300 hover:text-brand-dark hover:border-brand-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-light rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 tracking-wide text-brand-dark">{item.title}</h3>
                <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                  <PackageSearch size={16} className="text-brand-accent" />
                  <span>{item.description}</span>
                </div>
                <div className="inline-block px-4 py-1.5 rounded-sm bg-white border border-gray-200 text-brand-dark text-xs font-bold uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
