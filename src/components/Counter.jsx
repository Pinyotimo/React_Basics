{/*Create a counter component with:

Number display

Increment button*/}

import React, { useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", margin: "20px"}}>
            <h2>Counter</h2>
            <p style={{ fontSize: "24px", fontWeight: "bold"}}>{count}</p>
            <button 
            onClick={() => setCount(count + 1)}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Increment
                </button>
        </div>
    );
}

export default Counter;