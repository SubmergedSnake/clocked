import { useState, useEffect } from 'react';

export const Time = (props) => {

    const [seconds, setSeconds] = useState(props.time);
    const [isActive, setIsActive] = useState(props.isRunning);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);


    return (
        <span id="time" style={{ float: "right", paddingBottom: "0.3em" }} onClick={toggle}>{seconds}</span>
    )
}