import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
const WorkCard = ({
  jobTitle,
  jobTag,
  date,
  datailsOne,
  datailsTwo,
  datailsThree,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="hover:translate-y-2 duration-300"
    >
      <h3 className="text-xl font-medium flex gap-1">
        {jobTitle}{" "}
        <span className="text-designColor tracking-wide text-lg">{jobTag}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-darkColor">{date}</p>
      <ul className="mt-6 felx flex-col gap-3">
        <li className="flex gap-1">
          <span className="text-designColor">
            <TiArrowForward className="size={20}" />
          </span>
          {datailsOne}
        </li>
        <li className="flex gap-1">
          <span className="text-designColor">
            <TiArrowForward className="size={20}" />
          </span>
          {datailsTwo}
        </li>
        <li className="flex gap-1">
          <span className="text-designColor">
            <TiArrowForward className="size={20}" />
          </span>
          {datailsThree}
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkCard;
