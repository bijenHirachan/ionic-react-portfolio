import React from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import parse from "html-react-parser";

const ProjectDetails = ({ project }) => {
    return (
        <Welcome>
            <Head title={project.title} />

            <div className="flex justify-center items-center pt-6 px-2">
                <div className="grid grid-cols-12 h-[90svh]  gap-4 bg-mylight rounded-md p-6 2xl:w-4/5">
                    <div className="col-span-12 md:col-span-5 flex justify-center items-start pt-12">
                        {project.image_url ? (
                            <img
                                src={`/storage/${project.image_url}`}
                                alt={project.title}
                                className="h-64 w-auto object-contain object-center mb-6 md:mb-0"
                            />
                        ) : (
                            <img
                                src={`/images/placeholder.png`}
                                alt={project.title}
                                className="h-64 w-auto object-contain object-center mb-6 md:mb-0"
                            />
                        )}
                    </div>
                    <div className="col-span-12 md:col-span-7 overflow-auto">
                        <div>
                            <h1 className="text-2xl italic text-mydarker font-semibold">
                                {project.title}
                            </h1>
                        </div>
                        <div className="mt-2">{parse(project.description)}</div>
                    </div>
                </div>
            </div>
        </Welcome>
    );
};

export default ProjectDetails;