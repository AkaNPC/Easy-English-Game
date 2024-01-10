import React, { useState, useEffect } from "react";
import './gameTimer.css';

export default function GameTimer(props) {
  const { isTimeRunning, correctCount } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isTimeRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isTimeRunning && correctCount === 15) {
      setTime(0)
    } else if (!isTimeRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimeRunning]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};