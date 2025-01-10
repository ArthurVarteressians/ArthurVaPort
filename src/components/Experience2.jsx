import { Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience2 = () => {
  return (
    <>
      <Float
        rotation-x={-Math.PI / 6}
        floatIntensity={1}
        speed={1.5}
        rotationIntensity={1}
        scale={0.8} // Adjusted scale for smaller size
      >
        <Book />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} /> {/* Disable zoom and pan */}

      {/* Set a solid background color */}
      <color attach="background" args={["#c7e6ff"]} /> {/* Light color (e.g., soft blue) */}

      <ambientLight intensity={0.3} /> {/* Soft ambient light for overall lighting */}
      
      <directionalLight
        position={[1, 5, 2]}
        intensity={0.6} // Reduced intensity for a softer directional light on pages
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
