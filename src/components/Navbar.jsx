

function Navbar() {
    return (
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            padding: "15px",
            backgroundColor: "#d81fcc",
            fontFamily:"ui-sans-serif",
            fontSize: "40px",
            

          }}
        >
            <a href="#" style={{ color: "black"}}>Home</a>
            <a href="#" style={{ color: "black"}}>About</a>
            <a href="#" style={{ color: "black"}}>Contact</a>
        </nav>

    );

}

export default Navbar;
