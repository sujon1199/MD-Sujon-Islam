import { motion } from "framer-motion";
import React from "react";

import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
const SocialAccounts = [
  {
    title: "github",
    link: "https://github.com/i-am-sujon-islam",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "youtube",
    link: "https://youtube.com",
    icon: <SlSocialYoutube />,
    delay: 0.85,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/sujon1199/",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "Facebook",
    link: "https://web.facebook.com/?_rdc=1&_rdr",
    icon: <SlSocialFacebook />,
    delay: 0.95,
  },
  {
    title: "Instagram",
    link: "https://www.linkedin.com/feed/",
    icon: <SlSocialInstagram />,
    delay: 1,
  },
];

const SocialLInks = ({ className }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-4", className)}>
      {SocialAccounts.map((item) => {
        return (
          <motion.a
            key={item?.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: item?.delay, ease: "easeIn" }}
            href={item?.link}
            target="blank"
          >
            <span
              className="w-10 h-10 text-xl bg-textBg border-[1px] border-zinc-500
             hover:border-designColor text-lightText hover:text-designColor duration-200
              inline-flex items-center
            justify-center rounded-full"
            >
              {item?.icon}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLInks;
