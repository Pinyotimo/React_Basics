{/*Create a Footer component displaying copyright information. */}


function Footer() {
    return (
        <footer
          style={{
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#f6f2f2",
            marginTop: "40px",
            fontSize: "16px",
            color: "#555",
          }}
        >
            {new Date().getFullYear()} Stephen Oduor. All rights reserved.
        </footer>

    );
}

export default Footer;