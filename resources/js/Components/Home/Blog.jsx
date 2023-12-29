import { Link } from "@inertiajs/react";
import React from "react";

const Blog = ({ blog }) => {
    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className="col-span-12 p-4 sm:col-span-6 lg:col-span-4 xl:col-span-3 bg-mydark text-mylight h-40 rounded shadow-md grid grid-cols-12 gap-4 relative"
        >
            <div className="col-span-4 flex justify-center items-center">
                {blog.image_url ? (
                    <img
                        className="h-14 object-contain object-center rounded"
                        src={`/storage/${blog.image_url}`}
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
                <h1 className="text-md font-semibold leading-5">
                    {blog.title}
                </h1>

                <div className="text-xs leading-5">{blog.excerpt}</div>
            </div>
        </Link>
    );
};

export default Blog;
