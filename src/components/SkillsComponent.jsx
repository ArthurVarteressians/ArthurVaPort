import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaJsSquare,
  FaVuejs,
  FaMobileAlt,
  FaDocker,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiNextdotjs,
  SiKubernetes,
  SiCloudflare,
  SiNginx,
} from "react-icons/si";
import CouchDBIcon from "../assets/CouchDBIcon.svg";
import SequelizeIcon from "../assets/SequelizeIcon.svg";

import AzureIcon from "../assets/AzureIcon.svg";

function SkillsComponent() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "JavaScript",
          icon: <FaJsSquare className="text-yellow-400" />,
        },
        {
          name: "Typescript",
          icon: <SiTypescript className="text-blue-400" />,
        },
        { name: "Vue", icon: <FaVuejs className="text-green-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-blue-400" />,
        },

        {
          name: "React Native",
          icon: <FaMobileAlt className="text-purple-500" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
        { name: "Nginx", icon: <SiNginx className="text-green-700" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
        { name: "Socket.IO", icon: <FaServer className="text-blue-500" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        {
          name: "CouchDB",
          icon: <img src={CouchDBIcon} alt="CouchDB" className="w-6 h-6" />,
        },
        {
          name: "Sequelize",
          icon: <img src={SequelizeIcon} alt="Sequelize" className="w-6 h-6" />,
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-500" />,
        },
        {
          name: "Cloudflare",
          icon: <SiCloudflare className="text-yellow-500" />,
        },
        {
          name: "Azure",
          icon: <img src={AzureIcon} alt="Azure" className="w-6 h-6" />,
        },
      ],
    },
  ];

  return (
    <div className="p-2 max-w-full">
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
        🔥 My Tech Stack
      </h2>
      {/* Horizontal scroll for mobile */}
      <div className="flex gap-5 lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory pe-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 p-2 rounded-lg shadow-lg flex-shrink-0 w-[70%] flex flex-col items-center border border-gray-700"
          >
            <h6 className="text-[14px] font-extralight p-2 mb-2 text-white text-center">
              {category.title}
            </h6>
            <div className="flex flex-col gap-2 w-[70%] h-[80%]">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative flex justify-center items-center bg-gray-200 hover:bg-gray-700 transition-all duration-200 p-2 rounded-lg"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  {/* Tech name on hover */}
                  <span className="absolute opacity-0 group-hover:opacity-100 text-white font-extralight text-base bg-black px-2 py-1 rounded-md transition-opacity duration-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsComponent;
