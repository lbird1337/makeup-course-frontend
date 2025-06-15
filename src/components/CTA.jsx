import React from 'react';

const CTA = ({ handleOpenModal }) => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="h2 text-center mb-12 text-fluid-2xl">Готовы начать?</h2>
        <p className="font-body text-lg mb-8">
          Чтобы гарантировать свое участие, внесите предоплату. Если у Вас остались вопросы - обязательно ответим на них!
        </p>
        <button 
          className="btn-primary"
          onClick={() => handleOpenModal({ amount: 10000, description: 'Предоплата за бронирование места' })}
        >
          Внести предоплату 10.000 руб
        </button>
      </div>
    </section>
  );
};

export default CTA; 