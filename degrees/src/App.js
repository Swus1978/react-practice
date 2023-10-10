import React, { useRef, useState } from 'react';

const Animal_Images = {
  img1: 'https://via.placeholder.com/111x111',
  img2: 'https://via.placeholder.com/222x222',
  img3: 'https://via.placeholder.com/333x333',
};

function App() {

  // Temperature calculator
  const degreeCRef = useRef(null);
  const [degreeF, setDegreeF] = useState(0);

  const total = () => {
    const degreeC = degreeCRef.current.value;
    setDegreeF((degreeC * 9) / 5 + 32);
  };

  // Calculator function

  const widthRef = useRef(null);
  const heightRef = useRef(null);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    const width = parseFloat(widthRef.current.value);
    const height = parseFloat(heightRef.current.value);
    setArea(width * height);
  };

  // Images width and height

  const [selectedImage, setSelectImage] = useState(null);

  const handleImageClick = (imKey) => {
    setSelectImage(Animal_Images[imKey]);
  };

  return (
    
    <div>
      {/* Temperature Calculator */}
      <div>
        <input type="text" ref={degreeCRef} placeholder="Enter degrees in Celsius" />
        <button onClick={total}>Convert</button>
        <div>
          <span>Degree in Fahrenheit:</span> {degreeF}
        </div>
      </div>
      <br />
      {/* Calculator */}
      <div>
        <input type="text" ref={widthRef} placeholder="Width" onChange={e=>setArea(e.target.value)}/>
        <input type="text" ref={heightRef} placeholder="Height" onChange={e=>setArea(e.target.value)} />
        <button onClick={calculateArea}>Calculate Area</button>
        <div>
          <span>Total Area:</span> {area}
        </div>
      </div>
      <br />
      {/* Images */}
      <div>
        <button onClick={() => handleImageClick('img1')}>Image 1</button>
        <button onClick={() => handleImageClick('img2')}>Image 2</button>
        <button onClick={() => handleImageClick('img3')}>Image 3</button>

        {selectedImage && <img src={selectedImage} alt="Selected Animal" />}
      </div>
    </div>
  );
}

export default App;

