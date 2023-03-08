import { useState } from 'react';

const SubScreen = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleOuterClick = (event) => {
    if (!event.target.closest('.sub-screen')) {
      setIsVisible(false);
    }
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center">
        {isVisible && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-lg h-4 bg-yellow-300 text-center text-4xl font-bold py-2">
            Sub-Screen Content
          </div>
        )}
      </div>
      {isVisible && <div className="fixed inset-0 bg-black opacity-25" onClick={handleOuterClick}></div>}
    </div>
  );
};

export default SubScreen;
