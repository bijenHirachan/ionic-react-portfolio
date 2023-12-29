import React from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import Blog from "@/Components/Home/Blog";

const Blogs = ({ blogs }) => {
    return (
        <Welcome>
            <Head>
                <title>Blog</title>
                <meta
                    name="description"
                    content="Bijen Hirachan's blog content."
                />
            </Head>
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-mylight font-semibold text-right my-4 px-4">
                        Blog
                    </h1>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full px-4">
                    {blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </Welcome>
    );
};

export default Blogs;
