import React from 'react';

const Logo = ({ className, fill1 = 'fill-black', fill2 = 'fill-white' }) => {
  return (
    <svg 
      viewBox="0 0 1140 240" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <text 
        x="0" 
        y="88"
        fontFamily="Arial Black, sans-serif"
        fontSize="120"
        fontWeight="900"
        letterSpacing="-6"
        className={fill1}
      >
        СВЕТЛАНА
      </text>
      <text 
        x="0" 
        y="218"
        fontFamily="Arial Black, sans-serif"
        fontSize="120"
        fontWeight="900"
        letterSpacing="-6"
        className={fill2}
      >
        ЦЫРЕНОВА
      </text>
    </svg>
  );
};

export default Logo; 