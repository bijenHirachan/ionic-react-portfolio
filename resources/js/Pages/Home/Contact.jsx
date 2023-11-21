import { useState } from "react";
import Welcome from "../Welcome";
import { Head, router } from "@inertiajs/react";
import toast from "react-hot-toast";

const Contact = ({ errors }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        router.post(
            "/contact",
            {
                name,
                email,
                message,
            },
            {
                onSuccess: (page) => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    // toast.success(page?.props?.flash?.message);
                    toast.custom((t) => (
                        <div
                            className={`${
                                t.visible ? "animate-enter" : "animate-leave"
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                        >
                            <div className="flex-1 w-0 p-4">
                                <div className="flex items-center">
                                    {page?.props?.flash?.message}
                                </div>
                            </div>
                            <div className="flex border-l border-gray-200">
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ));
                },
            }
        );
    };

    return (
        <Welcome>
            <Head title="Contact" />
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-mylight font-semibold text-right my-4 px-4">
                        Contact
                    </h1>
                </div>
                <div className="flex z-10  flex-col h-[80svh] items-center justify-center relative">
                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col gap-4 w-full sm:w-2/5 md:1/5 px-4"
                    >
                        <div className="flex flex-col relative">
                            <label className="text-sm text-mylight after:content-['*'] after:ml-0.5 after:text-mypink">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border-none rounded focus:ring-0"
                                type="text"
                                // required
                            />
                            {errors.name && (
                                <div className="absolute bottom-[-18px] right-0 text-xs text-mypink">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-sm text-mylight after:content-['*'] after:ml-0.5 after:text-mypink">
                                Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-none rounded focus:ring-0"
                                type="email"
                                // required
                            />
                            {errors.email && (
                                <div className="absolute bottom-[-18px] right-0 text-xs text-mypink">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-sm text-mylight after:content-['*'] after:ml-0.5 after:text-mypink">
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border-none rounded focus:ring-0"
                                // required
                            ></textarea>
                            {errors.message && (
                                <div className="absolute bottom-[-18px] right-0 text-xs text-mypink">
                                    {errors.message}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-myblue to-mypink py-2 mt-4 text-mylight font-semibold uppercase hover:translate-y-1 duration-700 transition-all delay-200"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </Welcome>
    );
};

export default Contact;
