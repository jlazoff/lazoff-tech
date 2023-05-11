import { useState } from 'react';

export default function Index() {
  const [shapeType, setShapeType] = useState('cube');
  const [isShapeTouched, setShapeTouched] = useState(false);
  const [isBackgroundTouched, setBackgroundTouched] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);

  const handleShapeClick = () => {
    setShapeTouched(true);
  };

  const handleBackgroundClick = () => {
    setBackgroundTouched(true);
    setCardVisible(true);
  };

  const handleCardClick = (e) => {
    // Prevent background click event from being triggered
    e.stopPropagation();
  };

  const handleCardClose = () => {
    setBackgroundTouched(false);
    setCardVisible(false);
  };

  const handleShapeTypeChange = () => {
    // Change the shape type when clicked
    const nextShapeType =
      shapeType === 'cube'
        ? 'tetrahedron'
        : shapeType === 'tetrahedron'
        ? 'octahedron'
        : shapeType === 'octahedron'
        ? 'dodecahedron'
        : shapeType === 'dodecahedron'
        ? 'icosahedron'
        : 'star-tetrahedron';
    setShapeType(nextShapeType);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="grid w-64 h-64 grid-cols-10 grid-rows-10">
        {Array.from({ length: 100 }, (_, index) => (
          <div
            key={index}
            className={`bg-white ${
              index % 2 === 0 ? 'bg-opacity-25' : 'bg-opacity-50'
            }`}
          ></div>
        ))}
      </div>

      <div
        className={`w-64 h-64 bg-blue-500 rounded-lg transition duration-500 ${
          isShapeTouched ? 'shape-animation' : ''
        }`}
        onClick={handleShapeClick}
      >
        <div className={`shape ${shapeType}`}>
          <div className="face face-1"></div>
          <div className="face face-2"></div>
          <div className="face face-3"></div>
          <div className="face face-4"></div>
          <div className="face face-5"></div>
          <div className="face face-6"></div>
        </div>
      </div>

      {isCardVisible && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="p-4 bg-white rounded-lg shadow-md" onClick={handleCardClick}>
            <h1 className="text-2xl font-bold">Joshua Lazoff</h1>
            <p>Email: jlazoff@gmail.com</p>
            <p>
              Websites:{' '}
              <a href="https://joshualazoff.com" target="_blank" rel="noopener noreferrer">
                joshualazoff.com
              </a>{' '}
              and{' '}
              <a href="https://lazoff.tech" target="_blank" rel="noopener noreferrer">
                lazoff.tech
              </a>
            </p>
            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded" onClick={handleCardClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
