import React from 'react';

const AudienceSection = () => {
  return (
    <section className="bg-white border-t-2 border-b-2 border-black">
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-8">
          Для кого этот мастер-класс?
        </h2>
        <p className="font-body text-base text-center max-w-2xl mx-auto">
          Для начинающих визажистов, желающих освоить базу, и для практикующих мастеров, 
          стремящихся отточить технику и узнать о новых трендах. Мы дадим вам уверенность 
          и инструменты для создания безупречного макияжа.
        </p>
      </div>
    </section>
  );
};

export default AudienceSection; 