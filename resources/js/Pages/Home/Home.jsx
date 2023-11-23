import { useEffect, useRef, useState } from "react";
import Welcome from "../Welcome";
import { AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Modal from "@/Components/Modal";
import { Head } from "@inertiajs/react";

const Home = () => {
    const [quote, setQuote] = useState({});

    const [showModal, setShowModal] = useState(false);

    const nameRef = useRef();
    const quoteRef = useRef();
    const jobRef = useRef();

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

            setShowModal(true);
        } catch (error) {
            console.log(error);
        }
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
    }, []);

    return (
        <Welcome>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Portfolio website of Bijen Hirachan, a fullstack developer based in Leuven, Belgium."
                />
            </Head>
            <div className="h-full flex flex-col gap-6 justify-between items-center z-10">
                <Modal
                    show={showModal}
                    maxWidth="sm"
                    closeable={true}
                    onClose={() => setShowModal(false)}
                >
                    <div className="col-span-11 px-4 py-2 flex flex-col items-end ">
                        <p className="text-sm">{quote?.data?.content}</p>

                        <p>
                            <a
                                target="_blank"
                                href={quote?.data?.originator?.url}
                                className="text-sm font-semibold"
                            >
                                - {quote?.data?.originator?.name}
                            </a>
                        </p>
                    </div>
                </Modal>

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
                        <button
                            onClick={fetchQuote}
                            className="rounded shadow-2xl text-xs uppercase text-mylight font-semibold px-2 py-1 bg-gradient-to-r from-myblue to-mypink hover:-translate-y-1 transition-all delay-75"
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
