import React from 'react';
import './App.css';

class App extends React.Component {

  timerId;

  state = {
    name: '',
    count: 0,
    initialCount: 0,
  }


  startTimer = () => {

    this.setState({
      count: this.state.count - 1,
    })

    if (this.state.count >= 0) {
      this.timerId = setTimeout(() => {
        this.startTimer();
      }, 1000);
    } else {
      clearTimeout(this.timerId);
    }
  }

  stopTimer = () => {
    clearTimeout(this.timerId);
  }

  restartTimer = () => {
    clearTimeout(this.timerId);
    this.setState({
      count: this.state.initialCount,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.timername.value,
      count: e.target.timercount.value,
      initialCount: e.target.timercount.value,
    })

    e.target.timername.value = '';
    e.target.timercount.value = '';
  }
  render() {

    return (
      <div>ROOT
        <form onSubmit={this.handleSubmit}>
          <label>
            Timer name:
          <input type="text" name="timername" />
          </label>
          <label>
            Initial count:
          <input type="text" name="timercount" />
          </label>
          <button type="submit">Submit</button>
        </form>

        {
          this.state.count > 0 &&
          <div>
            <p>{this.state.name}</p>
            <button onClick={this.startTimer}>Start</button>
            <button onClick={this.stopTimer}>Stop</button>
            <button onClick={this.restartTimer}>Restart</button>
            <p>{this.state.count}</p>
          </div>
        }

        {
          !this.state.count && this.state.initialCount > 0 && <div>Your time is over!!!!!!</div>
        }
        
      </div>
    )
  }
}

export default App;
