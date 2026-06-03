

import React from "react";

function UserCard({ username, email, phone }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        maxWidth: "300px",
        margin: "20px auto",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#007bff" }}>{username}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default UserCard;
