// src/components/About.jsx
function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        About Me
      </h2>
      <img
        src="https://images.pexels.com/photos/3776438/pexels-photo-3776438.jpeg"
        alt="Profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        Hi, I'm Steve Oduor. I am a passionate developer learning React basics
        and building modern web applications. I love solving problems and
        turning ideas into functional, clean code.
      </p>
    </section>
  );
}

export default About;
