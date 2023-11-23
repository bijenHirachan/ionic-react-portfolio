import React, { useEffect, useState } from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import parse from "html-react-parser";

const BlogDetails = ({ blog }) => {
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        const event = new Date(blog.created_at);
        const options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        setCreatedAt(event.toLocaleDateString("nl-BE", options));
    }, []);

    return (
        <Welcome>
            <Head>
                <title>{blog?.title}</title>
                <meta
                    name="description"
                    content={blog?.title + ". " + blog?.excerpt}
                />
            </Head>

            <div className="pt-6 px-2 2xl:flex 2xl:justify-center 2xl:mt-4">
                <div className="grid grid-cols-12 h-[90svh] gap-4 bg-mydark rounded-md p-6 2xl:w-4/5 relative md:items-center">
                    <div className="absolute bottom-2 left-2 text-xs text-mydarker">
                        {createdAt}
                    </div>
                    <div className="col-span-12 md:col-span-5 flex justify-center items-center md:items-start md:mt-10">
                        {blog.image_url ? (
                            <img
                                src={`/storage/${blog.image_url}`}
                                alt={blog.title}
                                className="h-64 w-auto object-contain object-center mb-6 md:mb-0"
                            />
                        ) : (
                            <img
                                src={`/images/placeholder.png`}
                                alt={blog.title}
                                className="h-64 w-auto object-contain object-center mb-6 md:mb-0"
                            />
                        )}
                    </div>
                    <div className="col-span-12 md:col-span-7 md:h-[80svh] overflow-y-auto">
                        <div>
                            <h1 className="text-2xl italic text-mylight font-semibold">
                                {blog.title}
                            </h1>
                        </div>
                        <div className="mt-2 text-mylight">
                            {parse(blog.description)}
                        </div>
                    </div>
                </div>
            </div>
        </Welcome>
    );
};

export default BlogDetails;
