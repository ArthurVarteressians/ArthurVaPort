import React, { useState, useEffect, lazy, Suspense } from "react";
import App from "./App"; // First 3D model
import { UI } from "./components/UI"; // Book controls for the book scene

// Lazy load App2 for the book model
const App2 = lazy(() => import("./App2"));

const MainApp = () => {
  const [showSecondModel, setShowSecondModel] = useState(false); // Controls book scene loading
  const [scrollReached, setScrollReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight * 0.9 && !scrollReached) {
        setScrollReached(true); // Trigger loading only after scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollReached]);

  return (
    <div style={{ height: "200vh", width: "100vw", overflow: "hidden" }}>
      {/* First 3D model */}
      <div style={{ height: "100vh" }}>
        <App />
      </div>

      {/* Second 3D model loading condition */}
      <div style={{ height: "100vh" }}>
        {scrollReached ? (
          <>
            <UI /> {/* Show UI only when App2 is visible */}
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    background: "white",
                  }}
                >
                  <p style={{ fontSize: "20px", color: "#444" }}>
                    Loading the interactive book scene...
                  </p>
                </div>
              }
            >
              <App2 />
            </Suspense>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              background: "white",
            }}
          >
            <p style={{ fontSize: "20px", color: "#666" }}>
              Scroll down to view the interactive book 📖
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainApp;
