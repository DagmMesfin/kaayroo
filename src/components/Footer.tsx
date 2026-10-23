import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-brand-accent/20">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Kaayroo Logo" className="h-30 object-contain" />
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-300 font-bold tracking-wide text-lg font-sans">Partner With Us</span>
            <button className="bg-white hover:bg-gray-100 text-brand-dark px-6 py-2.5 rounded text-sm font-bold flex items-center gap-2 transition-colors uppercase tracking-wider font-sans">
              Get in Touch <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-16"></div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 text-white">

          {/* Contact Details col */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold font-serif mb-6 tracking-wide text-white">Contact Details</h4>

            <div className="flex flex-col gap-4 text-sm text-gray-300 font-sans">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-white mt-0.5" />
                <div>
                  <a href="mailto:coca.fekadu@gmail.com" className="block hover:text-white transition-colors">coca.fekadu@gmail.com</a>
                  <a href="mailto:elias.noel@gmail.com" className="block hover:text-white transition-colors">elias.noel@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-white mt-0.5" />
                <div>
                  <a href="tel:+251911541410" className="block hover:text-white transition-colors">0911541410</a>
                  <a href="tel:+251910314411" className="block hover:text-white transition-colors">+251 91 031 4411</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-0.5" />
                <span>Tefera Business Center</span>
              </div>
            </div>
          </div>

          {/* Links cols */}
          <div>
            <h4 className="font-bold mb-4 font-serif text-white">Sourcing</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400 font-sans">
              <li><a href="#" className="hover:text-white transition-colors">Government</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NGO Supply</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-serif text-white">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400 font-sans">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-serif text-white">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400 mb-6 font-sans">
              <li><a href="https://www.instagram.com/kaayroo54?stkn=cTN5bDE1dTE1bWpm" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/qr/4ATF3UN7HGWLO1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="flex justify-between items-center text-xs text-gray-500 pt-8 border-t border-white/5 font-sans">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          </div>
          <div>© {new Date().getFullYear()} Kaayroo General Trading PLC</div>
        </div>
      </div>
    </footer>
  );
}
