import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Form from "./components/Form";

const App2 = React.lazy(() => import("./App2"));

function MainApp() {
  const [showApp2, setShowApp2] = useState(false);

  useEffect(() => {
    let timer;

    // Function to render App2 after 3 seconds if not already rendered
    timer = setTimeout(() => {
      console.log("3 seconds passed. Rendering App2...");
      setShowApp2(true);
    }, 3000);

    // Create IntersectionObserver to detect when end-marker is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !showApp2) {
        console.log("End marker is visible. Rendering App2...");
        setShowApp2(true); // Render App2 when scrolled near end
        clearTimeout(timer);
      }
    });

    const target = document.querySelector("#end-marker");
    if (target) observer.observe(target);

    // Cleanup function to disconnect observer and clear timeout
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [showApp2]);

  return (
    <React.StrictMode>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <App />
        <div style={{ height: "1px " }}>
          {/* Dummy content to force scroll */}
          <div className="text-gray-900">Arthur Varteressians</div>
        </div>
        <div id="end-marker" style={{ height: "1px" }}></div>
        {/* Intersection target */}
        <React.Suspense fallback={<div>Loading App2...</div>}>
          {showApp2 && <App2 />}
        </React.Suspense>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainApp />);
