import { Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/img/logo.png" alt="Supernova Soft Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl">SUPERNOVA SOFT</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              We build amazing web applications, deliver qualified solutions, deploy successful productions, and add value to your business.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/supernovasoft" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/Tarek_Kalaajy" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=90000000000" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="https://blog.supernovasoft.com" className="text-slate-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://tools.supernovasoft.com" className="text-slate-400 hover:text-primary transition-colors">Tools</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-4">Contact Info</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <span className="text-primary mt-1">📍</span>
                <span>Istanbul, Turkey</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-primary">✉️</span>
                <a href="mailto:info@supernovasoft.com" className="hover:text-primary transition-colors">info@supernovasoft.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-primary">📞</span>
                <a href="tel:+905312089995" className="hover:text-primary transition-colors">+90 531 208 9995</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Supernova Soft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
