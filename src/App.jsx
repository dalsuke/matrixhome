import React, { useState, useRef } from 'react';
import { 
  ArrowLeftRight, Coffee, FileText, PenTool, 
  ShoppingBag, Hammer, Key, Phone, Mail, 
  MapPin, Send, Instagram, ChevronDown, Gift,
  Layout, Building, Palmtree, Home
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [sliderPos, setSliderPos] = useState(54);
  const isResizing = useRef(false);

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let pos = ((e.clientX - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  return (
    <div className="main-wrapper">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-10 py-8 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-[0.2em]">MATRIX HOME</h1>
            <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mt-1">Interior Design Studio</p>
          </div>
          <button className="border border-gold text-gold px-6 py-2 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all">
            ПОЛУСТРАТА
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Main Design"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] uppercase tracking-tight">
              Дизайн-проект с реализацией <br />
              под ключ: от бетона <br />
              до новоселья за 4 месяца
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl font-medium tracking-wide">
              Элитный ремонт и дизайн от экспертов Matrix Home
            </p>
            <button className="gold-gradient text-black px-12 py-6 rounded-sm font-bold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform shadow-2xl">
              Получить расчет стоимости
            </button>
          </motion.div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="portfolio" className="py-32 bg-[#111111]">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-black uppercase tracking-[0.2em] mb-4">BEFORE/AFTER SLIDER</h3>
            <p className="text-gray-500 uppercase text-sm tracking-[0.4em] font-bold">Гляньте результаты наших работ</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div 
              className="before-after-container group"
              onMouseMove={handleMouseMove}
              onMouseDown={() => isResizing.current = true}
              onMouseUp={() => isResizing.current = false}
              onMouseLeave={() => isResizing.current = false}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
                <div className="absolute bottom-10 left-10 bg-black/70 px-8 py-3 text-lg font-black uppercase tracking-widest border border-white/10">Бетон</div>
              </div>
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center z-10 border-r-[3px] border-gold"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="absolute bottom-10 right-10 bg-gold/90 px-8 py-3 text-lg font-black uppercase tracking-widest text-black whitespace-nowrap">Новоселье</div>
              </div>
              <div 
                className="slider-handle"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="slider-button">
                  <ArrowLeftRight className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
               <h4 className="text-3xl font-bold uppercase tracking-widest">Гляньте результаты наших работ</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="calculate" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-10">
          <div className="max-w-5xl mx-auto bg-[#161616] p-16 rounded-sm border border-white/5 shadow-inner">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black uppercase tracking-tight mb-4">Рассчитайте стоимость <br /> и получите гайд</h3>
            </div>

            <form className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
                   <span>Площадь</span>
                   <span className="text-gold">Гайд</span>
                   <span>Смета</span>
                </div>
                <p className="text-lg uppercase tracking-widest text-white font-bold">Площадь квартиры?</p>
                <input type="range" className="w-full accent-gold bg-white/10 h-[2px] appearance-none cursor-pointer" min="20" max="250" />
              </div>

              <div className="space-y-8">
                <p className="text-lg uppercase tracking-widest text-white font-bold">Выберите стиль:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { icon: Layout, label: 'Современный' },
                    { icon: Building, label: 'Минимализм' },
                    { icon: Palmtree, label: 'Классика' },
                    { icon: Home, label: 'Оригинальный' },
                    { icon: Layout, label: 'Скандинавский' },
                    { icon: Building, label: 'Лофт' }
                  ].map((style, idx) => (
                    <div key={idx} className={`quiz-option ${idx === 3 ? 'active' : ''}`}>
                      <style.icon className="w-10 h-10 text-gray-500 group-hover:text-gold" />
                      <span className="text-xs uppercase font-bold tracking-widest">{style.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <input type="text" placeholder="Имя" className="bg-transparent border-b border-white/20 p-4 w-full text-lg focus:border-gold outline-none transition-colors font-light" />
                <input type="tel" placeholder="Телефон" className="bg-transparent border-b border-white/20 p-4 w-full text-lg focus:border-gold outline-none transition-colors font-light" />
              </div>

              <div className="text-center pt-10">
                <button type="button" className="gold-gradient text-black px-16 py-6 font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform">
                  Получить PDF-каталог и смету
                </button>
                <p className="text-xs text-gray-600 mt-6 flex items-center justify-center uppercase tracking-widest">
                  <Gift className="w-4 h-4 mr-3 text-gold" /> Lead-magnet: PDF guide
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-[#111111]">
        <div className="container mx-auto px-10">
          <h3 className="text-4xl font-black uppercase tracking-[0.2em] text-center mb-24">Этапы нашей работы</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              { id: 1, icon: Coffee, title: 'Встреча', text: 'Обсуждение идей и пожеланий' },
              { id: 2, icon: FileText, title: 'Договор', text: 'Прозрачные сроки и бюджет' },
              { id: 3, icon: PenTool, title: 'Визуализация', text: 'Фотореалистичные рендеры' },
              { id: 4, icon: ShoppingBag, title: 'Закупка', text: 'Комплектация со скидками' },
              { id: 5, icon: Hammer, title: 'Ремонт', text: 'Жесткий технадзор' },
              { id: 6, icon: Key, title: 'Переезд', text: 'Гарантия на все работы' }
            ].map((step) => (
              <div key={step.id} className="text-center space-y-4">
                <div className="text-gold text-2xl font-black border-b border-gold/20 pb-2 inline-block px-4">{step.id}</div>
                <div className="flex justify-center py-4 text-gray-400"><step.icon className="w-10 h-10" /></div>
                <h5 className="font-black uppercase text-xs tracking-widest">{step.title}</h5>
                <p className="text-[10px] text-gray-500 uppercase leading-loose">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonial */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-10">
          <h3 className="text-4xl font-black uppercase tracking-[0.2em] text-center mb-24">Почему нам доверяют</h3>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="bg-[#111111] p-12 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                     <span className="text-2xl font-bold tracking-widest">{i === 4 ? 'BRANIM' : 'BRAND'}</span>
                  </div>
                ))}
            </div>
            <div className="space-y-16">
               <div className="flex gap-8 items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="text-gold font-black uppercase tracking-widest text-xl mb-1">Екатерина</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-4">Ведущий дизайнер</p>
                    <p className="text-lg italic text-gray-300 font-light leading-relaxed">«Мы создаем пространства, которые отражают вашу индивидуальность до мельчайших деталей.»</p>
                  </div>
               </div>
               <div className="flex gap-8 items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xl mb-1">Алексей</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-4">Технический директор</p>
                    <p className="text-lg italic text-gray-300 font-light leading-relaxed">«Технологии и математический расчет — основа безупречного и долговечного ремонта.»</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-3 gap-20 mb-20">
             <div className="space-y-6">
                <h1 className="text-3xl font-black tracking-widest">MATRIX HOME</h1>
                <p className="text-xs text-gray-600 tracking-[0.4em] uppercase">Premium Interior Design</p>
             </div>
             <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                   <Phone className="text-gold w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span className="text-lg font-light tracking-widest">+7 (900) 123-45-67</span>
                </div>
                <div className="flex items-center gap-6 group">
                   <Mail className="text-gold w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span className="text-lg font-light tracking-widest">hello@matrix-home.ru</span>
                </div>
                <div className="flex items-center gap-6 group">
                   <MapPin className="text-gold w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span className="text-lg font-light tracking-widest">Москва, Кутузовский пр-т, 12</span>
                </div>
             </div>
             <div className="flex gap-6">
                <a href="#" className="w-16 h-16 border border-white/10 flex items-center justify-center hover:border-gold transition-colors">
                  <Send className="w-6 h-6" />
                </a>
                <a href="#" className="w-16 h-16 border border-white/10 flex items-center justify-center hover:border-gold transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
             </div>
          </div>
          <div className="text-center pt-20 border-t border-white/5">
             <p className="text-[10px] text-gray-700 uppercase tracking-[0.5em]">© Matrix Home 2026. Excellence in Every Detail.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;