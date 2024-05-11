import { ReactElement } from "react"
import { BiChevronsRight } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"

type project = {
    name: string
    description: string
    github: string
    explanation?: string | null
    try?: string | null
    tools: ReactElement[]
}

const Project = (props: project) => {
    return (
        <div className="border border-black p-4">
            
        <section className='flex justify-between items-center py-5 lg:h-[10rem] md:h-auto sm:h-auto w-auto'>
            <div className="w-[30%] text-center">
                <h2 className="lg:text-2xl md:text-xl">{props.name}</h2>
            </div>
            <div className="w-[60%] text-start">
                <p className="mx-[10px] text-sm md:text-md">{props.description}
                    {props.explanation ? <NavLink className="font-semibold" to={props.explanation}> Learn more</NavLink> : null}</p>

            </div>
            <div className="w-[10%] flex justify-center">
                <Link className="px-[5px]" to={props.github}><FaGithub /></Link>
                {props.try != null ? <Link className="px-[5px]" to={props.try}><BiChevronsRight /></Link> : ""}
            </div>
        </section>
        <div className="flex justify-end pr-4">
            {props.tools}
        </div>
        </div>

    )
}

export default Project