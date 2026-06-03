import { useState } from "react";

{/* Create a component that conditionally displays:

“Logged In”

“Please Login” */}


function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div style={{
            textAlign: "center",
            margin: "20px",

        }}>
            <h2>Login Status</h2>
            <p style={{ 
                fontSize: "20px", 
                fontWeight: "bold",
                }}>
                    {isLoggedIn ? "Logged In" : "Please Login"}
                </p>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: isLoggedIn ? "#dc3545" : "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
        </div>
    );
}

export default LoginStatus;