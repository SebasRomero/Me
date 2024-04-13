import shortener1 from "../../assets/short-url-1.svg"
import shortener2 from "../../assets/short-url-2.svg"

const ShortenerUrl = () => {
    return (
        <section className="flex justify-center p-4">
            <div className="lg:w-[41%] md:w-[60%] sm:w-[80%]">
                <article>
                    <p>
                        A shortener url service lets you reduce an specific
                        url, this could be helpful if you don't have
                        a lot of space or a max length of characters.
                    </p>
                    <p>
                        Let's stablish some considerations for this:
                        <ul>
                            <li>- The application should be able to create a
                                shortened url from a long url.
                            </li>
                            <li>
                                - Click to a short url must redirect to the long
                                url.
                            </li>
                            <li>
                                - The shortened url should be small as possible.
                            </li>
                            <li>
                                - Once created, the url should be stored in db for
                                a specific lifetime.
                            </li>
                        </ul>
                    </p>
                    <br />
                    <p>
                        The appropiate system design for a shortener url service
                        should be something like this:
                    </p>

                    <img className="" src={shortener1} alt="image" />
                    <br />
                    <p>But in our case, as is just a demo we will be using a
                        design with just one server, one database and una cache storage.
                        We don't have to worry about server overloading and shard our database,
                        we will keep it simple.</p>
                    <br />
                    <img src={shortener2} alt="" />

                    <p>Our system meets the considerations previously mentioned,
                        however, there are some constraints to keep in mind.
                    </p>
                    <br />
                    <ul>
                        <li>- Our short url is not short as it should be.</li>
                        <li>- It is not scalable to be able to be used as a product.</li>
                        <li>- The short url created has just 1h of expiration.</li>
                        <li>- Is not allowed to create a custom short url.</li>
                    </ul>

                </article>
            </div>
        </section>
    )
}

export default ShortenerUrl