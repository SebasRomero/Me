import Project from "../components/Project"
import content from "../content/projects.json"
import { FaGolang } from "react-icons/fa6";
import { SiAmazonaws, SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const MyProjects = () => {

  const tempFish = content.tempfish
  const shortenerUrl = content.shortener_url
  const gonerate = content.gonerate
  const passwordGenerator = content.password_generator

  const GOLANG = <FaGolang className="size-10 text-[#2596be] px-1" />
  const MONGO = <SiMongodb className="size-10 text-[#01ac42] px-1" />
  const DOCKER = <FaDocker className="size-10 text-[#2496ec] px-1" />
  const REACT = <FaReact className="size-10 text-[#7adefa] px-1" />
  const JS = <IoLogoJavascript className="size-8 bg-[#f7de1c] text-white px-1 my-1" />
  const AWS = <SiAmazonaws className="size-10 text-[#ff9900] px-1" />

  return (
    <section className="p-4">
      <div className="flex justify-center">
        <div className="lg:w-[41%] md:w-[60%]">

          <div className="pb-6">
            <p>This is some of my projects that I've built through this path to be better than yesterday.</p>
          </div>

          <div className="py-1">
            <Project name={tempFish.name}
              description={tempFish.description}
              github={tempFish.github_url}
              explanation={tempFish.explanation}
              tools={[GOLANG, DOCKER, AWS]}
            ></Project>
          </div>

          <div className="py-1">
            <Project
              name={shortenerUrl.name}
              description={shortenerUrl.description}
              github={shortenerUrl.github_url}
              explanation={shortenerUrl.explanation}
              try={shortenerUrl.try}
              tools={[GOLANG, MONGO, DOCKER, REACT]} />
          </div>

          <div className="py-1">
            <Project name={gonerate.name}
              description={gonerate.description}
              github={gonerate.github_url}
              tools={[GOLANG]} />
          </div>

          <div className="py-1">
            <Project name={passwordGenerator.name}
              description={passwordGenerator.description}
              github={passwordGenerator.github_url}
              try={passwordGenerator.try}
              tools={[JS]} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default MyProjects