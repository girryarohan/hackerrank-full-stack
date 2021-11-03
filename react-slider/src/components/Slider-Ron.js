import React from "react";

function Slides({ slides, next, previous, restart, currentSlide }) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={currentSlide === 0}
          onClick={restart}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={currentSlide === 0}
          onClick={previous}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          disabled={currentSlide === slides.length}
          onClick={next}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">
          {slides[currentSlide] && slides[currentSlide].title}
        </h1>
        <p data-testid="text">
          {slides[currentSlide] && slides[currentSlide].text}
        </p>
      </div>
    </div>
  );
}

export default Slides;
import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides 
                 slides={slides} 
                 restart={() => setCount(0)} 
                 next={() => setCount(count + 1)}
                 previous={() => setCount(count - 1)}
                 currentSlide={count} />
            </div>
        </div>
    );
}

export default App;
