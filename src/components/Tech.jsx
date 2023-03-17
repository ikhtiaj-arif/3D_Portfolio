import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technlogy) => (
        <div className="w-28 h-28" key={technlogy.name}>
          <BallCanvas icon={technlogy.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
