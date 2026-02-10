import React from 'react';
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

          {/* Diagnostic Tests Showcase */}
          <div className="bg-white rounded-3xl py-12 px-4 md:px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Explore Our Diagnostic Tests</h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our range of at-home diagnostic test kits. Click on any test to learn more on our diagnostics platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* HIV Test Card */}
              <a 
                href="https://clustadiagnostics.com/#:~:text=Popular,Test%20Kits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/images/hiv-test.png" 
                    alt="HIV Test Kit" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">HIV</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    A confidential, at-home test that checks for HIV-1 and HIV-2 antibodies using a small drop of blood from a finger prick, with results in 15 minutes.
                  </p>
                  <button className="w-full bg-[#45aab8] text-white px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-slate-900 transition-all shadow-md hover:shadow-lg">Add to Cart</button>
                </div>
              </a>

              {/* Malaria Test Card */}
              <a 
                href="https://clustadiagnostics.com/#:~:text=Popular,Test%20Kits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/images/malaria-test.png" 
                    alt="Malaria Test Kit" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">Malaria</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    Stay ahead of malaria with a fast at-home test that delivers clear results in minutes.
                  </p>
                  <button className="w-full bg-[#45aab8] text-white px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-slate-900 transition-all shadow-md hover:shadow-lg">Add to Cart</button>
                </div>
              </a>

              {/* Hepatitis B Test Card */}
              <a 
                href="https://clustadiagnostics.com/#:~:text=Popular,Test%20Kits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/images/hepatitis-b-test.png" 
                    alt="Hepatitis B Test Kit" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-3 text-gray-900">Hepatitis B</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    An at-home rapid test that checks for Hepatitis B Surface Antigen (HBsAg) in a blood sample to detect infection.
                  </p>
                  <button className="w-full bg-[#45aab8] text-white px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-slate-900 transition-all shadow-md hover:shadow-lg">Add to Cart</button>
                </div>
              </a>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://clustadiagnostics.com/#:~:text=Popular,Test%20Kits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#45aab8] text-white px-12 py-4 rounded-lg font-bold text-base uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl"
              >
                Explore All Tests
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;