import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';

const Header = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Если прокрутили больше, чем на 300px, показываем кнопку
      if (window.scrollY > 300) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    // Добавляем подписчика на событие скролла
    window.addEventListener('scroll', handleScroll);

    // Очищаем подписчика, когда компонент размонтируется — это важно!
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Пустой массив означает, что эффект запустится один раз

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center py-4">
          
          <a href="#">
            <Logo 
              className="h-8 w-auto" 
              fill1="fill-brand-accent" 
              fill2="fill-brand-text" 
            />
          </a>

          <a 
            href="#pricing-section" 
            className={`btn-secondary text-sm transition-opacity duration-300 ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden={!isButtonVisible}
          >
            Забронировать место
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 