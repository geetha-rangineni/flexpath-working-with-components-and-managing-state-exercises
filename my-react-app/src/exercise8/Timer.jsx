import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{time}</p>
    </div>
  );
}

export default Timer;
