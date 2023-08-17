import React, { useState, useEffect } from 'react';
import './Slider.css';
//import img1 from './img/1.jpg';

const Slider = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      setCounter((prevCounter) => (prevCounter % 4) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="slider">
      <div className="slides">
        {/* radio buttons start */}
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        {/* radio buttons end */}
        {/* slide images start */}
        <div className="slide first">
          <img src="https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg"alt="" />
        </div>
        <div className="slide">
          <img src="https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg" alt="" />
        </div>
        {/* slide images end */}
        {/* automatic navigation start */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
        {/* automatic navigation end */}
      </div>
      {/* manual navigation start */}
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
      {/* manual navigation end */}
    </div>
    /* image slider end */
  );
};

export default Slider;
