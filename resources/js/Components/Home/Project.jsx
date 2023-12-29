import { Link } from "@inertiajs/react";
import React from "react";

const Project = ({ project }) => {
    return (
        <div className="col-span-12 p-4 sm:col-span-6 lg:col-span-4 xl:col-span-3 bg-mydark text-mylight h-40 rounded shadow-md grid grid-cols-12 gap-4 relative">
            <div className="col-span-4 flex justify-center items-center">
                {project.image_url ? (
                    <img
                        className="h-14 object-contain object-center rounded"
                        src={`/storage/${project.image_url}`}
                        alt=""
                    />
                ) : (
                    <img
                        className="h-14 object-contain object-center rounded"
                        src={`/images/placeholder.png`}
                        alt=""
                    />
                )}
            </div>
            <div className="col-span-8 overflow-auto flex flex-col justify-center gap-2">
                <Link href={`/projects/${project.slug}`}>
                    <h1 className="text-md font-semibold leading-5">
                        {project.title}
                    </h1>
                </Link>

                <div className="text-xs leading-5">{project.excerpt}</div>
            </div>
            {project.demo_link && (
                <a
                    href={project.demo_link}
                    target="_blank"
                    className="absolute bottom-2 right-2  text-mygreen hover:text-mypink transition-all delay-75 underline text-xs"
                >
                    Demo Link
                </a>
            )}
        </div>
    );
};

export default Project;
