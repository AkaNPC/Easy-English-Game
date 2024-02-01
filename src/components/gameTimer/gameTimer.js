import React from "react";
import ErrorMessage from "../errorMessage/errorMessage";
import './gameTimer.css';

let interval;

export default class GameTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      error: false
    }
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  componentDidUpdate(prevProps) {
    const { isTimeRunning, correctCount, finalTime } = this.props;
    if (prevProps.isTimeRunning !== isTimeRunning) {
      if (correctCount !== 3) {
        interval = setInterval(() => {
          this.setState({
            time: this.state.time + 10
          })
        }, 10);
      } else {
        clearInterval(interval);
        this.props.getFinalTime(this.state.time);
        
      }
    };
    if (prevProps.finalTime !== finalTime) {
      this.setState({
        time: 0
      });
      this.props.updatePlayerHighScore();
    }
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />
    }
    const minutes = ("0" + Math.floor((this.state.time / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((this.state.time / 1000) % 60)).slice(-2);
    const milliseconds = ("0" + ((this.state.time / 10) % 100)).slice(-2);

    return (
      <h3>
        <div className="stopwatch">
          <div className="numbers">
            <span>{minutes}:</span>
            <span>{seconds}:</span>
            <span>{milliseconds}</span>
          </div>
        </div>
      </h3>
    );
  }

};

