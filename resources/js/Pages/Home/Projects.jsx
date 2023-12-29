import React from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import Project from "@/Components/Home/Project";

const Projects = ({ projects }) => {
    return (
        <Welcome>
            <Head>
                <title>Projects</title>
                <meta
                    name="description"
                    content="Bijen Hirachan's demo projects."
                />
            </Head>
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-right my-4 text-mylight font-semibold px-4">
                        Projects
                    </h1>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full px-4">
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Welcome>
    );
};

export default Projects;
