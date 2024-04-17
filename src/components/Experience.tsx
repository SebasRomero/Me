import { experience } from "../types/types";

const Experience = (props: experience) => {
  return (
    <div className="block w-[80%] pb-4">
      <div className="block">
        <h2 className="text-2xl">
          {props.position} - {props.company}
        </h2>
        <span className="text-sm">{props.date}</span>
        <ul>
          <li>• {props.work_experience.bullet1}</li>
          <li>• {props.work_experience.bullet2}</li>
          <li>• {props.work_experience.bullet3}</li>
        </ul>
        <span className="text-md">Used tools: </span>
        {
          props.tools.map((element, index) => (
          
            (index != props.tools.length-1) ? <span className="text-sm">{element}, </span>:<span className="text-sm">{element}.</span>
            )
          )
        }

      </div>
    </div>
  );
};

export default Experience;
