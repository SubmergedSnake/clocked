import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

export const Time = forwardRef((props, ref) =>{

    const [time, setTime] = useState(props.time);
    const [isRunning, setIsRunning] = useState(props.isRunning);
  
    useImperativeHandle(ref, () => ({
      toggle(){
      setIsRunning(!isRunning);
    },
    getTime(){
      return time;
    }
  
    }));


    useEffect(() => {
      console.log('Time Component state updated');
      let interval = null;
      if (isRunning) {
        interval = setInterval(() => {
          setTime(seconds => seconds + 1);
        }, 1000);
      } else if (!isRunning && time !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isRunning, time]);


    return (
        <div className="time" style={{textAlign:"center", fontSize:"2em"}}>{time}</div>
    )
});