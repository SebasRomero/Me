
import { Link } from 'react-router-dom'
import content from '../content/resume.json'
const Resume = () => {

  const work_experience = content.work_experience
  const information = content.information

  return (
    <section>
      <div className='flex flex-col justify-center items-center p-4'>
        <div className='lg:w-[41%] md:w-[60%] sm:w-[80%]'>
          <article>
            <header className='flex justify-between'>
              <div>
                <p>Email: {information.email}</p>
                <p>Github: <Link to={information.github_url}>{information.github}</Link></p>
              </div>
              <div>
                <p className='text-xl'>{information.name} {information.last_name}</p>
                <p>Software Engineer</p>
                <p>{information.phone}</p>
              </div>
            </header>
            <br />
            <section className='flex justify-between'>
              <div className='block w-[80%]'>
                <div className='flex items-center'>
                  <h2 className='pr-2 text-xl'>Work experience</h2> <hr className='bg-black h-0.5 lg:w-[28rem] md:w-[20rem] sm:w-[15rem]' />
                  <hr className='bg-black h-0.5 w-[1.5rem]' />
                  <br />
                  <br />
                </div>
                <div className='block'>
                  <h2 className='text-2xl'>{work_experience[0].position} ~ {work_experience[0].company}</h2>
                  <span className='text-sm'>{work_experience[0].date}</span>
                  <ul>
                    <li>• {work_experience[0].bullet1}</li>
                    <li>• {work_experience[0].bullet2}</li>
                    <li>• {work_experience[0].bullet3}</li>
                  </ul>
                </div>
              </div>
              <div className='text-end'>
                <h2 className='text-xl mt-3'>Tools I Enjoy</h2>
                <h3 className=''>Languages</h3>
                <ul className='text-[12px] pb-2'>
                  <li>Java</li>
                  <li>Typescript</li>
                  <li>Golang</li>
                </ul>
                <h3>Infrastructure</h3>
                <ul className='text-[12px] pb-2'>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Linux</li>
                </ul>
                <h3>Frontend</h3>
                <ul className='text-[12px] pb-2'>
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Css</li>
                </ul>
                <h3>Databases</h3>
                <ul className='text-[12px] pb-2'>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
                <h3>Other</h3>
                <ul className='text-[12px] pb-2'>
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
  )
}

export default Resume