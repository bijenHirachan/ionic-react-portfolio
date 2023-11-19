import { useEffect, useRef, useState } from "react";
import Welcome from "../Welcome";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import gsap from "gsap";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [flash, setFlash] = useState({});

    const messageRef = useRef();

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
                    setErrors(page.props.errors);
                    setFlash(page.props.flash);
                    setShowMessage(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    gsap.fromTo(
                        messageRef?.current,
                        { opacity: 0 },
                        { duration: 3, opacity: 1 }
                    );
                    gsap.fromTo(
                        messageRef?.current,
                        { opacity: 1 },
                        { duration: 3, opacity: 0, delay: 2 }
                    );
                    setTimeout(() => {
                        setFlash({});
                        setShowMessage(false);
                    }, [5000]);
                },
            }
        );
    };

    return (
        <Welcome>
            <Head title="Contact" />
            <div className="p-4">
                <div>
                    <h1 className="text-xl  text-mylight font-semibold text-right my-4">
                        Contact
                    </h1>
                </div>
                <div className="flex z-10 flex-col h-[80svh] items-center justify-center relative">
                    <div ref={messageRef}>
                        {showMessage && (
                            <div
                                className={`bg-indigo-500 px-4 py-2 w-full  mb-4 rounded-md text-indigo-50`}
                            >
                                {flash?.message}
                            </div>
                        )}
                    </div>

                    <form
                        onSubmit={submitHandler}
                        className="flex flex-col gap-2 w-full sm:w-2/5 md:1/5"
                    >
                        <div className="flex flex-col relative">
                            <label className="text-sm text-mylight after:content-['*'] after:ml-0.5 after:text-red-600">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border-none rounded focus:ring-0"
                                type="text"
                                required
                            />
                            {errors.name && (
                                <div className="absolute bottom-[-18px] right-0 text-xs text-red-600">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-sm text-mylight after:content-['*'] after:ml-0.5 after:text-red-600">
                                Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-none rounded focus:ring-0"
                                type="email"
                                required
                            />
                            {errors.email && (
                                <div className="absolute bottom-[-18px] right-0 text-xs text-red-600">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col relative">
                            <label className="text-sm text-mylight after:content-['*'] after:ml-0.5 after:text-red-600">
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border-none rounded focus:ring-0"
                                required
                            ></textarea>
                            {errors.message && (
                                <div className="absolute bottom-[-18px] right-0 text-xs text-red-600">
                                    {errors.message}
                                </div>
                            )}
                        </div>
                        <button
                            disabled={processing}
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
