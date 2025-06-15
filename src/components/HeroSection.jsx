import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <h1 className="font-heading font-black text-4xl md:text-6xl mb-4 text-center">
        Мастер-класс по визажу
      </h1>
      <h3 className="font-heading font-semibold text-xl md:text-2xl mb-8 text-center">
        Улан-Удэ | 25 декабря 2024
      </h3>
      <Button>Записаться</Button>
    </section>
  );
};

export default HeroSection; 