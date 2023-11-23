import React from "react";
import Welcome from "../Welcome";
import { Head } from "@inertiajs/react";
import { AiOutlineDownload } from "react-icons/ai";

const AboutMe = () => {
    return (
        <Welcome>
            <Head title="About Me" />
            <div className="p-4">
                <div>
                    <h1 className="text-xl text-mylight font-semibold text-right my-4 px-4">
                        About Me
                    </h1>
                </div>

                <div className="bg-mydark h-[80svh]  rounded-lg overflow-x-hidden overflow-y-scroll w-full flex flex-col gap-2 items-center py-16">
                    <a
                        className="fixed bottom-8 right-4 z-50"
                        href="/bijen_hirachan.pdf"
                        download
                    >
                        <button className="flex uppercase items-center gap-2 text-mylight text-xs border px-2 py-1 rounded border-mylight hover:border-myblue hover:text-myblue transition-all delay-75">
                            <AiOutlineDownload size={16} />
                            Download CV
                        </button>
                    </a>
                    <div className="bg-mylight mx-8 p-4 rounded text-mydark text-sm flex flex-col gap-2">
                        <p className="">Hey there! I'm Bijen Hirachan.</p>
                        <p>
                            A fullstack developer based in Leuven, Belgium. I
                            was born in Pokhara, Nepal. After completing my
                            bachelors degree, I moved to Germany.
                        </p>
                    </div>

                    <div className="flex sm:hidden flex-col items-start justify-start gap-2  mt-16">
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-15%] left-8">
                                <p>Landed on Dusseldorf Airport, Germany</p>
                                <div className="bg-mygreen px-2 py-1 w-[82px] text-mylight rounded absolute bottom-[-30%] right-[-5%]">
                                    May 2014
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-25%] left-8">
                                <p>
                                    Joined Hochscule Rheinwaal (Msc. Information
                                    Engineering and Computer Science)
                                </p>
                                <div className="bg-mygreen px-2 py-1 w-[84px] text-mylight rounded absolute bottom-[-25%] right-[-5%]">
                                    Sept 2014
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-15%] left-8">
                                <p>Graduated from Hochschule Rheinwaal</p>
                                <div className="bg-mygreen px-2 py-1 w-[84px] text-mylight rounded absolute bottom-[-30%] right-[-5%]">
                                    Sept 2018
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-10%] left-8">
                                <p>Came to Belgium</p>
                                <div className="bg-mygreen px-2 py-1 w-[82px] text-mylight rounded absolute bottom-[-40%] right-[-5%]">
                                    Oct 2018
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-10%] left-8">
                                <p>Started learning Dutch</p>
                                <div className="bg-mygreen px-2 py-1  text-mylight rounded absolute bottom-[-40%] right-[-5%]">
                                    2019
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-15%] left-8">
                                <p>Followed online PHP training, VDAB</p>
                                <div className="bg-mygreen px-2 py-1  text-mylight rounded absolute bottom-[-30%] right-[-5%]">
                                    2020
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                                <div className="h-full w-2 bg-myblue/80 rounded-full"></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-15%] left-8">
                                <p>
                                    Followed an IBO programme, VBDesign Hasselt
                                </p>
                                <div className="bg-mygreen px-2 py-1 w-[160px] text-mylight rounded absolute bottom-[-35%] right-[-5%]">
                                    Aug 2021 - Feb 2022
                                </div>
                            </div>
                        </div>
                        <div className="flex  w-[260px] relative">
                            <div className="flex flex-col items-center gap-2 h-24">
                                <div className="h-4 w-4 bg-myblue/80 rounded-full "></div>
                            </div>

                            <div className="text-sm w-[220px]  bg-mylight text-mydark p-2 rounded absolute top-[-15%] left-8">
                                <p>
                                    Worked as Laravel Developer, VBDesign
                                    Hasselt
                                </p>
                                <div className="bg-mygreen px-2 py-1 w-[160px] text-mylight rounded absolute bottom-[-35%] right-[-5%]">
                                    Feb 2022 - Nov 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col gap-2  mt-16">
                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm w-[82px] bg-mygreen text-mylight absolute top-[-50%] right-8 px-2 py-1 rounded">
                                        May 2014
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm w-[250px] bg-mylight text-mydark px-2 py-1 rounded absolute top-[-12%] left-8">
                                Landed on Dusseldorf Airport, Germany
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm  w-[84px]  bg-mygreen text-mylight  absolute top-[-50%] left-8 px-2 py-1 rounded">
                                        Sept 2014
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm bg-mylight text-mydark px-2 py-1  w-[250px] rounded absolute top-[-18%] right-8">
                                Joined Hochscule Rheinwaal (Msc. Information
                                Engineering and Computer Science)
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm w-[84px] bg-mygreen text-mylight absolute top-[-50%] right-8 px-2 py-1 rounded">
                                        Sept 2018
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm bg-mylight text-mydark px-2 py-1 w-[250px] rounded absolute top-[-12%] left-8">
                                Graduated from Hochschule Rheinwaal
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm w-[84px] bg-mygreen text-mylight absolute top-[-50%] left-8 px-2 py-1 rounded">
                                        Oct 2018
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm bg-mylight w-[250px] text-mydark px-2 py-1 rounded absolute top-[-5%] right-8">
                                Came to Belgium
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm bg-mygreen text-mylight absolute top-[-50%] right-8 px-2 py-1 rounded">
                                        2019
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm bg-mylight text-mydark px-2 py-1 w-[250px] rounded absolute top-[-5%] left-8">
                                Started learning Dutch
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm bg-mygreen text-mylight absolute top-[-50%] left-8 px-2 py-1 rounded">
                                        2020
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm bg-mylight text-mydark px-2 py-1 w-[250px] rounded absolute top-[-5%] right-8">
                                Followed online PHP training, VDAB
                            </div>
                        </div>
                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-36">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm w-[160px] bg-mygreen text-mylight  absolute top-[-50%] right-8 px-2 py-1 rounded">
                                        Aug 2021 - Feb 2022
                                    </div>
                                </div>
                                <div className="h-full w-2 bg-myblue rounded-full"></div>
                            </div>

                            <div className="text-sm bg-mylight text-mydark px-2 py-1 w-[250px] rounded absolute top-[-12%] left-8">
                                Followed an IBO programme, VBDesign Hasselt
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col items-center gap-2 h-24">
                                <div className="h-4 w-4 bg-myblue rounded-full relative">
                                    <div className="text-sm w-[160px] bg-mygreen text-mylight absolute top-[-50%] left-8 px-2 py-1 rounded">
                                        Feb 2022 - Nov 2022
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm bg-mylight text-mydark px-2 py-1 w-[250px] rounded absolute top-[-12%] right-8">
                                Worked as Laravel Developer, VBDesign Hasselt
                            </div>
                        </div>
                    </div>

                    <div className="bg-mylight mx-8 p-4 rounded text-mydark text-sm flex flex-col gap-2 items-center justify-center">
                        <p>
                            Apart from developing fullstack apps, I love
                            listening to music and travelling. The technologies
                            that I use most in my works are Laravel, PHP,
                            ReactJs, javascript, TailwindCSS, MySQL, MongoDB ...
                        </p>
                    </div>
                </div>
            </div>
        </Welcome>
    );
};

export default AboutMe;
