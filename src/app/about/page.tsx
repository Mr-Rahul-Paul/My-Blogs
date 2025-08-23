'use client'
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
                        <div
                            onClick={() => window.open("https://x.com/_Rahul_Paul", "_blank")}
                            className="font-bold underline hover:cursor-pointer">
                            X
                        </div>
                        <div
                            onClick={() => window.open("https://instagram.com/rahulpaul.3d", "_blank")}
                            className="font-bold underline hover:cursor-pointer"
                        >
                            Instagram
                        </div>
                        <div
                            onClick={() => window.open("https://github.com/Mr-Rahul-Paul", "_blank")}
                            className="font-bold underline hover:cursor-pointer"
                        >
                            GitHub
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default about
