import { Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { useEffect, useState } from "react";

export const Experience2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen size on component mount
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint (768px and below)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on unmount
    };
  }, []);

  return (
    <>
      <Float
        rotation-x={-Math.PI / 6}
        floatIntensity={1}
        speed={0.8}
        rotationIntensity={1}
        scale={isMobile ? 1.5 : 0.8} // Smaller size on mobile, normal size on larger screens
      >
        <Book />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} />{" "}
      {/* Disable zoom and pan */}
      <color attach="background" args={["#c7e6ff"]} />{" "}
      {/* Light color background */}
      <ambientLight intensity={0.1} />{" "}
      {/* Soft ambient light for overall lighting */}
      <directionalLight
        position={[2, 10, 5]} // Move light further for a softer effect
        intensity={0.4} // Slightly lower intensity to avoid overexposure
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} /> {/* Medium shadow */}
      </mesh>
    </>
  );
};

export default Experience2;
