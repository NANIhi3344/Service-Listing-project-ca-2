import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "250px",
  },
};

export default ServiceCard;

