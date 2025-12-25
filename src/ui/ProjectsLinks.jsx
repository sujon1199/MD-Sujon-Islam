import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectsLinks = ({ projectLink }) => {
  return (
    <div className="text-2xl flex justify-center items-center gap-4">
      <a
        href="https://github.com/i-am-sujon-islam"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-designColor duration-200"
      >
        <TbBrandGithub />
      </a>
      <a
        href="https://youtube.com/"
        target="_blank"
        className="hover:text-designColor duration-200"
      >
        <AiOutlineYoutube />
      </a>
      <a
        href={projectLink}
        target="_blank"
        className="hover:text-designColor duration-200"
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectsLinks;
