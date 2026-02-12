import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Shield, Globe, Users, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: <Heart className="text-red-500" />, title: "Precision-Led", desc: "Every diagnosis is backed by the most precise genomic data available." },
    { icon: <Globe className="text-blue-500" />, title: "Pan-African", desc: "Built by Africans, for Africans, addressing our unique genetic landscape." },
    { icon: <Users className="text-green-500" />, title: "Collaborative", desc: "Partnering with governments and global health bodies for collective impact." },
    { icon: <Shield className="text-purple-500" />, title: "Quality Driven", desc: "Adhering to the highest international standards in every process." },
  ];

  return (
    <div className="pt-24">
      {/* Header - Color Updated */}
      <div className="bg-[#45aab8] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">About Clusta Genomics</h1>
          <p className="text-gray-100 text-xl max-w-3xl mx-auto font-light">
            We are at the intersection of biotechnology and African health sovereignty.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="text-blue-600" /> Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to empower African healthcare providers with the tools and data they need to make life-saving decisions. We believe that precision medicine should not be a luxury, but a standard accessible to all.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By investing in localized genomic surveillance, we help identify disease outbreaks faster and tailor treatments to the genetic profiles of our people, ensuring better health outcomes for generations to come.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e024?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Lab" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-8 rounded-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm uppercase tracking-widest font-medium">Research Partnerships</p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center">
                  <div className="mb-6 flex justify-center scale-150">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 md:p-16 text-center">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Need a Custom Solution?</h3>
                <p className="text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                  Our research and development team can help you build custom panels or implement localized surveillance programs. Let's discuss your specific needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#45aab8] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:opacity-90 transition-all"
                >
                  Contact Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;