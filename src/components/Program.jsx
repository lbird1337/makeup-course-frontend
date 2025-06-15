import React from 'react';

const day1Program = [
  'Все тонкости подготовки кожи для создания той самой холенной, подсвеченной кожи',
  'Приемы продления стойкости макияжа',
  'Продукты для создания устойчивого свадебного образа',
  'Подборка мастхэвов для свадебного макияжа',
  'Секретная техника работы с пучками',
  'Идеальный макияж глаз без утяжеления, какие оттенки подойдут всем',
  'Лучшее комбо для губ',
  'Как продвигаться свадебному стилисту',
];

const day2Program = [
  'Работа с декольте: продукты и техники нанесения',
  'Работа с кожей: создание стойкого, но натурального покрытия',
  'Универсальная схема идеальных дымчатых глаз',
  'Актуальная техника создания стрелок',
  'Работа с ресницами: коммерческие формы и инструменты',
  'Продукты для создания чувственных губ',
  'Техники коррекции лица кремовыми и сухими текстурами',
  'Целостность образа: что нужно и не нужно использовать',
  'Создание продающего портфолио визажиста',
];

const Program = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12 text-fluid-2xl">Программа мастер-класса</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Day 1 */}
          <div className="border border-brand-text p-8">
            <h3 className="h3 mb-6">День 1. Wedding makeup</h3>
            <ul className="space-y-4 font-body text-brand-text">
              {day1Program.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Day 2 */}
          <div className="border border-brand-text p-8">
            <h3 className="h3 mb-6">День 2. Sexy Smokey Eyes</h3>
            <ul className="space-y-4 font-body text-brand-text">
              {day2Program.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program; 