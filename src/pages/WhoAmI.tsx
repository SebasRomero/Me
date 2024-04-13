import { Link } from "react-router-dom"

const WhoAmI = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="w-[41%]">
          <article>
            <header>
              <h1 className="text-3xl underline">Who's this guy?</h1>
            </header>
            <br />
            <p>Hey, if you are reading this it's because you want to know more
              about me.
            </p>

            <p>I'm Sebastian Romero, I'm 22 and I started learning how to
              program back in highschool around 2017.
              Our teacher was teaching us the basics with PSeint and then moved
              to Visual Basic.
            </p>

            <br />
            <p>I did a little game in that class that unfortunately I lost, but
              with that game I could fall in love with the programming, even
              with my little knowledge, I could create something valueable, at
              least for me. The game was about different animals moving around
              the screen and every time you clicked someone it will getting faster
              to try to click the other one, a timer was ticking and the goal
              was to catch the most animals you can in 30 seconds, at the end it
              will show you your score.
            </p>
            <br />
            <p>Then I went to the university in 2019 at
              <Link to="https://www.cuc.edu.co/"> <strong> Universidad de la Costa </strong></Link>
              to study Systems Engineering where I learned about Data Structures,
              Databases, Automata Theory, Logic, Networking, Software Development, etc.
            </p>
            <br />
            <p>
              Apart of my love in programming:

            </p>
            <ul>
              <li>- I love to watch the NBA and play some basketball (Lebron is the goat). </li>
              <li>- Hang out with my friends is like opening the gifts as a child at christmas.</li>
              <li>- I love my girlfriend, Kim, future wife and my cat, Luna.</li>
            </ul>

            <br />
            <p>Thank you for reading a little part of me!</p>
          </article>
        </div>
      </div>
    </section>

  )
}

export default WhoAmI