import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="pb-8 ">
        <header className="flex justify-center items-center font-serif text-6xl">
          <NavLink to="/" className=''>Me</NavLink>
        </header>
        <section className='flex justify-center items-center pt-9 px-2'>
          <div className='w-fit'>
            <ul className='flex text-sm w-auto font-semibold'>
              <div className='flex items-center'>
                <hr className='bg-black h-0.5 lg:w-[12.7rem] md:w-[5rem] sm:w-[1rem]' />
                <li><NavLink to="/just-learned" className="px-2">JUST LEARNED</NavLink></li>
                <hr className='bg-black h-0.5 w-[2rem]' />
              </div>
              <div className='flex items-center'>
                <hr className='bg-black h-0.5 w-[1.5]' />
                <li><NavLink to="/my-projects" className="px-2">MY PROJECTS</NavLink></li>
              </div>
              <div className='flex items-center'>
                <hr className='bg-black h-0.5 w-[2rem]' />
                <li><NavLink to="/resume" className="px-2">RESUME</NavLink></li>
                <hr className='bg-black h-0.5 lg:w-[12.7rem] md:w-[5rem] sm:w-[1rem]' />
              </div>
            </ul>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Navbar