import React from 'react'

function about() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="max-w-2xl mx-auto text-center p-8   rounded-2xl ">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-4">
                    Hi, I&apos;m Paul! I&apos;m a passionate developer, writer, and lifelong learner. I love building things with code and sharing my knowledge through tutorials and articles.
                </p>
                <p className="text-lg mb-4">
                    My interests span across web development, linux, and exploring the intersection of technology and art. Whether it&apos;s crafting UIs, diving into backend and servers, or penning down my thoughts.
                    <br />
                    I enjoy every bit of the process.
                </p>
                <p className="text-lg">
                    When I&apos;m not coding or writing, you can find me experimenting with digital art, reading, or exploring new places.
                    <br />
                    <br />
                    <br />
                    Thanks for stopping by! :D

                <div className="mt-8 flex justify-center gap-6">
                    <a
                        href="https://x.com/_Rahul_Paul"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "underline", fontWeight: "bold" }}
                    >
                        X
                    </a>
                    <a
                        href="https://instagram.com/rahulpaul.3d"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "underline", fontWeight: "bold" }}
                    >
                        Instagram
                    </a>
                    <a
                        href="https://github.com/Mr-Rahul-Paul"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "underline", fontWeight: "bold" }}
                    >
                        GitHub
                    </a>
                </div>
                </p>
            </div>
        </div>
    )
}

export default about
