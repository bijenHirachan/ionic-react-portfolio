import Logo from "@/Components/Logo";
import { Link, Head, usePage } from "@inertiajs/react";
import { useRef } from "react";

import gsap from "gsap";

import {
    AiOutlineGithub,
    AiOutlineHome,
    AiOutlineLinkedin,
    AiOutlineProject,
    AiOutlineTable,
    AiOutlineContacts,
    AiOutlineArrowLeft,
} from "react-icons/ai";

export default function Welcome({ children }) {
    const navRef = useRef();

    const { component } = usePage();

    const openNav = () => {
        gsap.to(navRef.current, { x: 144, duration: 1 });
    };

    const closeNav = () => {
        gsap.to(navRef.current, { x: -100, duration: 1 });
    };

    return (
        <>
            <Head title="Home" />
            <div className="bg-mydarker h-screen relative">
                <div className="bg-mydark z-50 w-16 p-4 h-full absolute flex flex-col justify-between items-center">
                    <div onClick={openNav}>
                        <Logo
                            classes={
                                "h-8 cursor-pointer hover:rotate-90 duration-700 transition-all delay-75"
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link href="/">
                            <AiOutlineHome
                                className={`text-2xl hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75 ${
                                    component === "Home/Home"
                                        ? "text-mygreen scale-125"
                                        : "text-mylight "
                                }`}
                            />
                        </Link>

                        <Link href="/projects">
                            <AiOutlineProject
                                className={`text-2xl hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75 ${
                                    component === "Home/Projects"
                                        ? "text-mygreen scale-125"
                                        : "text-mylight "
                                }`}
                            />
                        </Link>
                        <Link href="/blogs">
                            <AiOutlineTable
                                className={`text-2xl hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75 ${
                                    component === "Home/Blogs"
                                        ? "text-mygreen scale-125"
                                        : "text-mylight "
                                }`}
                            />
                        </Link>

                        <Link href="/contact">
                            <AiOutlineContacts
                                className={`text-2xl hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75 ${
                                    component === "Home/Contact"
                                        ? "text-mygreen scale-125"
                                        : "text-mylight "
                                }`}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <AiOutlineLinkedin
                            size={26}
                            className="text-mylight hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75"
                        />
                        <AiOutlineGithub
                            size={26}
                            className="text-mylight hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75"
                        />
                    </div>
                </div>
                <div
                    ref={navRef}
                    className="bg-mylightdark left-[-100px] z-40 w-40 p-4 h-full absolute flex flex-col justify-between items-center"
                >
                    <div className="flex justify-end w-full">
                        <AiOutlineArrowLeft
                            onClick={closeNav}
                            className="h-8 text-lg text-mylight hover:text-mygreen hover:scale-125 cursor-pointer transition-all delay-75"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link href="/">
                            <div
                                className={`text-md hover:text-mygreen font-bold transition-all delay-75 ${
                                    component === "Home/Home"
                                        ? "text-mygreen scale-110"
                                        : "text-mylight cursor-pointer"
                                }`}
                            >
                                Home
                            </div>
                        </Link>
                        <Link href="/projects">
                            <div
                                className={`text-md hover:text-mygreen font-bold transition-all delay-75 ${
                                    component === "Home/Projects"
                                        ? "text-mygreen scale-110"
                                        : "text-mylight cursor-pointer"
                                }`}
                            >
                                Projects
                            </div>
                        </Link>
                        <Link href="/blogs">
                            <div
                                className={`text-md hover:text-mygreen font-bold transition-all delay-75 ${
                                    component === "Home/Blogs"
                                        ? "text-mygreen scale-110"
                                        : "text-mylight cursor-pointer"
                                }`}
                            >
                                Blogs
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div
                                className={`text-md hover:text-mygreen font-bold transition-all delay-75 ${
                                    component === "Home/Contact"
                                        ? "text-mygreen scale-110"
                                        : "text-mylight cursor-pointer"
                                }`}
                            >
                                Contact
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="/contact">
                            <h1 className="text-md text-mylight hover:text-mygreen hover:font-semibold hover:scale-110 cursor-pointer transition-all delay-75">
                                Linked In
                            </h1>
                        </Link>
                        <Link href="/contact">
                            <h1 className="text-md text-mylight hover:text-mygreen hover:font-semibold hover:scale-110 cursor-pointer transition-all delay-75">
                                Github
                            </h1>
                        </Link>
                    </div>
                </div>

                <div className="font-abeeze ml-16 p-2 sm:p-8 h-full overflow-x-hidden overflow-y-scroll relative">
                    {children}
                </div>
            </div>
        </>
    );
}
