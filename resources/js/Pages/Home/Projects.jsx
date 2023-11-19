import React from "react";
import Welcome from "../Welcome";
import { Head, Link } from "@inertiajs/react";

const Projects = ({ projects }) => {
    return (
        <Welcome>
            <Head title="Projects" />
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-right my-4 text-mylight font-semibold px-4">
                        Projects
                    </h1>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full px-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="col-span-12 p-4 sm:col-span-6 lg:col-span-4 bg-mylight text-mydark h-48 rounded shadow-md grid grid-cols-12 gap-1 relative"
                        >
                            <div className="col-span-4 flex justify-center ">
                                {project.image_url ? (
                                    <img
                                        className="h-14 object-contain"
                                        src={`/storage/${project.image_url}`}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className="h-14 object-contain"
                                        src={`/images/placeholder.png`}
                                        alt=""
                                    />
                                )}
                            </div>
                            <div className="col-span-8 overflow-auto">
                                <Link href={`/projects/${project.slug}`}>
                                    <h1 className="text-md font-semibold leading-5">
                                        {project.title}
                                    </h1>
                                </Link>

                                <div className="text-xs leading-5 mt-4">
                                    {project.excerpt}
                                </div>
                            </div>
                            {project.demo_link && (
                                <a
                                    href={project.demo_link}
                                    target="_blank"
                                    className="absolute bottom-2 right-2  text-myblue hover:text-mygreen transition-all delay-75 underline text-xs"
                                >
                                    Demo Link
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Welcome>
    );
};

export default Projects;
