
import React from 'react';
import { Microscope, Zap, Database, Globe, ArrowRight, ShieldCheck, Database as BankIcon, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Innovation: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header - Using solid teal brand theme */}
      <div className="bg-[#45aab8] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Globe size={400} className="absolute -top-20 -right-20 animate-pulse text-white" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Our Innovation
          </motion.h1>
          <p className="text-white/90 text-xl font-medium mb-8">Science at the Edge of Tomorrow</p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Clusta Bank - INFRASTRUCTURE SECTION (Fixed Image) */}
      <section id="bank" className="py-24 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-slate-50 rounded-[4rem] rotate-2" />
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000" 
                alt="Clusta Bank Data Center" 
                className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl border border-white"
              />
              <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block z-20">
                <BankIcon size={48} className="text-[#45aab8] mb-4" />
                <p className="text-2xl font-black text-slate-900">10PB+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Genomic Storage Capacity</p>
              </div>
            </div>
            <div>
              <span className="text-[#45aab8] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Infrastructure</span>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Clusta Bank: <br/> The African Bio-Repository</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Data sovereignty is health sovereignty. Clusta Bank is Africa’s premier bio-repository, designed for the secure, ethical, and high-performance storage of genomic data. We provide the infrastructure needed for pan-African research cohorts to thrive without data leaving the continent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">Data Privacy</h4>
                  <p className="text-slate-500 text-xs">GDPR and local NDPR compliant encryption protocols for African data.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-2">Ethics-First</h4>
                  <p className="text-slate-500 text-xs">Community-governed data access committees for international researchers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Breakdown - NGS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <Microscope className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">High-Throughput NGS</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                We leverage Next-Generation Sequencing (NGS) to analyze thousands of genes simultaneously. This allows for rapid identification of pathogens and understanding complex genetic diseases in a fraction of the time traditional methods require.
              </p>
              <ul className="space-y-4">
                {['Whole Genome Sequencing', 'Targeted Panels', 'Exome Analysis', 'Single-Cell RNA Seq'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold">
                    <ArrowRight className="text-blue-500" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=1000" 
                alt="Genomic Sequencing Laboratory" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* AI Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
             <div className="order-2 md:order-1">
               <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                alt="Bioinformatics Data Analysis" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                <Layers className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Bioinformatics & AI</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Raw data is just the beginning. Our proprietary bioinformatics pipeline uses AI and machine learning to interpret complex genomic patterns, providing clinicians with actionable insights and predictive models for disease risk.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-green-500 shadow-sm">
                <p className="text-slate-700 font-bold text-lg mb-4 italic">"Precision health is not just about the test; it's about the intelligence we extract from the code of life."</p>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">— Chief Data Scientist, Clusta Genomics</p>
              </div>
            </div>
          </div>

          {/* Clusta Prevent - FUTURE R&D SECTION */}
          <section id="prevent" className="py-24 bg-slate-50 rounded-[4rem] relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 right-0 p-12">
               <span className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl">Coming Soon</span>
            </div>
            <div className="max-w-4xl mx-auto px-8 text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-10 shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Clusta Prevent: <br/> Inclusive Prophylactics</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Our upcoming R&D initiative, Clusta Prevent, focuses on developing vaccines and therapeutics tailored specifically for African populations. Our flagship project, the **"Melanin-Safe Study"**, is investigating pharmacogenomic interactions to ensure safer drug dosing across diverse skin types and genetic ancestries.
              </p>
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200 text-slate-900 font-black text-xs uppercase tracking-widest">
                 <Zap size={14} className="text-yellow-500" /> Research Domain: Pharmacogenomics
              </div>
            </div>
          </section>

          {/* Impact Stats */}
          <div className="bg-[#45aab8] rounded-[3rem] p-16 text-center text-white shadow-2xl mt-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Database size={300} className="absolute -left-20 -bottom-20 rotate-12" />
            </div>
            <h3 className="text-3xl font-black mb-16 uppercase tracking-widest">Innovation Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 relative z-10">
              <div>
                <p className="text-6xl font-black text-white mb-2">99.9%</p>
                <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] font-black">Accuracy Rate</p>
              </div>
              <div>
                <p className="text-6xl font-black text-white mb-2">24h</p>
                <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] font-black">Turnaround Time</p>
              </div>
              <div>
                <p className="text-6xl font-black text-white mb-2">50k+</p>
                <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] font-black">Genomes Analyzed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
