import React from 'react';

const Pricing = ({ handleOpenModal }) => {
  return (
    <section id="pricing-section" className="bg-brand-accent text-brand-bg py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12 text-fluid-2xl">Стоимость участия</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="border-2 border-brand-bg p-8 flex flex-col">
            <h3 className="font-heading text-3xl font-bold mb-2">Без отработки</h3>
            <p className="font-body text-brand-bg/70 mb-6">40 мест</p>
            <div className="my-auto">
              <p className="font-heading font-black text-5xl lg:text-6xl my-4">7900 руб</p>
            </div>
            <p className="font-body text-sm mt-6">Полноценный просмотр двух дней мастер-класса. Сертификат участника.</p>
            <button 
              className="btn-secondary mt-8 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-accent"
              onClick={() => handleOpenModal({ amount: 7900, description: 'Тариф "Без отработки"' })}
            >
              Выбрать
            </button>
          </div>
          {/* Card 2 */}
          <div className="border-2 border-brand-bg p-8 flex flex-col bg-brand-bg text-brand-accent">
            <h3 className="font-heading text-3xl font-bold mb-2">С отработкой</h3>
            <p className="font-body text-brand-accent/70 mb-6">Всего 4 места!</p>
            <div className="my-auto">
              <p className="font-heading font-black text-5xl lg:text-6xl my-4">35000 руб</p>
            </div>
            <p className="font-body text-sm mt-6">Просмотр, полноценная отработка под руководством Светланы, помощь в съемке Reels, подарки.</p>
            <button 
              className="btn-primary mt-8"
              onClick={() => handleOpenModal({ amount: 35000, description: 'Тариф "С отработкой"' })}
            >
              Забронировать
            </button>
          </div>
        </div>
        <p className="text-center mt-12 font-body text-brand-bg">
          Бронирование места осуществляется по предоплате 10.000 руб.
        </p>
      </div>
    </section>
  );
};

export default Pricing; 