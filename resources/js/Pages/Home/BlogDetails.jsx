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
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-mylight font-semibold text-right my-4 px-4">
                        {blog?.title}
                    </h1>
                </div>
                <div className="relative bg-mydark h-[80svh] rounded-lg overflow-x-hidden overflow-y-scroll w-full py-16">
                    <span className="text-mylight text-sm italic absolute top-2 right-2">
                        {createdAt}
                    </span>
                    <div className="px-4 sm:px-8 xl:px-16 flex flex-col gap-4">
                        {blog.image_url ? (
                            <div className="my-4">
                                <img
                                    src={`/storage/${blog.image_url}`}
                                    alt={blog.title}
                                    className="h-24 w-auto object-contain object-center"
                                />
                            </div>
                        ) : (
                            <div className="my-4">
                                <img
                                    src={`/images/placeholder.png`}
                                    alt={blog.title}
                                    className="h-24 w-auto object-contain object-center"
                                />
                            </div>
                        )}

                        <div className="text-mylight text-sm">
                            {parse(blog.description)}
                        </div>
                    </div>
                </div>
            </div>
        </Welcome>
    );
};

export default BlogDetails;
