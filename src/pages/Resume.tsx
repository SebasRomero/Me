import { Link } from "react-router-dom";
import content from "../content/resume.json";
import Experience from "../components/Experience";
const Resume = () => {
  const information = content.information;
  const firstWorkExperience = content.work_experience[1];
  const secondWorkExperience = content.work_experience[0];

  return (
    <section>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="lg:w-[41%] md:w-[60%]">
          <article>
            <header className="flex justify-between">
              <div>
                <p>Email: {information.email}</p>
                <p>
                  Github:
                  <Link className="ml-1" to={information.github_url}>{information.github}</Link>
                </p>
                <p>
                  LinkedIn:
                  <Link className="ml-1" to={information.linkedin_url}>{information.linkedin}</Link>
                </p>
              </div>
              
              <div>
                <p className="text-xl">
                  {information.name} {information.last_name}
                </p>
                <p>Software Engineer</p>
              </div>
            </header>
            <br />
            <section className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <h2 className="pr-2 text-xl">Work experience</h2>
                  <hr className="bg-black h-0.5 lg:w-[28rem] md:w-[20rem] w-[5rem]" />
                  <hr className="bg-black h-0.5 w-[1.5rem]" />
                  <br />
                  <br />
                </div>
                <Experience
                  company={secondWorkExperience.company}
                  date={secondWorkExperience.date}
                  position={secondWorkExperience.position}
                  tools={secondWorkExperience.tools}
                  bullets={secondWorkExperience.bullets}
                />
                <Experience
                  company={firstWorkExperience.company}
                  date={firstWorkExperience.date}
                  position={firstWorkExperience.position}
                  tools={firstWorkExperience.tools}
                  bullets={firstWorkExperience.bullets}
                />
              </div>
              <div className="text-end">
                <h2 className="text-xl mt-3">Tools I Enjoy</h2>
                <h3 className="">Languages</h3>
                <ul className="text-[12px] pb-2">
                  <li>Java</li>
                  <li>Typescript</li>
                  <li>Golang</li>
                </ul>
                <h3>Infrastructure</h3>
                <ul className="text-[12px] pb-2">
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Linux</li>
                </ul>
                <h3>Frontend</h3>
                <ul className="text-[12px] pb-2">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Css</li>
                </ul>
                <h3>Databases</h3>
                <ul className="text-[12px] pb-2">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
                <h3>Other</h3>
                <ul className="text-[12px] pb-2">
                  <li>GraphQL</li>
                  <li>Testing</li>
                  <li>Rest</li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resume;
