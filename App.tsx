
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, MapPin, Mail, Dna, ExternalLink } from 'lucide-react';
import { ecosystemData } from './ecosystemData';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Innovation from './pages/Innovation';
import Products from './pages/Products';
import Contact from './pages/Contact';

const Logo = ({ light = false, className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <div className="flex items-center relative">
      <img 
        src="https://i.ibb.co/nqSPczRm/newclustalogobg.png" 
        alt="Clusta Genomics" 
        className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
          light ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Products', path: '/products' },
    { name: 'Clusta Diagnostics', path: 'https://clustadiagnostics.com/', isExternal: true },
  ];

  const isLightText = !scrolled && location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="group py-1">
            <Logo light={isLightText} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const className = `text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] hover:text-[#45aab8] transition-colors ${
                !isLightText ? 'text-gray-700' : 'text-white/90'
              } ${location.pathname === link.path ? 'text-[#45aab8] !opacity-100' : 'opacity-80'}`;

              return link.isExternal ? (
                <a 
                  key={link.name}
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${className} flex items-center gap-1`}
                >
                  {link.name} <ExternalLink size={10} className="opacity-50" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={className}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/contact" 
              className="bg-[#45aab8] hover:opacity-90 text-white px-7 py-2.5 rounded-full text-[11px] font-black transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-[0.2em]"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={!isLightText ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 py-8 border-b' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a 
                key={link.name}
                href={link.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-gray-800 uppercase tracking-widest hover:text-[#45aab8] flex items-center gap-2"
              >
                {link.name} <ExternalLink size={14} />
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-gray-800 uppercase tracking-widest hover:text-[#45aab8]"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-[#45aab8] text-white px-8 py-3 rounded-full font-bold text-xs tracking-widest"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="mb-6 block">
            <Logo light={true} />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 mt-4">
            Pioneering precision medicine in Africa through advanced genomics and molecular diagnostics. Built on excellence and localized expertise.
          </p>
          <div className="flex gap-4">
             <a 
               href="https://www.x.com/@clustagenomics" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#45aab8] transition-colors cursor-pointer"
             >
               <span className="font-black italic text-sm">X</span>
             </a>
             <a 
               href="mailto:contact@clustagenomics.com"
               className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#45aab8] transition-colors cursor-pointer"
             >
               <Mail size={18} />
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-[#45aab8]">Ecosystem</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {ecosystemData.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="hover:text-white transition-colors">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[#45aab8]">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/innovation" className="hover:text-white transition-colors">Our Innovation</Link></li>
            <li><a href="https://clustadiagnostics.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Clusta Diagnostics <ExternalLink size={10} /></a></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[#45aab8]">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#45aab8]" /> Dolphin Estate, Ikoyi, Lagos
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#45aab8]" /> contact@clustagenomics.com
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-900 pt-8 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Clusta Genomics Africa. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-[#45aab8]/20 selection:text-[#45aab8]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
