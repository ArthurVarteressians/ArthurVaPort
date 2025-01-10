import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;

  // Adjust the responsive ratio based on the viewport and apply a smaller scale factor
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(
    isMobile ? 0.4 : 0.6, // Apply a smaller base scale for mobile and web
    Math.min(0.8 * responsiveRatio, 0.9)
  );

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  // Update the character animation based on the current section
  useEffect(() => {
    setCharacterAnimation(section === 0 ? "Typing" : "");
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    }
  });

  // Refs for the two shapes
  const rotateOrangeMeshRef = useRef();
  const rotateGreenMeshRef = useRef();

  // Speed factors for the mesh rotation
  const orangeRotationSpeedFactor = 0.5;
  const greenRotationSpeedFactor = 0.8;

  // Animate the rotation using useFrame
  useFrame(() => {
    if (rotateOrangeMeshRef.current) {
      rotateOrangeMeshRef.current.rotation.x +=
        0.01 * orangeRotationSpeedFactor;
      rotateOrangeMeshRef.current.rotation.y +=
        0.02 * orangeRotationSpeedFactor;
    }

    if (rotateGreenMeshRef.current) {
      rotateGreenMeshRef.current.rotation.x -= 0.01 * greenRotationSpeedFactor;
      rotateGreenMeshRef.current.rotation.y += 0.02 * greenRotationSpeedFactor;
    }
  });

  return (
    <>
      <motion.group
        ref={characterGroup}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.18, -0.19]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>

      <motion.group
        position={[
          0,
          isMobile ? -viewport.height : -1.5 * officeScaleRatio,
          -10,
        ]}
        animate={{
          z: section === 1 ? 0 : -10,
          y:
            section === 1
              ? -viewport.height
              : isMobile
              ? -viewport.height
              : -1.5 * officeScaleRatio,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>

        <Float>
          <mesh
            ref={rotateGreenMeshRef}
            scale={[2, 2, 2]}
            position={[-2, 2, -3]}
            speed={5}
          >
            <octahedronGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={"#313131"}
              wireframe
              transparent
              opacity={1}
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};
