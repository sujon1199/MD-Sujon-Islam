import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Container from "./Container";
const Banner = () => {
  const stringArray = [
    "I build things for the web",
    "A passionate web developer.",
    "I love to learn new ideas.",
  ];
  return (
    <Container
      id="home"
      className="bg-banner py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4 text-center"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg font-semibold tracking-wide text-designColor "
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col"
      >
        MD Sujon Islam
        <span className="text-darkColor font-semibold mt-2 lg:mt-4">
          <Typewriter
            options={{
              strings: stringArray,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.h1>
      <p className="lg:w-[60%] mx-auto">
        I am a web developer with 2+ years of experience in React. I have a
        strong foundation in front-end & back-end development and I am skilled
        creatin user-friendly and responsive web applicitions using React and
        its ecosystem
      </p>
      <a href="#">
        <span className=" text-designColor relative overflow-x-hidden inline-flex cursor-pointer group">
          Learn more...
          <span className=" absolute w-[100%] h-[1px] bg-designColor left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500" />
        </span>
      </a>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 mx-auto font-semibold text-sm border border-designColor rounded-md text-designColor tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center
       "
        href="#project"
      >
        Check out my Project
      </motion.a>
    </Container>
  );
};

export default Banner;
