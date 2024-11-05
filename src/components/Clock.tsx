import React, { useEffect, useState } from 'react'
import '../styles/Clock.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <div>{time.toLocaleTimeString()}</div>
      <div>{time.toLocaleDateString()}</div>
    </div>
  );
}
