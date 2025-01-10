import React, { useEffect, useState } from "react";
import App from "./App"; // First 3D Scene (Office)
import App2 from "./App2"; // Second 3D Scene (Book)
import "./index.css"; // General styling

function MainComponent() {
  const [page, setPage] = useState(0); // 0 = First scene, 1 = Second scene

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Switch to second 3D model if scrolled past 100vh
    if (scrollY >= viewportHeight * 0.9) {
      setPage(1); // Switch to App2 (Second 3D model)
    } else {
      setPage(0); // Stay on App (First 3D model)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ width: "100vw", height: "200vh", overflowX: "hidden" }}>
      <div className="scene-container" style={{ height: "100vh" }}>
        {page === 0 ? <App /> : <App2 />}
      </div>
    </div>
  );
}

export default MainComponent;
