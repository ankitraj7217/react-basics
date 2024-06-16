import React, { useState, useRef } from 'react';

const Timer = () => {
  const [currTime, setCurrTime] = useState(0);
  const timer = useRef();

  const startTime = () => {
    setCurrTime((prevTime) => prevTime + 1);
    timer.current = setInterval(() => {
      setCurrTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(timer.current);
    setCurrTime(0);
  };

  const pauseTime = () => {
    clearInterval(timer.current);
  };

  return (
    <section>
      <time>{currTime}</time>
      <menu>
        <button className="btn btn-start" onClick={startTime}>
          Start
        </button>
        <button className="btn btn-stop" onClick={stopTime}>
          Stop
        </button>
        <button className="btn btn-pause" onClick={pauseTime}>
          Pause
        </button>
      </menu>
    </section>
  );
};

export default Timer;
