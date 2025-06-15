import React from 'react';
import { motion } from 'framer-motion';

// Контейнер-анимация для появления элементов по очереди
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Задержка между появлением дочерних элементов
    },
  },
};

// Анимация для элементов, выезжающих снизу
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-end px-4 sm:px-6 md:px-8 overflow-hidden">
      
      {/* ДЕКОРАТИВНАЯ ДАТА: изменена позиция и размер */}
      <motion.div 
        className="absolute top-4 right-4 md:top-auto md:bottom-8 md:left-8 font-heading font-black text-white/20 text-[18vw] sm:text-[15vw] md:text-[12vw] leading-none select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        22/23 ОКТЯБРЯ
      </motion.div>

      {/* ОСНОВНОЙ КОНТЕНТ: добавлен отступ для смещения вверх */}
      <motion.div 
        className="container mx-auto max-w-5xl flex flex-col items-center text-center md:items-end md:text-right pb-16 md:pb-0" // Добавлен pb-16 для мобильных
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="font-body text-brand-text uppercase tracking-widest mb-4"
          variants={itemVariants}
        >
          Светлана Цыренова представляет
        </motion.p>
        
        <motion.h1 
          className="font-heading font-black text-brand-accent text-fluid-3xl leading-none"
          variants={itemVariants}
        >
          Мастер-класс <br/>
          по макияжу <br/>
          в Улан-Удэ
        </motion.h1>
        
        <motion.p
          className="font-body text-brand-text uppercase tracking-widest mt-8 text-fluid-base"
          variants={itemVariants}
        >
          22 / 23 октября
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-8">
          <a href="#pricing-section" className="btn-primary">
            Забронировать место
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 