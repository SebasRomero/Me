import tempfish from "../../assets/tempfish.svg"

const Tempfish = () => {
    return (
        <section className="flex justify-center p-4">
            <div className="lg:w-[41%] md:w-[60%] sm:w-[80%]">
                <article>
                    <p>
                        Tempfish - TFS or Temporary File Sharing.
                    </p>
                    <br />
                    <p>
                        This CLI application will help you to quickly share encrypted files and get them immediately via HTTPS with a few commands.
                    </p>
                    <br />
                    <p>
                        <h1 className="text-2xl font-normal">How it works?</h1>
                        <br />
                        <p>
                            After download the CLI tool, to update or push any files use the push command, with this command you will be making a request via HTTPS to the API, this API will be in charge of encrypt using Block Cipher algorithm and then, sending these files to an S3 Bucket, returning a "directory code" that we will be using later to get or pull these files.
                        </p>
                        <br />
                        <p>
                            The process getting these files would be similar, calling with the CLI tool we will be doing a request to the API passing as commands the directory where we want to download the files and the "directory code" obtained before, this call will get the files from the S3 Bucket, decrypting them and being download into your system.
                        </p>
                        <br />
                        <p>
                            The CLI tool is built using Golang, the API is built using Golang and AWS S3, the S3 Bucket is used to store the files, and the encryption is done using Block Cipher algorithm inside of the API, avoiding any extra step to setup or use the CLI application.
                        </p>
                        <br />
                        <p>
                            A brief explanation of the process using this design system image:
                        </p>
                        <br />
                        <img src={tempfish} alt="Diagram system design" />

                        <br />

                        <p>
                            This system was built to be as simple as possible, avoiding any extra steps to setup or use the CLI application, the encryption is done inside of the API, and the files are stored in an S3 Bucket, this design is not scalable to be used as a product, but it meets the considerations previously mentioned, however, these could be a whole full production product because solves a real world problem.
                        </p>
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Tempfish