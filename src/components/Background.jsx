import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#000",
  });
  const data = useScroll(); // Should only be called inside <ScrollControls>

  const tl = useRef();

  useFrame(() => {
    if (data?.scroll) {  // Avoid null errors
      tl.current.progress(data.scroll.current);
      material.current.color = new THREE.Color(color.current.color);
    }
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, { color: "#000", duration: 1 });
    tl.current.to(color.current, { color: "#000", duration: 1 });
    tl.current.to(color.current, { color: "#000", duration: 1 });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
