import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import ContactForm from "./Form";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-7xl mx-auto
        flex flex-col items-start justify-center
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section>
      <h1 className="text-4xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white text-tahiti">Arthur Varteressians</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Welcome to my portfolio! A passionate developer,
        <br />
        ready to showcase my work and
        <br />
        take on exciting new projects.
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-gray-600 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Front-End Development",
    technologies: ["React.js", "Tailwind"],
  },
  {
    title: "Back-End Architecture & API",
    technologies: ["Node.js", "Express.js"],
  },
  {
    title: "DevOps & Deployment",
    technologies: ["AWS/CF", "Docker/Nginx"],
  },
  {
    title: "Database Design & Management",
    technologies: ["MySQL", "Sequelize"],
  },
];

const languages = [
  {
    title: "🇦🇲 Armenian",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇩🇪 German",
    level: 30,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"} className="max-w-[100vw] mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-white text-center">Skills</h2>

        {/* Grid of Skills */}
        <div className="grid grid-cols-2 gap-x-60 gap-y-20 mt-8 justify-between items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg w-full"
              style={{ opacity: 0.85 }} // Adjust the transparency
            >
              <motion.h3
                className="text-2xl font-bold text-gray-100"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 1 + index * 0.2 },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <ul className="list-disc ml-4 mt-2 text-gray-200">
                {skill.technologies.map((tech, i) => (
                  <li key={i} className="text-lg">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Languages Section */}
      <motion.div whileInView={"visible"} className="max-w-[80vw] mx-auto">
        <h2 className="text-5xl font-bold mt-10 text-white text-center">
          Languages
        </h2>
        <div className="flex flex-col mt-8 space-y-6 items-center">
          {languages.map((lng, index) => (
            <div
              key={index}
              className="flex  flex-col items-center justify-between w-full "
            >
              <motion.h3
                className="text-xl font-bold text-gray-100 mr-4"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 + index * 0.2 },
                  },
                }}
              >
                {lng.title}
              </motion.h3>
              <div className="w-full h-2 bg-gray-200 rounded-full ml-4">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${lng.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: { duration: 1, delay: 2 + index * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-10 items-center mt-80 justify-center">
        <button
          className="hover:text-indigo-600 text-xl transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-6xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 text-xl transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <ContactForm />
    </Section>
  );
};
