
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const mapQueryUrl = "https://www.google.com/maps/search/?api=1&query=24b+Ibeju+Lekki+Street,+Dolphin+Estate,+Ikoyi+Lagos,+Nigeria";

  return (
    <div className="pt-24">
      {/* Header - Color Updated */}
      <div className="bg-[#45aab8] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe size={400} className="absolute -top-20 -right-20 animate-pulse" />
        </div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Contact Us
          </motion.h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto font-medium">
            Connect with our genomic specialists and laboratory directors today.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Cards */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#45aab8]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#45aab8] mb-12">Headquarters</h2>
                
                <div className="space-y-12">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center">
                      <MapPin className="text-[#45aab8]" size={24} />
                    </div>
                    {/* Updated Address Link */}
                    <a 
                      href={mapQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-[#45aab8] hover:underline font-bold text-lg max-w-xs mx-auto leading-relaxed transition-all cursor-pointer block"
                    >
                      24b Ibeju Lekki Street,<br/>Dolphin Estate, Ikoyi<br/>Lagos, Nigeria
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center">
                      <Mail className="text-[#45aab8]" size={24} />
                    </div>
                    <a href="mailto:contact@clustagenomics.com" className="text-slate-600 hover:text-[#45aab8] text-lg font-bold transition-colors">
                      contact@clustagenomics.com
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center">
                      <Clock className="text-[#45aab8]" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black mb-1 uppercase tracking-widest text-xs">Laboratory Hours</p>
                      <p className="text-slate-600 font-bold">08:00 – 18:00 (GMT+1)</p>
                      <p className="text-slate-400 text-xs mt-2 font-black uppercase tracking-widest">Monday - Friday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center pt-8">
                 <div className="flex flex-col items-center gap-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Digital Presence</h3>
                    <div className="flex gap-4">
                      <motion.a 
                        whileHover={{ y: -5 }} 
                        href="https://www.x.com/@clustagenomics" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-[#45aab8] transition-all shadow-xl"
                      >
                        <span className="text-2xl font-black italic">X</span>
                      </motion.a>
                    </div>
                 </div>
              </div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-50"
            >
              <h2 className="text-3xl font-black mb-10 text-slate-900 tracking-tight">Direct Inquiry</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Identity</label>
                    <input 
                      type="text" 
                      className="w-full px-8 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#45aab8] bg-slate-50/50 font-bold transition-all"
                      placeholder="e.g. Dr. John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Secure Email</label>
                    <input 
                      type="email" 
                      className="w-full px-8 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#45aab8] bg-slate-50/50 font-bold transition-all"
                      placeholder="john@research-inst.org"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Inquiry Domain</label>
                  <select className="w-full px-8 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#45aab8] bg-slate-50/50 appearance-none font-bold">
                    <option>Genetic Testing Kits</option>
                    <option>Clinical Sequencing Service</option>
                    <option>Research Collaboration</option>
                    <option>Press & Media</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Message Content</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-8 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#45aab8] bg-slate-50/50 font-bold transition-all resize-none"
                    placeholder="Provide details regarding your specific diagnostics requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#45aab8] text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-4 group"
                >
                  DISPATCH MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Improved with actual context */}
      <section className="h-[500px] w-full bg-slate-100 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Lagos Aerial Map" 
            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-[#45aab8]/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-[0_48px_96px_-24px_rgba(0,0,0,0.3)] border border-white max-w-md w-full mx-4"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#45aab8] rounded-xl flex items-center justify-center text-white shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-tighter text-xl">Clusta HQ</h3>
                  <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Active Site</p>
                </div>
              </div>
              <a 
                href={mapQueryUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#45aab8] hover:text-white hover:border-[#45aab8] transition-all"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Address clickable in map card too */}
            <a 
              href={mapQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 font-bold mb-8 leading-relaxed hover:text-[#45aab8] hover:underline transition-all block"
            >
              Centrally located in Ikoyi's Dolphin Estate, our facility houses Africa's most advanced NGS sequencing cluster.
            </a>
            
            <a 
              href={mapQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-950 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-center block hover:bg-[#45aab8] transition-colors"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
        
        {/* Subtle Map Coordinates Decor */}
        <div className="absolute bottom-8 left-8 text-[10px] font-black text-slate-400 font-mono tracking-widest hidden md:block">
          LAT: 6.4549° N, LONG: 3.4246° E
        </div>
      </section>
    </div>
  );
};

export default Contact;
