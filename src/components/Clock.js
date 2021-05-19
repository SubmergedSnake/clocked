import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
const prettyMilliseconds = require('pretty-ms');

export const Clock = forwardRef((props, ref) => {

  const [seconds, setTime] = useState(props.seconds);
  const [isRunning, setIsRunning] = useState(props.isRunning);

  useImperativeHandle(ref, () => ({
    toggle() {
      setIsRunning(!isRunning);
    },
    getTime() {
      return seconds;
    }

  }));


  useEffect(() => {
    console.log('Time Component state updated');
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(seconds => seconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);


  return (
    <div className="time" style={{ textAlign: "center", fontSize: "2em" }}>{prettyMilliseconds(seconds * 1000)}</div>
  )
});