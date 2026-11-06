import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, Variants, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Compass, Users, Map, ArrowDown, Quote, CheckCircle2, Car, Clock, Award, Star, ShieldCheck, Sparkles
} from 'lucide-react';
import { PageView } from '../types';
import { PremiumButton } from '../components/Premium';

interface AboutProps {
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (preset?: string) => void;
}

// --- ANIMATION VARIANTS ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// --- STATIC DATA (WITH SEO) ---
const EXPERTISE_TABS = [
  { 
    id: 'tours', 
    title: 'Tailor-Made Packages', 
    icon: Map, 
    text: "We provide tailor-made tour packages that cater to your needs, interests, and budget. Whether you seek luxury or cheap package holidays, our team has a passion for showcasing the beauty and culture of Ethiopia." 
  },
  { 
    id: 'budget',
    title: 'Accessible Excellence',
    icon: ShieldCheck,
    text: "As a leading Ethiopian tour operator, we stand out from the crowd by setting competitive prices without ever compromising our exceptional service for your trips to Ethiopia."
  },
  {
    id: 'car-rental', 
    title: 'Car Rental Services', 
    icon: Car, 
    text: "In addition to our guided tours, we provide top-tier car rental services. Travel Ethiopia across its diverse landscapes safely and comfortably in our well-maintained fleet of vehicles." 
  }
];

const WORK_WITH_US = [
  { title: "Unrivaled Service", text: "Our carefully chosen staff are the best in their profession, deeply experienced in anticipating your needs and delivering excellence.", icon: Sparkles },
  { title: "Competitive Value", text: "We set and charge reasonable prices for our premium services, ensuring you experience the best of Ethiopia within your budget.", icon: Award },
  { title: "Local Mastery", text: "We possess an extensive, intimate knowledge of Ethiopia’s ancient cultures, diverse nature, and beautiful people.", icon: Compass },
  { title: "Ultimate Flexibility", text: "One of our defining qualities is operating and adjusting our tours in a highly flexible way to suit your unique travel rhythm.", icon: Clock }
];

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenPlanModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>('tours');

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToStory = () => {
    const el = document.getElementById('our-story-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFF9F2] font-body text-[#241613] selection:bg-[#DB6148] selection:text-[#FFF9F2]">
      
      <Helmet>
        <title>About Us | Premier Ethiopian Travel Agency</title>
        <meta name="description" content="Discover Abiy Ethiopia Tours, a trusted Ethiopian travel agency dedicated to crafting unforgettable trips to Ethiopia. Explore tailored safaris and holidays with us." />
      </Helmet>

      {/* --- FULL CINEMATIC HERO --- */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#241613]">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 w-full h-full transform-gpu">
          <motion.div initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 8, ease: "easeOut" }} className="w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#241613]/90 via-[#241613]/40 to-[#241613]/90 z-10" />
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://res.cloudinary.com/dw1ohipim/image/upload/v1791473046/udkkvx3gykr6b5ahd9my.jpg')` }} />
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full z-10 pointer-events-none transform-gpu mix-blend-overlay bg-[radial-gradient(circle_at_center,rgba(232,189,90,0.5)_0%,transparent_60%)]"
        />

        <div className="relative z-30 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="flex flex-col items-center">
            
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#E8BD5A]"></span>
              <span className="font-['Montserrat',_sans-serif] text-[10px] uppercase tracking-[0.25em] text-[#E8BD5A] font-bold">
                Our Origins
              </span>
              <span className="w-12 h-[1px] bg-[#E8BD5A]"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#FFF9F2] tracking-tight leading-[0.98] drop-shadow-2xl mb-8">
              Discover Ethiopia <br />
              <span className="italic text-[#E8BD5A] font-light drop-shadow-lg">Through the Eyes</span> <br />
              of Those Who Call It Home
            </h1>
            
            <p className="text-lg md:text-xl text-[#F7EBDD]/80 max-w-2xl font-light leading-relaxed mb-12 drop-shadow-md">
              Locally rooted journeys through Ethiopia&apos;s extraordinary history, culture, and landscapes.
            </p>

          </motion.div>
        </div>

        <motion.button
          onClick={scrollToStory}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-[#E8BD5A] hover:text-[#FFF9F2] transition-colors cursor-pointer flex flex-col items-center gap-3"
        >
          <span className="font-['Montserrat',_sans-serif] text-[9px] uppercase tracking-[0.2em] font-bold">Discover Our Story</span>
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.button>
      </section>

      {/* --- THE STORY --- */}
      <section id="our-story-section" className="py-24 md:py-32 px-6 max-w-[90rem] mx-auto relative z-30 bg-[#F7EBDD]">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5 relative">
            <div className="absolute inset-0 border-2 border-[#D8BFA4] rounded-sm transform translate-x-6 translate-y-6 z-0" />
            <div className="relative z-10 overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(36,22,19,.15)] bg-[#241613]">
              <img 
                src="https://res.cloudinary.com/dw1ohipim/image/upload/v1793993164/ohjexxdmxwwfqof0jchi.jpg"
                className="w-full aspect-[4/5] object-cover object-[center_65%] hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-90"
                alt="Ethiopian Landscape" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241613]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-[#FFF9F2]">
                <span className="font-['Montserrat',_sans-serif] text-[10px] uppercase tracking-[0.25em] font-bold text-[#E8BD5A]">
                  Cultural Guardians
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 lg:pl-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="font-['Montserrat',_sans-serif] text-[12px] md:text-[14px] uppercase tracking-[0.35em] text-[#DB6148] font-extrabold">
                About Us
              </span>
              <div className="w-12 h-[1px] bg-[#DB6148]/50" />
            </div>
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-[#DB6148]/60" />
                <span className="font-['Montserrat',_sans-serif] text-[10px] uppercase tracking-[0.25em] text-[#A94332] font-bold">
                  Since 2015
                </span>
                <span className="h-px w-12 bg-[#DB6148]/60" />
              </div>

              <div className="inline-flex items-center border border-[#EBD6BC] bg-[#FFF9F2] shadow-[0_18px_40px_rgba(36,22,19,0.06)] px-4 py-3 md:px-5 md:py-4">
                <span className="font-['Montserrat',_sans-serif] text-[10px] uppercase tracking-[0.22em] text-[#5A3D34] font-bold mr-4">
                  Established in
                </span>
                <span className="inline-flex items-center justify-center bg-[#241613] text-[#E8BD5A] text-3xl md:text-4xl lg:text-5xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] px-4 py-2 md:px-5 md:py-3 leading-none shadow-inner">
                  2015
                </span>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-[#5A3D34] font-light leading-relaxed mb-12">
              <p>
                Established in 2015, <strong>Abiy Ethiopia Tours</strong> was founded on a deep passion for travel and a genuine desire to share the extraordinary beauty, history, culture, and traditions of Ethiopia with travelers from around the world.
              </p>
              <p>
                The company was founded by <strong>Abiy Sitotie</strong>, who was born and raised in the historic town of Lalibela, home to Ethiopia&apos;s remarkable rock-hewn churches and one of Africa&apos;s most treasured cultural heritage sites. Growing up surrounded by the country&apos;s rich history, ancient traditions, breathtaking landscapes, and warm hospitality, Abiy developed a lifelong love for his homeland and a passion for introducing its authentic beauty to visitors.
              </p>
              <p>
                What began as a personal dream has grown into a dedicated team of passionate, professional, and knowledgeable travel experts who share the same vision: to make every journey through Ethiopia meaningful, authentic, and unforgettable.
              </p>
              <p>
                At Abiy Ethiopia Tours, we believe that traveling is about more than visiting famous landmarks. It is about discovering new cultures, meeting local communities, experiencing different ways of life, and creating memories that last a lifetime. We want every guest to experience not only the beauty of Ethiopia but also its people, traditions, history, and welcoming spirit.
              </p>
              <p>
                We understand that every traveler is different. That is why we specialize in <strong>tailor-made tours designed around your interests, travel style, schedule, and budget.</strong> Whether you are interested in Ethiopia&apos;s ancient civilizations, fascinating cultural traditions, spectacular landscapes, wildlife, historical attractions, or off-the-beaten-path adventures, we carefully plan every detail to make your experience special.
              </p>
              <p>
                What makes us different is our personal approach, strong local knowledge, genuine passion for our country, and commitment to providing professional and reliable service. As a locally founded Ethiopian tour operator, we take pride in sharing authentic experiences and helping our guests discover places and stories that go beyond the ordinary tourist experience.
              </p>
              <p>
                From the magnificent rock-hewn churches of Lalibela and the historic castles of Gondar to the dramatic landscapes of the Simien Mountains, the cultural richness of the Omo Valley, and the hidden treasures of Ethiopia, we invite you to explore this extraordinary country with us.
              </p>
            </div>

            <blockquote className="mb-10 border-y border-[#EBD6BC] py-8 font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-2xl md:text-3xl leading-relaxed text-[#241613]">
              <strong>Our mission is simple: to share the real Ethiopia with the world, one unforgettable journey at a time.</strong>
            </blockquote>

            <div className="space-y-5 text-lg text-[#5A3D34] font-light leading-relaxed mb-12">
              <p>
                With Abiy Ethiopia Tours, you are not just visiting Ethiopia. You are discovering it with people who know it, love it, and are proud to call it home.
              </p>
              <p><strong>Welcome to Ethiopia. Welcome to our home!</strong></p>
            </div>

            <div className="pt-8 border-t border-[#EBD6BC] flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#241613] flex items-center justify-center text-[#E8BD5A] shadow-md">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-2xl text-[#241613] font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif]"><span className="font-extrabold">Abiy Sitotie</span></p>
                <p className="font-['Montserrat',_sans-serif] text-[10px] tracking-[0.2em] text-[#A94332] uppercase font-bold mt-1.5">
                  Expert Travel & Transport Professionals
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- INTERACTIVE PHILOSOPHY --- */}
      <section className="py-24 bg-[#FFF9F2] border-y border-[#EBD6BC] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#241613 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="lg:w-1/3 w-full lg:sticky lg:top-32 shrink-0">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-12 h-[1px] bg-[#DB6148]"></span>
                <span className="font-['Montserrat',_sans-serif] text-[10px] tracking-[0.25em] text-[#A94332] uppercase font-bold">
                  Our Expertise
                </span>
              </div>
              
              <ul className="flex flex-col gap-2 relative">
                <div className="absolute left-0 top-0 w-px h-full bg-[#EBD6BC] z-0" />
                {EXPERTISE_TABS.map((tab, index) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <li key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative z-10 py-5 pl-8 cursor-pointer group">
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] transition-all duration-500 ease-out rounded-full ${isActive ? 'h-full bg-[#DB6148]' : 'h-0 bg-[#DB6148] group-hover:h-1/2'}`} />
                      <div className="flex items-baseline gap-4">
                        <span className={`font-['Montserrat',_sans-serif] text-xs tracking-widest transition-colors duration-500 ${isActive ? 'text-[#DB6148] font-bold' : 'text-[#D8BFA4]'}`}>0{index + 1}.</span>
                        <h3 className={`text-3xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] transition-colors duration-500 ${isActive ? 'text-[#241613] italic' : 'text-[#5A3D34] group-hover:text-[#241613]'}`}>{tab.title}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:w-2/3 w-full flex items-center min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: "easeOut" }} className="bg-[#F7EBDD] p-12 md:p-20 border border-[#EBD6BC] rounded-sm shadow-[0_20px_50px_rgba(36,22,19,.05)] relative w-full">
                  <Quote size={80} className="absolute top-10 right-10 text-[#33201A]/5" />
                  {EXPERTISE_TABS.map(tab => tab.id === activeTab && (
                    <div key={tab.id} className="relative z-10">
                      <div className="w-16 h-16 bg-[#FFF9F2] border border-[#EBD6BC] rounded-full flex items-center justify-center text-[#DB6148] shadow-sm mb-8">
                        <tab.icon size={24} strokeWidth={1.5} />
                      </div>
                      <p className="text-3xl md:text-4xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#241613] leading-relaxed italic">
                        "{tab.text}"
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK WITH US --- */}
      <section className="py-32 bg-[#F7EBDD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[10px] font-['Montserrat',_sans-serif] tracking-[0.25em] text-[#A94332] uppercase block mb-6 font-bold">
              The Abiy Standard
            </span>
            <h2 className="text-4xl md:text-6xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#241613] mb-6 tracking-tight">Why Journey With Us</h2>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORK_WITH_US.map((value, index) => (
              <motion.div variants={fadeUp} key={index} className="group flex flex-col p-10 bg-[#FFF9F2] border border-[#EBD6BC] rounded-sm hover:shadow-[0_20px_40px_rgba(36,22,19,0.06)] hover:border-[#D9A441]/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 bg-[#F7EBDD] border border-[#D8BFA4] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#DB6148] group-hover:border-[#DB6148] transition-all duration-500 shadow-sm">
                    <value.icon className="text-[#A94332] group-hover:text-[#FFF9F2] transition-colors duration-500" size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] mb-3 text-[#241613]">{value.title}</h3>
                    <p className="text-[#5A3D34] text-lg font-light leading-relaxed">{value.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- IMPACT & VOLUME --- */}
      <section className="py-32 bg-[#241613] relative overflow-hidden border-t border-[#33201A]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 85% 20%, rgba(232,189,90,0.16), transparent 45%)' }} />
        
        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-[#E8BD5A]"></span>
                <span className="font-['Montserrat',_sans-serif] text-[10px] tracking-[0.25em] text-[#E8BD5A] uppercase font-bold">
                  Our Legacy
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#FFF9F2] mb-8 leading-tight tracking-tight">
                Years of Excellence as an <br />
                <span className="italic text-[#E8BD5A] font-light">Ethiopian Tour Operator</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-[#D8BFA4] text-xl font-light leading-relaxed">
                  Our team of travel experts draws upon years of rich experience in Ethiopia’s tourism and car rental industries. This strong foundation guarantees you are always in the hands of seasoned professionals.
                </p>
                <p className="text-[#D8BFA4] text-xl font-light leading-relaxed">
                  By strictly prioritizing the quality of our service, local insight, and immense booking flexibility, we ensure every journey meets the exact standards of the discerning traveler.
                </p>
              </div>
              
              <ul className="space-y-4">
                {["In-depth knowledge of cultures & nature", "Modern, reliable premium car rental fleet", "Highly flexible and personalized scheduling"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#FFF9F2]">
                    <CheckCircle2 size={20} className="text-[#E8BD5A] shrink-0" strokeWidth={1.5} />
                    <span className="font-light text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="sm:mt-12">
                <div className="bg-[#33201A]/60 backdrop-blur-md p-12 text-center rounded-sm border border-[#5A3D34] shadow-2xl hover:border-[#D9A441]/50 transition-colors duration-500 h-full flex flex-col justify-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#241613] border border-[#5A3D34] flex items-center justify-center mb-8">
                    <Star className="text-[#E8BD5A]" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl md:text-4xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#FFF9F2] mb-3">Premium</div>
                  <div className="text-[10px] text-[#D8BFA4] font-['Montserrat',_sans-serif] uppercase tracking-[0.2em] font-bold">Service Quality</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="bg-[#94220a] p-12 text-center rounded-sm shadow-[0_20px_50px_rgba(148,34,10,0.3)] h-full flex flex-col justify-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#FFF9F2]/10 flex items-center justify-center mb-8">
                    <Car className="text-[#FFF9F2]" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl md:text-4xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#FFF9F2] mb-3">Reliable</div>
                  <div className="text-[10px] text-[#F7EBDD]/80 font-['Montserrat',_sans-serif] uppercase tracking-[0.2em] font-bold">Car Rental Fleet</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VIBRANT GRAND FINALE CTA SECTION --- */}
      <section className="relative overflow-hidden bg-[#94220a] py-16 md:py-24 border-t border-[#7a1b07]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: ['radial-gradient(ellipse at 15% 20%, rgba(232,189,90,0.18), transparent 38%)', 'radial-gradient(ellipse at 85% 80%, rgba(36,22,19,0.5), transparent 42%)', 'radial-gradient(#FFF9F2 1px, transparent 1px)', 'linear-gradient(135deg, #94220a, #7a1b07 55%, #241613)'].join(', '), backgroundSize: 'auto, auto, 32px 32px, auto' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#241613]/50 p-8 md:p-12 rounded-sm border border-[#E8BD5A]/20 shadow-[0_30px_60px_rgba(36,22,19,0.4)]">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E8BD5A] mb-5 shadow-[0_0_40px_rgba(232,189,90,0.4)]">
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Goudy_Serial',_'Goudy_Bookletter_1911',_serif] text-[#FFF9F2] mb-4 leading-tight tracking-tight drop-shadow-lg">
              Ready to Write Your <br className="hidden md:block"/> 
              <span className="text-[#E8BD5A] italic font-light">Ethiopian Chapter?</span>
            </h2>
            
            <p className="text-base md:text-lg text-[#F7EBDD]/80 max-w-2xl mx-auto mb-7 leading-relaxed font-light">
              Let our experts craft a tailor-made package that caters perfectly to your needs, interests, and budget for your trips to Ethiopia.
            </p>
            
            <div className="flex justify-center">
              <PremiumButton className="shadow-[0_0_40px_rgba(217,164,65,0.25)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(217,164,65,0.45)] ring-1 ring-white/10" onClick={() => onNavigate('contact')}>
                Start the Dialogue
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};