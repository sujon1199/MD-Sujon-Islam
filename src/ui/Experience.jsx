import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workReactBD, setWorkReactBD] = useState(true);
  const [workGoggle, setWorkGoggle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactBD = () => {
    setWorkReactBD(true);
    setWorkGoggle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleGoogle = () => {
    setWorkReactBD(false);
    setWorkGoggle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleApple = () => {
    setWorkReactBD(false);
    setWorkGoggle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkReactBD(false);
    setWorkGoggle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkReactBD(false);
    setWorkGoggle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 gap-16"
    >
      <SectionTitle title="Where I want to work" titleNo="02." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col gap-3 cursor-pointer">
          <li
            onClick={handleReactBD}
            className={`${
              workReactBD
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkColor"
            }`}
          >
            ReactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoggle
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkColor"
            }`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkColor"
            }`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkColor"
            }`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkColor"
            }`}
          >
            Amazon
          </li>
        </ul>

        {workReactBD && (
          <WorkCard
            jobTitle="Enginner"
            jobTag="@ReactBD"
            data="jan 2020 - present"
            datailsOne="Write modern, performant, 
            maintainable code for a disverse array of client and internal projects"
            datailsTwo="Work with a variety of different languages, platforms, frameworks,
            content management systems such as javascript, TypeSecript , Gatsby, React, Carft, Wordpress, Prismic, and Netlify"
            datailsThree="Communicate with multi-disciplinary teams of engineers,designers,
            prokucers, and clients on a daily basis"
          />
        )}
        {workGoggle && (
          <WorkCard
            jobTitle="Web Developer"
            jobTag="@Google"
            data="jan 2020 - present"
            datailsOne="Write modern, performant, 
            maintainable code for a disverse array of client and internal projects"
            datailsTwo="Work with a variety of different languages, platforms, frameworks,
            content management systems such as javascript, TypeSecript , Gatsby, React, Carft, Wordpress, Prismic, and Netlify"
            datailsThree="Communicate with multi-disciplinary teams of engineers,designers,
            prokucers, and clients on a daily basis"
          />
        )}
        {workApple && (
          <WorkCard
            jobTitle="MERN Stacker"
            jobTag="@Apple"
            data="jan 2021 - present"
            datailsOne="Write modern, performant, 
            maintainable code for a disverse array of client and internal projects"
            datailsTwo="Work with a variety of different languages, platforms, frameworks,
            content management systems such as javascript, TypeSecript , Gatsby, React, Carft, Wordpress, Prismic, and Netlify"
            datailsThree="Communicate with multi-disciplinary teams of engineers,designers,
            prokucers, and clients on a daily basis"
          />
        )}
        {workSplash && (
          <WorkCard
            jobTitle="Web Desiger"
            jobTag="@Splash"
            data="jan 2022 - present"
            datailsOne="Write modern, performant, 
            maintainable code for a disverse array of client and internal projects"
            datailsTwo="Work with a variety of different languages, platforms, frameworks,
            content management systems such as javascript, TypeSecript , Gatsby, React, Carft, Wordpress, Prismic, and Netlify"
            datailsThree="Communicate with multi-disciplinary teams of engineers,designers,
            prokucers, and clients on a daily basis"
          />
        )}
        {workAmazon && (
          <WorkCard
            jobTitle="MERN Stacker"
            jobTag="@Amazon"
            data="jan 2023 - present"
            datailsOne="Write modern, performant, 
            maintainable code for a disverse array of client and internal projects"
            datailsTwo="Work with a variety of different languages, platforms, frameworks,
            content management systems such as javascript, TypeSecript , Gatsby, React, Carft, Wordpress, Prismic, and Netlify"
            datailsThree="Communicate with multi-disciplinary teams of engineers,designers,
            prokucers, and clients on a daily basis"
          />
        )}
      </div>
    </Container>
  );
};

export default Experience;
