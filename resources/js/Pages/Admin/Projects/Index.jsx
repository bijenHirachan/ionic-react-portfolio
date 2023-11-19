import Modal from "@/Components/Modal";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Index = ({ auth, projects }) => {
    const [search, setSearch] = useState("");

    const [deleteProject, setDeleteProject] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const searchProjects = (e) => {
        e.preventDefault();

        router.get(
            `/admin/projects?search=${search}`,
            {},
            {
                preserveState: true,
            }
        );
    };

    const deleteHandler = () => {
        router.delete(`/admin/projects/${deleteProject?.id}`);
        setShowModal(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Admin Projects" />
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                closeable={true}
                maxWidth="sm"
            >
                <div className="p-4 flex flex-col gap-4">
                    <div>
                        <p className="text-sm">
                            Do you want to delete this project?
                        </p>
                        <h1 className="text-xs text-mygreen">
                            {deleteProject?.title}
                        </h1>
                    </div>

                    <div className="flex gap-2 justify-end">
                        <SecondaryButton
                            onClick={() => {
                                setDeleteProject(null);
                                setShowModal(false);
                            }}
                        >
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton onClick={deleteHandler}>
                            Delete
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>

            <div className="py-12">
                <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8  bg-white shadow sm:rounded-lg overflow-x-auto">
                        <div className="flex justify-between">
                            <form onSubmit={searchProjects}>
                                <TextInput
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..."
                                />
                            </form>

                            <Link href="/admin/projects/create">
                                <PrimaryButton>Create</PrimaryButton>
                            </Link>
                        </div>
                        <table className="w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {projects.data.map((project) => (
                                    <tr
                                        key={project.id}
                                        className="border-b dark:border-neutral-500"
                                    >
                                        <td className="px-6 py-4">
                                            {project.title.length < 15
                                                ? project.title
                                                : project.title.substr(0, 15) +
                                                  "..."}
                                        </td>
                                        <td className="px-6 py-4">
                                            {project.excerpt.substr(0, 15)}...
                                        </td>
                                        <td className="px-6 py-4">
                                            {project.image_url && (
                                                <img
                                                    className="h-6 w-6 object-contain"
                                                    src={`http://localhost:8000/storage/${project.image_url}`}
                                                />
                                            )}
                                        </td>
                                        <td className="px-6 py-4 flex gap-4 items-center justify-start">
                                            <Link
                                                href={`/admin/projects/${project.slug}/edit`}
                                            >
                                                <AiOutlineEdit
                                                    size={18}
                                                    className="cursor-pointer text-mygreen hover:scale-110 transition-all delay-75"
                                                />
                                            </Link>
                                            <AiOutlineDelete
                                                onClick={() => {
                                                    setDeleteProject(project);
                                                    setShowModal(true);
                                                }}
                                                size={18}
                                                className="cursor-pointer text-mypink hover:scale-110 transition-all delay-75"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination items={projects} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
