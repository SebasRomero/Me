import circularDep from "../assets/circular-dep-1.svg"
import circularDep2 from "../assets/circular-dep-2.svg"
import circularDep3 from "../assets/circular-dep-3.svg"

const JustLearned = () => {
  return (
      <section className="flex justify-center p-4">
        <div className="lg:w-[41%] md:w-[60%]">
          <article>
            <header>
              <h2 className="text-2xl underline">How to avoid circular dependency</h2>
            </header>
            <br />
            <section>
              <p>Building a backend project from its architecture could be a 
                fascinating part, especially when you know what you are doing 
                and what you are not doing.
              </p>
              <br />
              <p>I had to connect different modules to work with them at
                 the same time, the problem was that I did not take into account 
                 the relationship between them and I had circular dependency problems.
              </p>
              <div className="bg-[#2b2729] p-2">
                <p className="text-white p-2">- A circular dependency between modules. Use forwardRef() to avoid it. Read more: https://docs.nestjs.com/fundamentals/circular-dependency</p>
              </div>

              <p>This problem occurs when 2 or more modules depends on each other,
                and they can't be compiled at the same time, this could be directly or indirectly.
                Also, they recommend to use forwardRef() in this case to avoit it (I'm using NestJS),
                however, it's preferable just to avoid it from the design.
              </p>
              <div className="flex justify-center my-4">
                <img className="h-[10rem] w-[48rem]" src={circularDep} alt="" />
              </div>
              <p>This example shows a directly circular dependency, Module A
                depends of Module B and Module B depends of Module A.
                I could resolve this problem dividing the circular dependency
                like this:
              </p>
              <div className="flex justify-center my-4">
                <img className="h-[14.5rem] w-[70rem]" src={circularDep2} alt="" />
              </div>
              <p>I had to move small pieces of code to the new module (C), now
                Module C depends of Module B and Module B depends of Module A.
              </p>
              <p>Be careful, you <strong>don't </strong>want that Module A depends of Module C,
                this will create an indirect circular dependency.
              </p>
              <div className="flex justify-center my-4">
                <img className="h-[15rem] w-[70rem]" src={circularDep3} alt="" />
              </div>
            </section>
          </article>
        </div>
      </section>
  )
}

export default JustLearned