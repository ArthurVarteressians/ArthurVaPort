/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";

export function Office(props) {
  const { section } = props;
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked2.webp");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");

  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0);
    animate(glassTextureOpacity, section === 0 ? 0.42 : 0);
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[0.45, 0.94, -1.3067]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh>
      <group name="Scene">
        <group
          name="CharacterSpot"
          position={[0.066, 0.243, -0.158]}
          rotation={[-Math.PI, 0.367, -Math.PI]}
        />
        <group
          name="Desk"
          position={[-0.074, 0, -1]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="Plane001_Plane002_BlackWood001"
            geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_1"
            geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_2"
            geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_3"
            geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood001_4"
            geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="SM_ShelfSM_Shelf1" position={[-0.868, 1.694, -1.35]}>
          <mesh
            name="SM_ShelfSM_Shelf1_1"
            geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="SM_ShelfSM_Shelf1_1_1"
            geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="LavaLamp" position={[-1.302, 2.071, -1.346]}>
          <mesh
            name="Node-Mesh001"
            geometry={nodes["Node-Mesh001"].geometry}
            material={textureMaterial}
          />
          <mesh
            name="Node-Mesh001_1"
            geometry={nodes["Node-Mesh001_1"].geometry}
            material={textureMaterial}
          />
          <mesh
            name="Node-Mesh001_2"
            geometry={nodes["Node-Mesh001_2"].geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="WawaRug"
          geometry={nodes.WawaRug.geometry}
          material={textureMaterial}
          position={[-0.281, 0.009, 0.765]}
          scale={0.7}
        />
        <group
          name="salameche"
          position={[-0.61, 2.044, -1.338]}
          rotation={[-Math.PI, 0.728, -Math.PI]}
        >
          <mesh
            name="mesh434900071"
            geometry={nodes.mesh434900071.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh434900071_1"
            geometry={nodes.mesh434900071_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh434900071_2"
            geometry={nodes.mesh434900071_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh434900071_3"
            geometry={nodes.mesh434900071_3.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh434900071_4"
            geometry={nodes.mesh434900071_4.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh434900071_5"
            geometry={nodes.mesh434900071_5.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="keyboard"
          position={[0.215, 0.981, -1]}
          rotation={[0, -0.224, 0]}
          scale={0.63}
        >
          <mesh
            name="mesh425587018"
            geometry={nodes.mesh425587018.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh425587018_1"
            geometry={nodes.mesh425587018_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh425587018_2"
            geometry={nodes.mesh425587018_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh425587018_3"
            geometry={nodes.mesh425587018_3.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="iMac"
          position={[0.454, 0.939, -1.303]}
          rotation={[Math.PI, -1.099, Math.PI]}
        >
          <mesh
            name="iMac_1"
            geometry={nodes.iMac_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="iMac_1_1"
            geometry={nodes.iMac_1_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="iMac_1_2"
            geometry={nodes.iMac_1_2.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="Comp_Mouse"
          geometry={nodes.Comp_Mouse.geometry}
          material={textureMaterial}
          position={[-0.008, 0, 0.34]}
        />
        <group
          name="Houseplant_7"
          position={[-1.439, -0.022, -1.026]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.8}
        >
          <mesh
            name="Houseplant_7_1"
            geometry={nodes.Houseplant_7_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Houseplant_7_2"
            geometry={nodes.Houseplant_7_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Houseplant_7_3"
            geometry={nodes.Houseplant_7_3.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="Chair"
          position={[0.089, 0, -0.25]}
          rotation={[0, -0.35, 0]}
        >
          <mesh
            name="Node-Mesh"
            geometry={nodes["Node-Mesh"].geometry}
            material={textureMaterial}
          />
          <mesh
            name="Node-Mesh_1"
            geometry={nodes["Node-Mesh_1"].geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="Screen"
          geometry={nodes.Screen.geometry}
          material={textureMaterial}
          position={[0.454, 0.939, -1.305]}
          rotation={[Math.PI, -1.099, Math.PI]}
        />
        <group name="Plane" scale={[0.7, 0.76, 0.7]}>
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={textureGlassMaterial}
          />
          <mesh
            name="Plane001_2"
            geometry={nodes.Plane001_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_3"
            geometry={nodes.Plane001_3.geometry}
            material={textureMaterial}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
