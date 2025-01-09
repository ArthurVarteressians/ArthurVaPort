import { motion } from "framer-motion";
import { useAtom } from "jotai";
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
        className={`bg-[#2795ff] text-white py-4 px-8 
        rounded-lg hover-[#0685ff] font-bold text-lg mt-16`}
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

const ContactSection = () => {
  return (
    <Section>
      <ContactForm />
    </Section>
  );
};
