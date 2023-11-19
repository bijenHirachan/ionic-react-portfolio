import React from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import parse from "html-react-parser";

const ProjectDetails = ({ project, categories }) => {
    return (
        <Welcome>
            <Head title={project.title} />

            <div className="flex justify-center items-center pt-6 px-2">
                <div className="grid grid-cols-12 h-[90svh]  gap-4 bg-mylight rounded-md p-6 2xl:w-4/5">
                    <div className="col-span-12 md:col-span-5 flex flex-col justify-start gap-4 items-center pt-12">
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
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <span
                                    className="border border-mydarker text-xs uppercase px-2 py-1 rounded"
                                    key={cat.id}
                                >
                                    {cat.title}
                                </span>
                            ))}
                        </div>
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
