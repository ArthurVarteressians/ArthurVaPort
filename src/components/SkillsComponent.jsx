import {
     FaReact,
     FaNodeJs,
     FaCss3Alt,
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
       <div className="p-4 max-w-full">
         <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
           🔥 My Tech Stack
         </h2>
         {/* Horizontal scroll for mobile */}
         <div className="flex gap-4 lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory p-4">
           {categories.map((category, index) => (
             <div
               key={index}
               className="bg-gray-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-[280px] lg:w-full flex flex-col items-center border border-gray-700"
             >
               <h3 className="text-lg font-semibold mb-4 text-white text-center">
                 {category.title}
               </h3>
               <div className="flex flex-col gap-2 w-full">
                 {category.skills.map((skill, i) => (
                   <div
                     key={i}
                     className="group relative flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-all duration-200 p-4 rounded-lg"
                   >
                     <div className="text-3xl">{skill.icon}</div>
                     {/* Tech name on hover */}
                     <span className="absolute opacity-0 group-hover:opacity-100 text-white font-semibold text-base bg-black px-4 py-1 rounded-md transition-opacity duration-200">
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
   