import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
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
            Get In <span className="italic text-brand-accent">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto font-sans"
          >
            Have a project in mind or need to discuss a large-scale procurement? Drop us a message below and our team will get back to you promptly.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left Side - The Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full bg-brand-light rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* REPLACE "YOUR_SPLITFORMS_KEY" below with your actual access key */}
            <form action="https://splitforms.com/api/submit" method="POST" className="flex flex-col gap-6">

              <input type="hidden" name="access_key" value={import.meta.env.VITE_SPLITFORMS_KEY} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-dark uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-dark uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-brand-dark uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-dark uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 bg-brand-dark hover:bg-brand-accent text-white px-8 py-3.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors uppercase tracking-widest shadow-md"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Right Side - Map & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full flex flex-col gap-6"
          >
            {/* Map Container */}
            <div className="w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.2559479206607!2d38.7443215!3d9.0347089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f8f0d1693f%3A0x28708ad53ebe65fb!2zVGVmZXJhIEJ1c2luZXNzIENlbnRlciB8IEhhYnRlIEdpeW9yZ2lzIHwg4Ymw4Y2I4YirIOGLqOGMiOGJoOGLqyDhiJvhi5XhiqjhiI0gfCDhiIDhiaXhibAg4YyK4Yuu4Yit4YyK4Yi1!5e1!3m2!1sen!2set!4v1789937595113!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
