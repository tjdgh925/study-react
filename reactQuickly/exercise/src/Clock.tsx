import React, { useState }from "react";

let timeNew: string = new Date().toLocaleString('en');
const Clock = () => {
  const [time, setTime] = useState<string>(timeNew);
  launchClock();
  function launchClock() {
    setInterval(() =>
    {
      timeNew = new Date().toLocaleString('en');
      setTime(timeNew);
      
    }, 1000)     
  }
  return (
    <div>
      {time}
    </div>
  )
}


export default Clock;