import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";

const Index = ({ auth, categories }) => {
    const [search, setSearch] = useState("");

    const [title, setTitle] = useState("");

    const [editCat, setEditCat] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [deleteCat, setDeleteCat] = useState(null);

    const searchCategories = (e) => {
        e.preventDefault();

        router.get(
            `/admin/categories?search=${search}`,
            {},
            {
                preserveState: true,
            }
        );
    };

    const handleEdit = (category) => {
        if (editCat?.id === category.id) {
            setEditCat(null);
            setEditTitle("");
        } else {
            setEditCat(category);
            setEditTitle(category.title);
        }
    };

    const updateHandler = (e) => {
        e.preventDefault();

        router.post(`/admin/categories/${editCat?.id}`, {
            _method: "put",
            title: editTitle,
        });

        setEditCat(null);
        setEditTitle("");
    };

    const deleteHandler = () => {
        router.delete(`/admin/categories/${deleteCat?.id}`);
        setDeleteCat(null);
        setShowModal(false);
    };

    const createHandler = (e) => {
        e.preventDefault();

        router.post(
            `/admin/categories`,
            {
                title,
            },
            {
                preserveState: true,
            }
        );

        setTitle("");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Categories
                </h2>
            }
        >
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                closeable={true}
                maxWidth="sm"
            >
                <div className="p-4 flex flex-col gap-4">
                    <div>
                        <p className="text-sm">
                            Do you want to delete this category?
                        </p>
                        <h1 className="text-xs text-mygreen">
                            {deleteCat?.title}
                        </h1>
                    </div>

                    <div className="flex gap-2 justify-end">
                        <SecondaryButton
                            onClick={() => {
                                setDeleteCat(null);
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
            <Head title="Admin Categories" />
            <div className="py-12">
                <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8  bg-white shadow sm:rounded-lg overflow-x-auto">
                        <div className="flex justify-between">
                            <form onSubmit={searchCategories}>
                                <TextInput
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..."
                                />
                            </form>

                            <form
                                className="gap-2 flex"
                                onSubmit={createHandler}
                            >
                                <TextInput
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Title"
                                />
                                <PrimaryButton type="submit">
                                    Create
                                </PrimaryButton>
                            </form>
                        </div>
                        <table className="w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">
                                        Title
                                    </th>

                                    <th scope="col" className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {categories.data.map((category) => (
                                    <tr
                                        key={category.id}
                                        className="border-b dark:border-neutral-500"
                                    >
                                        <td className="px-6 py-4">
                                            {editCat?.id === category?.id ? (
                                                <form onSubmit={updateHandler}>
                                                    <TextInput
                                                        value={editTitle}
                                                        onChange={(e) =>
                                                            setEditTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                        className={
                                                            "h-8 py-2 px-1"
                                                        }
                                                    />
                                                </form>
                                            ) : (
                                                category.title
                                            )}
                                        </td>

                                        <td className="px-6 py-4 flex gap-4 items-center justify-start">
                                            <AiOutlineEdit
                                                onClick={() =>
                                                    handleEdit(category)
                                                }
                                                size={18}
                                                className="cursor-pointer text-mygreen hover:scale-110 transition-all delay-75"
                                            />
                                            <AiOutlineDelete
                                                onClick={() => {
                                                    setDeleteCat(category);
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
                        <Pagination items={categories} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
