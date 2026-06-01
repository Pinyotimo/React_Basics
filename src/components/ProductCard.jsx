// Import the button component you created earlier
import Button from "./Button"; 

function ProductCard({ image, name, price }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#fafafa",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)" // Optional: minor depth boost
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />

      <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>{name}</h3>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#2c3e50"
        }}
      >
        KSh {price}
      </p>

      {/* Reusing your project's custom Button component */}
      <Button text="View Product" />
    </div>
  );
}

export default ProductCard;
