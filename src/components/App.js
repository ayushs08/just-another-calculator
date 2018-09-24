import React from 'react';

import './app.css';
import logo from './logo.svg';

class App extends React.Component {

  state = {
    display: ""
  }

  render() {

    const numbers = [1,2,3,4,5,6,7,8,9,".",0]

    const ops = ["+", "-", "/", "*"]

    const type = (event) => {
      this.setState({display: this.state.display + event.target.innerHTML})
    }

    const backspace = () => {
      this.setState({display: this.state.display.slice(0, this.state.display.length-1)})
    }

    const clear = () => {
      this.setState({display: ""})
    }

    const result = () => {
      alert(eval(this.state.display).toLocaleString())
    }

    return (
      <div className="calculator">
        <div className="display">
          {this.state.display}
        </div>
        <div className="controls">
          <div className="controls__num">
            <a href="https://github.com/ayushs08/just-another-calculator.git" target="_blank" rel="noopener noreferrer" className="controls__num__item not-btn">
              <img src={logo} alt="just another calculator logo" width={60}/>
            </a>
            <div className="controls__num__item" onClick={clear}><strong>C</strong></div>
            <div className="controls__num__item" onClick={backspace}>
              <i className="fas fa-backspace"></i>
            </div>
            {
              numbers.map(num => (
                <div className="controls__num__item" key={num} onClick={event => type(event)}>{num}</div>
              ))
            }
          </div>
          <div className="controls__op">
            {
              ops.map(op => (
                <div className="controls__op__item" key={op} onClick={(event) => type(event)}>{op}</div>
              ))
            }
            <div className="controls__op__item" onClick={result}>=</div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;