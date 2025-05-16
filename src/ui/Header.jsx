import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../assets/images/Sujon-logo.jpg";
import SocialLInks from "./SocialLInks";
const navigation = [
  { title: "Home", link: "home", value: "" },
  { title: "About", link: "about", value: "01", delay: 0.1 },
  { title: "Experience", link: "experience", value: "02", delay: 0.2 },
  { title: "Project", link: "project", value: "03", delay: 0.3 },
  { title: "Contact", link: "contact", value: "04", delay: 0.4 },
];
const Header = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };

  return (
    <div className="h-20 shadow-lg shadow-designColor/10 px-4 sticky top-0 bg-gradient-to-r from-primaryColor to-purple-900 hover:bg-gradient-to-l z-50  duration-300">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full">
        <img
          src={logo}
          alt="logo"
          className="h-20 w-20 rounded-full p-2 opacity-75 hover:opacity-100 duration-200 cursor-pointer"
        />
        <div className="hidden md:inline-flex items-center gap-5 ">
          <div className="flex text-base text-[13px] gap-5">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                to={item?.link}
                smooth={true}
                duration={700}
                offset={-80}
                className="font-medium hover:text-designColor cursor-pointer duration-300"
              >
                <motion.button
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: item?.delay }}
                >
                  <span className="text-designColor mt-1">
                    {item?.value}
                    {item?.value && "."}
                  </span>
                  <span className="uppercase tracking-wide">{item?.title}</span>
                </motion.button>
              </Link>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href="Sujon-cv.pdf"
            target="blank"
            className="px-4 py-2 text-designColor text-[13px] tranking-wider uppercase border border-designColor hover:bg-hoverColor duration-200"
          >
            Resume
          </motion.a>
        </div>
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden"
        >
          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
          <span className="w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300" />
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black/80 flex flex-col items-end z-50"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-scroll bg-textBg flex flex-col items-center py-10 relative scrollBarHide"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor cursor-pointer hover:text-red-500 absolute top-4 right-4 duration-200"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7 ">
                  {navigation?.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="font-medium text-darkColor hover:text-designColor cursor-pointer duration-300"
                    >
                      <motion.li
                        onClick={() => setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        {" "}
                        <span className="text-designColor">
                          {item?.value}
                          {item?.value && "."}{" "}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="Sujon(lp.cv).pdf"
                  target="blank"
                  className="px-4 py-2 text-designColor text-[13px] tranking-wider uppercase border border-designColor hover:bg-hoverColor duration-200"
                >
                  Resume
                </motion.a>
                <SocialLInks className="flex-row gap-4" />
                <p className="text-designColor text-sm">
                  All writes by MD Sujon Islam
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
