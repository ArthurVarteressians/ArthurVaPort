import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Stellargrowthhq",
    url: "https://stellargrowthhq.com/",
    image: "projects/image3.webp",
    description: "Empowering businesses to scale through strategic social media marketing and lead generation solutions.",
    stack: ["WordPress", "Elementor Pro", "Calendly API", "GoDaddy."],
  },
  {
    title: "Bonton",
    url: "http://bonton.ai/",
    image: "projects/image2.webp",
    description: "AI and software development company specialized in financial markets.",
    stack: ["WordPress", "Elementor Pro", "GoDaddy."],
  },
  {
    title: "ArtClinic",
    url: "http://clinic-arthur.com/",
    image: "projects/image1.webp",
    description: "Dedicated to providing high-quality healthcare services to our patients.",
    stack: ["React.js - Chart.js", "Node.js - Express", "MySQL", "JWT - Hashing - Regex", "AWS - S3- Ec2", "Cloudflare."],
  },
  {
    title: "GregmovingLLC",
    image: "projects/image5.webp",
    description: "Crafted user-friendly logistics platform to enhance transportation services and customer experience.",
    stack: ["WordPress", "Elementor Pro", "Teams API", "GoDaddy."],
  },
  {
    title: "FundexTeam",
    url: "https://t.me/fundexteambot",
    image: "projects/image4.webp",
    description: "Developed management system, including an admin panel and referral program, to mange clients and subscriptions.",
    stack: ["Telegram API", "Node.js", "MySQL", "AWS."],
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.6 : 0.2);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => project.url && window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[3.8, 4]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[3.5, 2.1, 5]}
        url={project.image}
        toneMapped={false}
        position-y={0.8}
      />
      <Text // Project title, centered
        maxWidth={3}
        anchorX="center"
        anchorY="top"
        fontSize={0.3}
        position={[0, -0.3, 0]} // Centered horizontally
      >
        {project.title.toUpperCase()}
      </Text>

      <Text // Project description
        maxWidth={3.5}
        anchorX="center"
        anchorY="top"
        fontSize={0.18}
        position={[0, -0.58, 0]} // Centered horizontally
      >
        {project.description}
      </Text>

      {project.stack && (
        <Text
          maxWidth={3.5}
          anchorX="center"
          anchorY="top"
          fontSize={0.15}
          position={[0, -1.35, 0]} // Adjust position to place the stack below the description
        >
          Tech Stack: {project.stack.join(', ')}
        </Text>
      )}
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 3.5, 0, -4]}
          animate={{
            x: 0 + (index - currentProject) * 4.8,
            y: currentProject === index ? 1 : -0.1,
            z: currentProject === index ? -1 : -5,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
