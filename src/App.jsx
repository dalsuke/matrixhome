import React, { useState, useRef } from 'react';
import { 
  ArrowLeftRight, Coffee, FileText, PenTool, 
  ShoppingBag, Hammer, Key, Phone, Mail, 
  MapPin, Send, Instagram, ChevronDown, Gift,
  Layout, Building, Palmtree, Home, Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [sliderPos, setSliderPos] = useState(54);
  const [selectedStyle, setSelectedStyle] = useState(3);
  const [area, setArea] = useState(75);
  const isResizing = useRef(false);

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let pos = ((e.clientX - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const styles = [
    { icon: Layout, label: 'Современный' },
    { icon: Building, label: 'Минимализм' },
    { icon: Palmtree, label: 'Классика' },
    { icon: Home, label: 'Оригинальный' },
    { icon: Layout, label: 'Скандинавский' },
    { icon: Building, label: 'Лофт' }
  ];

  return (
    <div className="main-wrapper font-sans text-white selection:bg-gold selection:text-black">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 md:px-10 py-8 flex justify-between items-start">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em]">MATRIX HOME</h1>
            <p className="text-[10px] md:text-xs text-gray-400 tracking-[0.3em] uppercase mt-1">Interior Design Studio</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-gold text-gold px-4 md:px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300 active:scale-95"
          >
            ПОЛУСТРАТА
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105" 
            alt="Main Design"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-grayscale-[0.2]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] uppercase tracking-tight">
              Дизайн-проект с реализацией <br />
              под ключ: от бетона <br />
              до новоселья за 4 месяца
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl font-medium tracking-wide">
              Элитный ремонт и дизайн от экспертов Matrix Home
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gold-gradient text-black px-8 md:px-12 py-5 md:py-6 rounded-sm font-bold uppercase tracking-[0.15em] text-xs md:text-sm shadow-2xl transition-all duration-300"
            >
              Получить расчет стоимости
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <motion.section {...fadeInUp} id="portfolio" className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] mb-4">BEFORE/AFTER SLIDER</h3>
            <p className="text-gray-500 uppercase text-[10px] md:text-sm tracking-[0.4em] font-bold">Гляньте результаты наших работ</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div 
              className="before-after-container group cursor-ew-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseDown={() => isResizing.current = true}
              onMouseUp={() => isResizing.current = false}
              onMouseLeave={() => isResizing.current = false}
              onTouchMove={(e) => handleMouseMove(e.touches[0])}
              onTouchStart={() => isResizing.current = true}
              onTouchEnd={() => isResizing.current = false}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-black/70 px-6 py-2 md:px-8 md:py-3 text-sm md:text-lg font-black uppercase tracking-widest border border-white/10 backdrop-blur-sm">Бетон</div>
              </div>
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center z-10 border-r-[2px] md:border-r-[3px] border-gold"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 bg-gold/90 px-6 py-2 md:px-8 md:py-3 text-sm md:text-lg font-black uppercase tracking-widest text-black whitespace-nowrap shadow-xl">Новоселье</div>
              </div>
              <div 
                className="slider-handle"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="slider-button transition-transform group-active:scale-125">
                  <ArrowLeftRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quiz Section - TRANSPARENT & BEAUTIFUL */}
      <motion.section {...fadeInUp} id="calculate" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-[20px] p-8 md:p-16 rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Рассчитайте стоимость <br className="hidden md:block" /> и получите гайд</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Ответьте на 2 вопроса и заберите подарок</p>
            </div>

            <form className="space-y-16">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                   <p className="text-base md:text-lg uppercase tracking-widest text-white font-bold">1. Площадь квартиры?</p>
                   <span className="text-2xl font-black text-gold tracking-tighter">{area} <small className="text-xs font-light">м²</small></span>
                </div>
                <div className="relative pt-2">
                  <input 
                    type="range" 
                    className="w-full accent-gold bg-white/10 h-[3px] appearance-none cursor-pointer rounded-full" 
                    min="20" 
                    max="250"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-gray-600 mt-4">
                    <span>20 м²</span>
                    <span>135 м²</span>
                    <span>250 м²</span>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <p className="text-base md:text-lg uppercase tracking-widest text-white font-bold">2. Выберите стиль:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {styles.map((style, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedStyle(idx)}
                      className={`relative overflow-hidden group border p-6 md:p-8 text-center cursor-pointer transition-all duration-500 flex flex-col items-center justify-center gap-4 rounded-lg backdrop-blur-sm ${selectedStyle === idx ? 'border-gold bg-gold/15 shadow-[0_0_30px_rgba(197,160,89,0.1)]' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                    >
                      {selectedStyle === idx && (
                        <motion.div layoutId="check" className="absolute top-3 right-3 text-gold">
                          <Check className="w-4 h-4" />
                        </motion.div>
                      )}
                      <style.icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${selectedStyle === idx ? 'text-gold' : 'text-gray-500 group-hover:text-white'}`} />
                      <span className={`text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] transition-colors duration-300 ${selectedStyle === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{style.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-10">
                <div className="relative group">
                  <input type="text" placeholder="Имя" className="bg-transparent border-b-2 border-white/10 p-4 w-full text-lg focus:border-gold outline-none transition-all duration-300 font-light placeholder:text-gray-700" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-focus-within:w-full"></div>
                </div>
                <div className="relative group">
                  <input type="tel" placeholder="Телефон" className="bg-transparent border-b-2 border-white/10 p-4 w-full text-lg focus:border-gold outline-none transition-all duration-300 font-light placeholder:text-gray-700" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-focus-within:w-full"></div>
                </div>
              </div>

              <div className="text-center pt-10">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(197, 160, 89, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="button" 
                  className="gold-gradient text-black px-12 md:px-20 py-5 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm shadow-2xl transition-all duration-300"
                >
                  Получить PDF-каталог и смету
                </motion.button>
                <p className="text-[10px] md:text-xs text-gray-500 mt-8 flex items-center justify-center uppercase tracking-[0.2em] font-medium">
                  <Gift className="w-4 h-4 mr-3 text-gold animate-bounce" /> Lead-magnet: PDF guide 2026
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section {...fadeInUp} id="process" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-center mb-20 md:mb-24">Этапы нашей работы</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-12">
            {[
              { id: 1, icon: Coffee, title: 'Встреча', text: 'Обсуждение идей и пожеланий' },
              { id: 2, icon: FileText, title: 'Договор', text: 'Прозрачные сроки и бюджет' },
              { id: 3, icon: PenTool, title: 'Визуализация', text: 'Фотореалистичные рендеры' },
              { id: 4, icon: ShoppingBag, title: 'Закупка', text: 'Комплектация со скидками' },
              { id: 5, icon: Hammer, title: 'Ремонт', text: 'Жесткий технадзор' },
              { id: 6, icon: Key, title: 'Переезд', text: 'Гарантия на все работы' }
            ].map((step, idx) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 group"
              >
                <div className="text-gold text-2xl font-black border-b border-gold/20 pb-2 inline-block px-4 group-hover:border-gold transition-colors duration-500">{step.id}</div>
                <div className="flex justify-center py-4 text-gray-400 group-hover:text-gold transition-colors duration-500"><step.icon className="w-8 h-8 md:w-10 md:h-10" /></div>
                <h5 className="font-black uppercase text-[10px] md:text-xs tracking-widest">{step.title}</h5>
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase leading-loose">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust & Testimonial */}
      <motion.section {...fadeInUp} className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-center mb-20 md:mb-24">Почему нам доверяют</h3>
          <div className="grid lg:grid-cols-2 gap-20 md:gap-24 items-center">
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 shadow-2xl overflow-hidden rounded-lg">
                {[1,2,3,4].map(i => (
                  <div key={i} className="bg-black/40 p-10 md:p-16 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 hover:bg-black/20">
                     <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">{i === 4 ? 'BRANIM' : 'BRAND'}</span>
                  </div>
                ))}
            </div>
            <div className="space-y-12 md:space-y-16">
               <motion.div whileHover={{ x: 10 }} className="flex gap-6 md:gap-8 items-start">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gold flex-shrink-0 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-gold font-black uppercase tracking-widest text-lg md:text-xl mb-1">Екатерина</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-4">Ведущий дизайнер</p>
                    <p className="text-base md:text-lg italic text-gray-300 font-light leading-relaxed tracking-wide">«Мы создаем пространства, которые отражают вашу индивидуальность до мельчайших деталей.»</p>
                  </div>
               </motion.div>
               <motion.div whileHover={{ x: 10 }} className="flex gap-6 md:gap-8 items-start">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-white font-black uppercase tracking-widest text-lg md:text-xl mb-1">Алексей</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-4">Технический директор</p>
                    <p className="text-base md:text-lg italic text-gray-300 font-light leading-relaxed tracking-wide">«Технологии и математический расчет — основа безупречного и долговечного ремонта.»</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-20 md:py-24 bg-black/80 backdrop-blur-md border-t border-white/5">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-20 mb-20">
             <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-black tracking-widest">MATRIX HOME</h1>
                <p className="text-[10px] md:text-xs text-gray-600 tracking-[0.4em] uppercase">Premium Interior Design Studio</p>
             </div>
             <div className="space-y-6 md:space-y-8">
                <a href="tel:+79001234567" className="flex items-center gap-6 group">
                   <Phone className="text-gold w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                   <span className="text-base md:text-lg font-light tracking-widest hover:text-gold transition-colors duration-300">+7 (900) 123-45-67</span>
                </a>
                <a href="mailto:hello@matrix-home.ru" className="flex items-center gap-6 group">
                   <Mail className="text-gold w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                   <span className="text-base md:text-lg font-light tracking-widest hover:text-gold transition-colors duration-300">hello@matrix-home.ru</span>
                </a>
                <div className="flex items-center gap-6 group">
                   <MapPin className="text-gold w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                   <span className="text-base md:text-lg font-light tracking-widest">Москва, Кутузовский пр-т, 12</span>
                </div>
             </div>
             <div className="flex gap-4 md:gap-6">
                <motion.a whileHover={{ y: -5, borderColor: '#c5a059' }} href="#" className="w-14 h-14 md:w-16 md:h-16 border border-white/10 flex items-center justify-center rounded-full transition-all">
                  <Send className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
                <motion.a whileHover={{ y: -5, borderColor: '#c5a059' }} href="#" className="w-14 h-14 md:w-16 md:h-16 border border-white/10 flex items-center justify-center rounded-full transition-all">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
             </div>
          </div>
          <div className="text-center pt-20 border-t border-white/5">
             <p className="text-[9px] md:text-[10px] text-gray-700 uppercase tracking-[0.5em] leading-loose">© Matrix Home 2026. Excellence in Every Detail. <br className="md:hidden" /> All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;