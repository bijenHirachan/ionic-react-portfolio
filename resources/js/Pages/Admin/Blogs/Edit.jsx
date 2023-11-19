import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const Edit = ({ auth, blog }) => {
    const [title, setTitle] = useState(blog.title);
    const [excerpt, setExcerpt] = useState(blog.excerpt);
    const [description, setDescription] = useState(blog.description);
    const [image, setImage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        router.post(`/admin/blogs/${blog.id}`, {
            _method: "put",
            title,
            description,
            excerpt,
            image,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Blog
                </h2>
            }
        >
            <Head title="Admin Blogs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <form
                        onSubmit={submitHandler}
                        className="p-4 sm:p-8 bg-white shadow sm:rounded-lg flex flex-col gap-4"
                    >
                        <div>
                            <InputLabel
                                className="text-neutral-800"
                                htmlFor="title"
                                value={"Title"}
                            />
                            <TextInput
                                id="title"
                                className="mt-1 block w-full"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <InputLabel
                                className="text-neutral-800"
                                htmlFor="excerpt"
                                value={"Excerpt"}
                            />
                            <TextInput
                                id="excerpt"
                                className="mt-1 block w-full"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                            />
                        </div>
                        <div>
                            <img
                                className="h-24 w-auto object-contain"
                                src={`/storage/${blog.image_url}`}
                                alt={blog.title}
                            />
                            <p className="text-xs italic mt-2">
                                Upload picture to change the old one
                            </p>
                        </div>
                        <div>
                            <input
                                type="file"
                                // value={image}
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            {/* {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )} */}
                        </div>
                        <div>
                            <InputLabel
                                value={"Description"}
                                htmlFor="description"
                                className="text-neutral-800"
                            />
                            <ReactQuill
                                id="description"
                                value={description}
                                // className={
                                //     "border-gray-300 w-full focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                // }
                                onChange={setDescription}
                            ></ReactQuill>
                        </div>
                        <PrimaryButton
                            className="flex items-center justify-center"
                            type="submit"
                        >
                            Update
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
