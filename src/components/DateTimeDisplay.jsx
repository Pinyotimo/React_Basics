{/*Create a component that displays today's date and time. */}

import React, { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0", borderRadius: "5px", border: "50%",  }}>
      <h2> Date and Time Today</h2>
      <p style={{ fontSize: "18px", margin: "5px 0", color: "black" }}>
        {currentDateTime.toLocaleDateString()}
      </p>
      <p style={{ fontSize: "24px", fontWeight: "bold", margin: "5px 0", color: "gold" }}>
        {currentDateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default DateTimeDisplay;
