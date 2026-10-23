import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const leadership = [
  {
    id: 1,
    name: 'Coca Fekadu',
    role: 'Chief Executive Officer',
    image: '/team/coca.png',
    quote: '"Leading with integrity and a commitment to global excellence."'
  },
  {
    id: 2,
    name: 'Gerema Daba Negasa',
    role: 'Deputy / Vice CEO',
    image: '/team-3.jpg',
    quote: '"Ensuring operational brilliance and sustainable partnerships."'
  },
  {
    id: 3,
    name: 'Eliyas Mana',
    role: 'General Manager',
    image: '/team-2.jpg',
    quote: '"Driving efficient execution and strategic growth."'
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we reached the end, scroll back to start, else scroll right
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' }); // 320px width + 24px gap
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -344, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="flex-1 relative">
            <Quote size={120} className="absolute -top-10 -left-6 text-brand-dark/5 -z-10 rotate-180" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark"
            >
              Our Executive <br /> <span className="italic text-brand-accent">Leadership</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="w-1 bg-brand-dark rounded-full shrink-0"></div>
              <p className="text-text-muted max-w-md font-sans">
                At <span className="text-brand-dark font-bold">Kaayroo General Trading PLC</span>, our visionary leadership team drives our mission forward, building trust with governmental and international organizations through unparalleled service.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Interactive Auto-scrolling Carousel */}
          <div
            className="flex-1 w-full relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {/* Scroll Controls (Visible on hover) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Edge Fades */}
            <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Added standard styling for webkit scrollbar hiding inline */}
              <style>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>

              {leadership.map((person) => (
                <div
                  key={person.id}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-center bg-brand-light border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow cursor-grab active:cursor-grabbing"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-brand-dark/10">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale opacity-90" />
                  </div>
                  <h4 className="font-bold text-xl font-serif tracking-wide text-brand-dark">{person.name}</h4>
                  <p className="text-xs text-brand-accent font-bold uppercase tracking-widest mt-2 mb-6">{person.role}</p>
                  <p className="text-sm text-text-muted italic">"{person.quote}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
