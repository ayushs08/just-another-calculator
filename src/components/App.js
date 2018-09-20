import React from 'react';

import './app.css';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    const numbers = [1,2,3,4,5,6,7,8,9]
    return (
      <div className="calculator">
        <div className="display">
          2069
        </div>
        <div className="controls">
          <div className="controls__num">
          <div className="controls__num__item">
            <img src={logo} alt="just another calculator logo" width={60}/>
          </div>
          <div className="controls__num__item">C</div>
          <div className="controls__num__item">
            <i className="fal fa-code"></i>
          </div>
            {
              numbers.map(num => (
                <div className="controls__num__item" key={num}>{num}</div>
              ))
            }
            <div className="controls__num__item">.</div>
            <div className="controls__num__item">0</div>
            <div className="controls__num__item">
              <i class="fal fa-arrow-circle-left"></i>
            </div>
          </div>
          <div className="controls__op">
            <div className="controls__op__item"></div>
            <div className="controls__op__item"></div>
            <div className="controls__op__item"></div>
            <div className="controls__op__item"></div>
            <div className="controls__op__item"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;