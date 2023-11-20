import { useEffect, useRef, useState } from "react";
import Welcome from "../Welcome";
import { AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Home = () => {
    const [quote, setQuote] = useState({});

    const nameRef = useRef();
    const quoteRef = useRef();
    const jobRef = useRef();

    const jsRef = useRef();

    const fetchQuote = async () => {
        try {
            const { data } = await axios.get(
                "https://quotes15.p.rapidapi.com/quotes/random/",
                {
                    headers: {
                        "X-RapidAPI-Key": import.meta.env
                            .VITE_APP_RAPID_API_TOKEN,
                        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
                    },
                }
            );
            setQuote((prevData) => ({
                ...prevData,
                data,
            }));

            gsap.fromTo(
                quoteRef.current,
                { opacity: 0 },
                {
                    duration: 3,
                    opacity: 1,
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const closeQuote = () => {
        gsap.to(quoteRef.current, {
            duration: 3,
            opacity: 0,
            onComplete: () => setQuote({}),
        });
    };

    useEffect(() => {
        var tl = gsap.timeline();

        tl.fromTo(
            nameRef.current,
            {
                opacity: 0,
                x: 1000,
            },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                fontFamily: "ABeeZee",
            }
        ).fromTo(
            jobRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                fontFamily: "Agbalumo",
            }
        );

        // var tl2 = gsap.timeline();
        // tl2.fromTo(
        //     jsRef.current,
        //     {
        //         x: -100,
        //     },
        //     {
        //         x: 100,
        //         duration: 9,
        //         repeat: -1,
        //         yoyo: true,
        //     }
        // );
    }, []);

    return (
        <Welcome>
            <div className="h-full flex flex-col gap-6 justify-between items-center z-10">
                {/* <div className="absolute bottom-[0svh] w-[200svh] opacity-20 font-abeeze">
                    <div
                        ref={jsRef}
                        className="flex font-semibold h-full w-full flex-wrap items-center justify-around"
                    >
                        <div className="text-mylight">PHP</div>
                        <div className="text-mylight">Laravel</div>
                        <div className="text-mylight">Javascript</div>
                        <div className="text-mylight">ReactJs</div>
                        <div className="text-mylight">NodeJs</div>
                        <div className="text-mylight">CSS3</div>
                        <div className="text-mylight">TailwindCSS</div>
                        <div className="text-mylight">MySQL</div>
                        <div className="text-mylight">MongoDB</div>
                        <div className="text-mylight">HTML5</div>
                    </div>
                </div> */}

                <div className="h-full w-full flex flex-col justify-center items-center relative z-10">
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2}>
                            <MeshDistortMaterial
                                color={"#656262"}
                                attach={"material"}
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <div className="absolute flex flex-col gap-2 items-center">
                        <h1
                            ref={nameRef}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-myblue to-mypink text-[48px] sm:text-[64px] font-extrabold drop-shadow-xl"
                        >
                            Bijen Hirachan
                        </h1>

                        <p
                            ref={jobRef}
                            className="text-mygreen text-[28px] md:text-[40px] font-semibold"
                        >
                            A Fullstack Developer
                        </p>
                    </div>

                    <div className="absolute bottom-2 right-2 flex flex-col items-end pl-1">
                        <div
                            ref={quoteRef}
                            className="shadow-md text-sm opacity-0 bg-mygreen rounded-md mb-4 text-mylight grid grid-cols-12"
                        >
                            <div className="col-span-11 px-2 py-1 flex flex-col items-end">
                                <p>{quote?.data?.content}</p>

                                <p>
                                    <a
                                        target="_blank"
                                        href={quote?.data?.originator?.url}
                                    >
                                        - {quote?.data?.originator?.name}
                                    </a>
                                </p>
                            </div>
                            <div className="border-mylight border-l-2 col-span-1 flex justify-center items-center">
                                <AiOutlineClose
                                    size={18}
                                    onClick={closeQuote}
                                    className="cursor-pointer hover:scale-110 transition-all delay-75 text-mylight"
                                />
                            </div>
                        </div>

                        <button
                            onClick={fetchQuote}
                            className="text-xs uppercase text-mylight font-semibold px-2 py-1 bg-gradient-to-r from-myblue to-mypink hover:-translate-x-2 transition-all delay-75"
                        >
                            Click me if you want to read a quote.
                        </button>
                    </div>
                </div>
            </div>
        </Welcome>
    );
};

export default Home;
