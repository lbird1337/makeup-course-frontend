import React from 'react';
// Импортируем Swiper и его компоненты
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutPoints = [
  'Профессиональный визажист-стилист: накрасила 1000+ девушек',
  '8 лет создаю образы для совершенно разных девушек с любой внешностью и обучаю макияжу логично и системно.',
  'Веду трансляции для Золотого Яблока, где регулярно обучаю 100+ девушек секретам макияжа',
  'Создавала образы для таких девушек как: Равшана Куркова, Екатерина Варнава, Елена Блиновская, Наташа Королева и др.',
];

const stats = [
  { value: 'ТОП-30', text: 'лучших свадебных стилистов России' },
  { value: '8 ЛЕТ', text: 'создаю роскошные образы' },
  { value: '500+', text: 'девушек прошли обучение макияжу для себя' },
];

const AboutMe = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="font-heading text-fluid-2xl font-black text-brand-accent uppercase tracking-widest whitespace-nowrap">О Светлане</h2>
          <div className="flex-grow h-px bg-brand-text ml-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          
          {/* Левая колонка: Текст */}
          <div className="md:col-span-3 space-y-8">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="block w-8 h-px bg-brand-accent mt-3"></span>
                <p className="flex-1 font-body text-brand-text text-fluid-base">{point}</p>
              </div>
            ))}
            
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-[200px] flex-1">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-brand-accent flex justify-center items-center mb-4">
                    <span className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-body text-brand-text text-base sm:text-lg md:text-xl opacity-80 leading-snug">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка: Слайдер */}
          <div className="md:col-span-2 w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              className="w-full"
            >
              <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}about/1.jpg`} alt="Светлана Цыренова 1" className="w-full h-full object-cover aspect-[4/5]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}about/2.jpg`} alt="Светлана Цыренова 2" className="w-full h-full object-cover aspect-[4/5]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${import.meta.env.BASE_URL}about/3.jpg`} alt="Светлана Цыренова 3" className="w-full h-full object-cover aspect-[4/5]" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 