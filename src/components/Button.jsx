

function Button({ text}) {
    return (
        <button
            style={{
                padding:"10px",
                color: "white",
                border: "none",
                cursor:"pointer",
                backgroundColor: "blue",
                
            }}
        >
          {text}
        </button>
       
    );
}

export default Button;