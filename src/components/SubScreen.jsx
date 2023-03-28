import React from 'react';

export default function SubScreen({ onClose }) {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('ModalBackground')) {
      onClose();
    }
  };

  return (
    <div
      className="ModalBackground fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div className="Modal bg-gray-200 p-4 rounded-lg shadow-lg w-3/4 h-1/4 sm:w-1/4 md:w-3/4">
        <h2 className="text-lg font-bold mb-4">SubScreen Title</h2>
        <p>SubScreen content goes here.</p>
      </div>
    </div>
  );
}
