import React from 'react';

const ModalInput = ({ title, width }: { title: string; width?: string }) => {
  return (
    <div className="inline-flex mr-3">
      <div className="relative inline-flex items-center rounded-xl bg-white">
        <input
          type="text"
          placeholder={title}
          className="rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:border-1  focus:border-black focus:ring-1 focus:ring-black"
          style={{ width, borderRadius: '12px' }} // Increased border radius to 12px
        />
      </div>
    </div>
  );
};

export default ModalInput;