import React from "react";
import "./App.css";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ServiceCard title="Web Development" description="Building amazing websites!" />
      <ServiceCard title="Graphic Design" description="Creative and stunning designs!" />
    </div>
  );
}

export default App;
