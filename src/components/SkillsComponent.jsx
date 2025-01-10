import {
     FaReact,
     FaNodeJs,
     FaCss3Alt,
     FaDatabase,
     FaAws,
     FaJsSquare,
     FaVuejs,
     FaMobileAlt,
     FaDocker,
   } from "react-icons/fa";
   import {
     SiTypescript,
     SiMysql,
     SiMongodb,
     SiFirebase,
     SiGraphql,
     SiKubernetes,
     SiCloudflare,
     SiNginx,
   } from "react-icons/si";
   import { MdWeb } from "react-icons/md";
   
   function SkillsComponent() {
     const categories = [
       {
         title: "Frontend",
         skills: [
           { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
           { name: "Typescript", icon: <SiTypescript className="text-blue-400" /> },
           { name: "Vue 3", icon: <FaVuejs className="text-green-500" /> },
           { name: "React", icon: <FaReact className="text-cyan-400" /> },
           { name: "React Native", icon: <FaMobileAlt className="text-purple-500" /> },
           { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
           { name: "WebGL (3D)", icon: <MdWeb className="text-pink-500" /> },
         ],
       },
       {
         title: "Backend",
         skills: [
           { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
           { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
           { name: "Nginx", icon: <SiNginx className="text-green-700" /> },
         ],
       },
       {
         title: "Database",
         skills: [
           { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
           { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
           { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
         ],
       },
       {
         title: "Cloud & DevOps",
         skills: [
           { name: "AWS", icon: <FaAws className="text-orange-500" /> },
           { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
           { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
           { name: "Cloudflare", icon: <SiCloudflare className="text-yellow-500" /> },
         ],
       },
     ];
   
     return (
<div className="p-6 max-w-full">
  <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">🔥 My Tech Stack</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {categories.map((category, index) => (
      <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4 text-white">{category.title}</h3>
        <div className="flex flex-col gap-3">
          {category.skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 transition-all duration-200 py-2 px-4 rounded-lg shadow-md"
            >
              <div className="text-3xl">{skill.icon}</div>
              <span className="text-sm md:text-base font-semibold">{skill.name}</span>
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
   