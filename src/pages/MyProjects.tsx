import Project from "../components/Project"
import content from "../content/projects.json"

const MyProjects = () => {

  const shortenerUrl = content.shortener_url
  const gonerate = content.gonerate
  const passwordGenerator = content.password_generator

  return (
    <section className="p-4">
      <div className="flex justify-center">
        <div className="lg:w-[41%] md:w-[60%]">

          <div className="pb-6">
            <p>This is some of my projects that I've built through this path to be better than yesterday.</p>
          </div>
          <div className="py-1">
            <Project
              name={shortenerUrl.name}
              description={shortenerUrl.description}
              github={shortenerUrl.github_url}
              explanation={shortenerUrl.explanation}
              try={"..."} />
          </div>

          <div className="py-1">
            <Project name={gonerate.name} 
            description={gonerate.description} 
            github={gonerate.github_url} />
          </div>

          <div className="py-1">
            <Project name={passwordGenerator.name} 
            description={passwordGenerator.description}
            github={passwordGenerator.github_url} 
            try={passwordGenerator.try} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default MyProjects