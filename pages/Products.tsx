
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Search, LayoutGrid, HeartPulse, Microscope, 
  FlaskConical, ShieldCheck, ChevronRight, CheckCircle2, 
  FlaskRound, Activity, Shield, Baby, ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Products: React.FC = () => {
  const [activeDetectTab, setActiveDetectTab] = useState(0);

  const detectTabs = [
    { 
      title: "Infectious Disease", 
      content: "Rapid molecular screening for TB, HIV-1, and emerging viral pathogens with 99.9% specificity.",
      icon: FlaskConical,
      kits: ["Clusta-Path TB", "Clusta-Path Viral-X"],
      images: [
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1594718178980-b78e82026489?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    { 
      title: "Oncology", 
      content: "BRCA1/2 targeted screening and somatic mutation profiling designed for African genomic signatures.",
      icon: Search,
      kits: ["Geno-Cancer Link BC", "Soma-Profile"],
      images: [
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1693264882139-6a308957c9ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    { 
      title: "Maternal Health", 
      content: "Non-invasive prenatal testing (NIPT) and comprehensive newborn metabolic screening panels.",
      icon: HeartPulse,
      kits: ["Neo-Screen", "Maternal-Safe NIPT"],
      images: [
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#45aab8] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            OUR PRODUCTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg max-w-2xl font-medium leading-relaxed"
          >
            Reliable diagnostics and high-quality sequencing tools designed to meet the highest global standards.
          </motion.p>
        </div>
      </div>

      {/* Clusta Card Section (Logistics Pillar) */}
      <section id="card" className="py-24 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <Package size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight uppercase">Clusta Card</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                The Clusta Card is a decentralized sample collection and tracking solution. It enables healthcare workers to securely link biological samples to patient identities using biometric-encrypted smart cards.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Biometric patient authentication",
                  "Blockchain-verified chain of custody",
                  "Cold-chain status monitoring"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 size={18} className="text-[#45aab8]" /> {item}
                  </div>
                ))}
              </div>
              <button className="bg-[#45aab8] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl">
                Request Cards
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Sample Collection and Logistics" 
                className="w-full rounded-[2.5rem] shadow-2xl border border-slate-100 object-cover aspect-video lg:aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Molecular Diagnostic Kits Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Molecular Diagnostic Kits</h2>
            <p className="text-slate-500 font-medium">Fast, accurate, and optimized for low-resource settings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50 text-left hover:-translate-y-2 transition-transform">
              <FlaskConical className="text-blue-500 mb-6" size={28} />
              <h3 className="text-xl font-black text-slate-900 mb-2">Clusta-Path Detect</h3>
              <p className="text-slate-400 text-xs mb-8">Infectious disease screening (Viral/Bacterial)</p>
              <button className="text-[#45aab8] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                REQUEST DETAILS <ChevronRight size={14} />
              </button>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50 text-left hover:-translate-y-2 transition-transform">
              <Search className="text-rose-500 mb-6" size={28} />
              <h3 className="text-xl font-black text-slate-900 mb-2">Geno-Cancer Link</h3>
              <p className="text-slate-400 text-xs mb-8">Oncology predisposition testing</p>
              <button className="text-[#45aab8] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                REQUEST DETAILS <ChevronRight size={14} />
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50 text-left hover:-translate-y-2 transition-transform">
              <ShieldCheck className="text-emerald-500 mb-6" size={28} />
              <h3 className="text-xl font-black text-slate-900 mb-2">Resist-Seq Kit</h3>
              <p className="text-slate-400 text-xs mb-8">Antimicrobial resistance profiling</p>
              <button className="text-[#45aab8] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                REQUEST DETAILS <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clusta Detect - Advanced Tabs */}
      <section id="detect" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Clusta Detect Advanced</h2>
            <p className="text-slate-500 font-medium">Deep genomic screening for complex clinical domains.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {detectTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDetectTab(idx)}
                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  activeDetectTab === idx 
                  ? 'bg-[#45aab8] text-white shadow-xl shadow-[#45aab8]/20 scale-105' 
                  : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDetectTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#45aab8]">
                      {React.createElement(detectTabs[activeDetectTab].icon, { size: 24 })}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{detectTabs[activeDetectTab].title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {detectTabs[activeDetectTab].content}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {detectTabs[activeDetectTab].kits.map((kit, kIdx) => (
                      <span key={kIdx} className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-lg text-xs font-black text-slate-900 uppercase tracking-widest">
                        {kit}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Fixed Image Grid with verified high-res URLs */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-60 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                    <img 
                      src={detectTabs[activeDetectTab].images[0]} 
                      alt={`${detectTabs[activeDetectTab].title} Visual 1`} 
                      className="w-full h-full object-cover bg-slate-100"
                    />
                  </div>
                  <div className="h-60 rounded-2xl overflow-hidden shadow-lg border border-slate-100 mt-12">
                    <img 
                      src={detectTabs[activeDetectTab].images[1]} 
                      alt={`${detectTabs[activeDetectTab].title} Visual 2`} 
                      className="w-full h-full object-cover bg-slate-100"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Clusta Panels - Plain Content Grid */}
      <section id="panels" className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Sequencing Tech</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">CLUSTA PANELS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Breast Cancer SNP", desc: "Targeted analysis of 50+ variants associated with breast cancer in African populations.", color: "border-rose-100 bg-rose-50/30" },
              { title: "HPV High-Risk Panel", desc: "Comprehensive genotyping of 14 high-risk HPV strains.", color: "border-purple-100 bg-purple-50/30" },
              { title: "Metabolic Screen", desc: "Exome-based panel for 100+ inherited metabolic disorders.", color: "border-blue-100 bg-blue-50/30" },
              { title: "Cardio-Genomic Panel", desc: "Risk assessment for hypertrophic cardiomyopathy.", color: "border-emerald-100 bg-emerald-50/30" }
            ].map((panel, idx) => (
              <div 
                key={idx}
                className={`p-10 md:p-14 rounded-[2.5rem] border ${panel.color} flex flex-col justify-center min-h-[220px] transition-all duration-300`}
              >
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">{panel.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{panel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Services Grid Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Clinical Services</h2>
            <p className="text-slate-500 font-medium">Comprehensive genomic analysis for healthcare providers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50 text-left hover:-translate-y-2 transition-transform">
              <HeartPulse className="text-rose-400 mb-6" size={28} />
              <h3 className="text-xl font-black text-slate-900 mb-2">Precision Oncology</h3>
              <p className="text-slate-400 text-xs mb-8">Personalized cancer treatment plans</p>
              <button className="text-[#45aab8] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                REQUEST DETAILS <ChevronRight size={14} />
              </button>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50 text-left hover:-translate-y-2 transition-transform">
              <Microscope className="text-blue-500 mb-6" size={28} />
              <h3 className="text-xl font-black text-slate-900 mb-2">Rare Disease Dx</h3>
              <p className="text-slate-400 text-xs mb-8">Genetic counseling and diagnosis</p>
              <button className="text-[#45aab8] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                REQUEST DETAILS <ChevronRight size={14} />
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_15px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50 text-left hover:-translate-y-2 transition-transform">
              <FlaskRound className="text-yellow-500 mb-6" size={28} />
              <h3 className="text-xl font-black text-slate-900 mb-2">Newborn Screening</h3>
              <p className="text-slate-400 text-xs mb-8">Early detection for metabolic disorders</p>
              <button className="text-[#45aab8] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                REQUEST DETAILS <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solution Dashed Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 md:p-16 text-center">
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Need a Custom Solution?</h3>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
              Our research and development team can help you build custom panels or implement localized surveillance programs. Let's discuss your specific needs.
            </p>
            <Link to="/contact" className="inline-block bg-[#45aab8] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:opacity-90 transition-all">
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
