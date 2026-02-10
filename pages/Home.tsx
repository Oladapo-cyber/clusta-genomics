
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ecosystemData } from '../ecosystemData';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "https://img1.wsimg.com/isteam/stock/24026/:/rs=w:1023,m",
    "https://img1.wsimg.com/isteam/stock/5l2Eejj/:/rs=w:1023,m",
    "https://img1.wsimg.com/isteam/stock/72891/:/rs=w:1023,m"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-black/60 to-blue-950/70 z-10"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            A molecular diagnostic and <br className="hidden md:block" /> 
            <span className="text-blue-400">life science company</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
          >
            Transforming Africa’s Health Through Precision Genomics
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              LEARN MORE <ChevronRight size={20} />
            </Link>
            <Link 
              to="/products" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center"
            >
              VIEW PRODUCTS
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform"></div>
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000" 
                alt="Laboratory Professional" 
                className="relative z-10 w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <span className="text-[#45aab8] font-bold uppercase tracking-widest text-sm block mb-4">Who we are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Africa’s Health Through Precision Genomics
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Clusta is an African genomics company dedicated to strengthening healthcare systems through advanced molecular testing, genomic surveillance, and precision health solutions. We deliver reliable diagnostics, high-quality sequencing, and actionable data that empower patients, clinicians, researchers, and governments.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-[#45aab8] font-bold hover:gap-4 transition-all"
              >
                FIND OUT MORE <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESTORED: Transforming the Future Teal Banner */}
      <section className="py-20 bg-[#45aab8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transforming the Future with Clusta Genomics
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            We are a biotechnology company reimagining African healthcare through genomics. We are building local capacity, supporting public health programs, and providing accurate, affordable, and timely diagnostic solutions that address Africa's unique disease burden. Explore our groundbreaking solutions.
          </p>
          <Link 
            to="/innovation" 
            className="inline-block bg-white text-[#45aab8] px-10 py-4 rounded-md font-extrabold shadow-lg hover:bg-gray-50 transition-all uppercase tracking-widest"
          >
            DISCOVER INNOVATION
          </Link>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#45aab8] font-bold uppercase tracking-widest text-sm block mb-4">Our Vision</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Developing Innovative Diagnostic Solutions for Africa.
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                African Science. Global Standards. Real Impact. We are reimagining African healthcare through genomics, building local capacity, supporting public health programs, and providing accurate, affordable, and timely diagnostic solutions that address Africa's unique disease burden.
              </p>
              <Link 
                to="/products" 
                className="inline-flex items-center gap-2 bg-[#45aab8] text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-all shadow-md"
              >
                EXPLORE SOLUTIONS
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000" 
                alt="Innovative Laboratory" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Clusta Ecosystem Grid */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#45aab8]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#45aab8] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Integrated Framework</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">The Clusta Ecosystem</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
              From sample collection to clinical intervention, our modular ecosystem provides end-to-end genomic intelligence for Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <item.icon size={28} />
                </div>
                <span className="text-[#45aab8] font-black uppercase tracking-widest text-[10px] mb-2">{item.tagline}</span>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <Link 
                  to={item.link} 
                  className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-900 group-hover:text-[#45aab8] transition-colors"
                >
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTORED: Our Team & Our Innovation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Team Card */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Clusta Genomics, we have assembled a team of talented and dedicated professionals who are passionate about improving healthcare through biotechnology. Our team includes scientists, researchers, and engineers, all of whom bring unique skills and perspectives to our work.
              </p>
              <Link to="/about" className="text-[#45aab8] font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Meet the experts <ArrowRight size={16} />
              </Link>
            </div>

            {/* Our Innovation Card */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1669216368805-04a14268fc47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Our Innovation" 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Innovation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Innovation is at the heart of what we do at Clusta Genomics. We are developing new products that have the potential to transform healthcare. We harness advanced molecular diagnostic and sequencing technologies to detect, prevent, and manage infectious and non-communicable diseases.
              </p>
              <Link to="/innovation" className="text-[#45aab8] font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                See our impact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATED: Dark CTA Banner Section with correct background */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Exact background visual from provided URL */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2070" 
            alt="Advanced Technology Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              We combine cutting-edge technology with African expertise to deliver solutions that save lives.
            </h2>
          </div>
          <Link 
            to="/products" 
            className="whitespace-nowrap bg-white text-gray-900 px-12 py-5 rounded-md font-extrabold text-lg hover:bg-gray-100 transition-all shadow-2xl uppercase tracking-widest"
          >
            VIEW PRODUCTS
          </Link>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Subscribe</h2>
          <p className="text-gray-600 mb-10">Sign up to hear from us about breakthroughs and updates.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow px-6 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#45aab8] text-lg shadow-sm"
            />
            <button 
              type="submit" 
              className="bg-[#45aab8] text-white px-10 py-4 rounded-md font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
