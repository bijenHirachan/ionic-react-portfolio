import React from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import parse from "html-react-parser";

const ProjectDetails = ({ project, categories }) => {
    return (
        <Welcome>
            <Head>
                <title>{project?.title}</title>
                <meta
                    name="description"
                    content={project?.title + ". " + project?.excerpt}
                />
            </Head>

            <div className="p-4">
                <div>
                    <h1 className="text-xl text-mylight font-semibold text-right my-4 px-4">
                        {project?.title}
                    </h1>
                </div>
                <div className="bg-mydark h-[80svh] rounded-lg overflow-x-hidden overflow-y-scroll w-full py-16">
                    <div className="px-4 sm:px-8 xl:px-16 flex flex-col gap-4">
                        {project.image_url ? (
                            <div className="my-4">
                                <img
                                    src={`/storage/${project.image_url}`}
                                    alt={project.title}
                                    className="h-24 w-auto object-contain object-center"
                                />
                            </div>
                        ) : (
                            <div className="my-4">
                                <img
                                    src={`/images/placeholder.png`}
                                    alt={project.title}
                                    className="h-24 w-auto object-contain object-center"
                                />
                            </div>
                        )}

                        <div className="my-4">
                            {categories.length > 0 && (
                                <div className="flex gap-2 flex-wrap">
                                    {categories.map((cat) => (
                                        <span
                                            className="border border-mylight text-xs uppercase px-2 py-1 rounded text-mylight"
                                            key={cat.id}
                                        >
                                            {cat.title}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="text-mylight text-sm">
                            {parse(project.description)}
                        </div>
                    </div>
                </div>
            </div>
        </Welcome>
    );
};

export default ProjectDetails;
