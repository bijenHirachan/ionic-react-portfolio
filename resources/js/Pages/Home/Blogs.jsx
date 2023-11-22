import React from "react";
import Welcome from "../Welcome";
import { Head, Link } from "@inertiajs/react";

const Blogs = ({ blogs }) => {
    return (
        <Welcome>
            <Head title="Blogs" />
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-mylight font-semibold text-right my-4 px-4">
                        Blogs
                    </h1>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full px-4">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="col-span-12 p-4 sm:col-span-6 lg:col-span-4 bg-mydark text-mylight h-40 rounded shadow-md grid grid-cols-12 gap-4 relative"
                        >
                            <div className="col-span-4 flex justify-center items-center">
                                {blog.image_url ? (
                                    <img
                                        className="h-14 object-contain rounded"
                                        src={`/storage/${blog.image_url}`}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className="h-14 object-contain rounded"
                                        src={`/images/placeholder.png`}
                                        alt=""
                                    />
                                )}
                            </div>
                            <div className="col-span-8 overflow-auto flex flex-col justify-center gap-2">
                                <Link href={`/blogs/${blog.slug}`}>
                                    <h1 className="text-md font-semibold leading-5">
                                        {blog.title}
                                    </h1>
                                </Link>

                                <div className="text-xs leading-5">
                                    {blog.excerpt}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Welcome>
    );
};

export default Blogs;
