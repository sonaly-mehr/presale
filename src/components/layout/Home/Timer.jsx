import React from 'react';
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    const {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });
    let str = minutes
let result = str.split(" ");

    console.log("result", result)
  
    return (
      <div style={{ textAlign: "center" }}>
        <div className='text-white text-xl' style={{ fontSize: "16px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>
        </div>
      </div>
    );
  }
  
const Timer = ({duration}) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + duration); // 10 minutes timer
    return (
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
    );
};

export default Timer;