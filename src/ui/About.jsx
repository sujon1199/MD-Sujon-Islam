import { FaCode } from "react-icons/fa";
import Sujon from "Sujon-w.jpg";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
const About = () => {
  const textArray = [
    { title: "JavaScript (ES6+)", link: "https://www.javascript.com/" },
    { title: "Next js", link: "https://nextjs.org/" },
    { title: "React js", link: "https://reactbd.com/" },
    { title: "Node js", link: "https://nodejs.org/en" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "Express js", link: "https://expressjs.com/" },
    { title: "MongoDB", link: "https://www.mongodb.com/" },
    { title: "TailwindCSS", link: "https://tailwindcss.com/" },
  ];
  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01." title="About me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-3/5 text-darkColor font-medium flex flex-col gap-4">
          <p>
            Hello! My name is MD Sujon Islam and I enjoy creation things that
            live on the internet. My interest in web development started back in
            2020 when I decided to try editioin custom Tumblr themes - turns out
            hacking together a custom reblog button taugh me a lot about HTML &
            CSS!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="text-designColor">
              Tenetur unde, modi necessitatibus
            </span>{" "}
            iste cumque doloribus sequi perspiciatis suscipit fugit labore sed
            aliquam voluptates dignissimos saepe magni provident dolor facere
            doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="text-designColor">
              Tenetur unde, modi necessitatibus
            </span>{" "}
            doloribus sequi perspiciatis suscipit fugit labore sed aliquam
            voluptates dignissimos saepe magni provident dolor facere
            doloremque.
          </p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group:"
              >
                <FaCode className="text-designColor/60 group-hover:text-designColor duration-200" />{" "}
                {item?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={Sujon}
                alt="ProfileImage"
                className="rounded-lg lg:w-full sm:mx-auto h-[420px] object-left-top"
              />
              <div className="hidden lg:inline-block absolute w-full h-[410px] bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-[410px] border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Container>
  );
};

export default About;
