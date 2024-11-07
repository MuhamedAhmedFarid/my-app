// components/CardButton.js

import React from 'react';

const CardButton = ({ title, bgColor = 'bg-blue-100' , textColor = 'text-blue-600', paddingX = 'px-3', paddingY = 'py-1' }: any) => {
  return (
    <button className={`${bgColor} ${textColor} border-none rounded-md ${paddingX} ${paddingY}`}>
      {title}
    </button>
  );
};

export default CardButton;
