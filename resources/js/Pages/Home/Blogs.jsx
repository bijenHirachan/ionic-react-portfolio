import React from "react";
import Welcome from "../Welcome";
import { Head, Link } from "@inertiajs/react";

const Blogs = ({ blogs }) => {
    return (
        <Welcome>
            <Head title="Blogs" />
            <div>
                <h1 className="text-xl text-mylight font-semibold text-right my-4 px-8">
                    Blogs
                </h1>
            </div>

            <div className="grid grid-cols-12 gap-4 w-full px-4">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="col-span-12 p-4 sm:col-span-6 lg:col-span-4 bg-mylight text-mydark h-48 rounded shadow-md grid grid-cols-12 gap-1 relative"
                    >
                        <div className="col-span-4 flex justify-center ">
                            {blog.image_url ? (
                                <img
                                    className="h-14 object-contain"
                                    src={`/storage/${blog.image_url}`}
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
                            <Link href={`/blogs/${blog.slug}`}>
                                <h1 className="text-md font-semibold leading-5">
                                    {blog.title}
                                </h1>
                            </Link>

                            <div className="text-xs leading-5 mt-4">
                                {blog.excerpt}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Welcome>
    );
};

export default Blogs;
