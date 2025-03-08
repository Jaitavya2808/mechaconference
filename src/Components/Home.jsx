import Marquee from "react-fast-marquee";
import { Impdates } from './Impdates';
import { Speakershome } from "./Speakershome";
import { AboutUs_home } from "./HomeComponents/AboutUs_home";
import { Callforpapers_home } from "./HomeComponents/Callforpapers_home";
import { Registration_home } from "./HomeComponents/Registration_home";
import { Committees_home } from "./HomeComponents/Committees_home";
import { ContactUs_home } from "./HomeComponents/ContactUs_home";
import { Impdates_main } from "./Impdates_main";
import React, { useState, useEffect } from 'react';
import useImageWithRetry from './useImageWithRetry';
const RetryImageComponent = ({ src, alt, maxRetries = 3, retryInterval = 2000, className }) => {
    const { currentSrc, handleError, errorCount } = useImageWithRetry(src, maxRetries, retryInterval);

    return (
        <div>
            {errorCount < maxRetries ? (
                <img src={currentSrc} alt={alt} onError={handleError} className={className} />
            ) : (
                <p className="text-red-500">Failed to load image after {maxRetries} attempts.</p>
            )}
        </div>
    );
};
const openGoogleDocs = () => {
    window.open('https://drive.google.com/file/d/1Vi4ppB_apyXw-sm4799XGLts_cvIBzgX/view?usp=sharing', '_blank');
};
const openTemplate = () => {
    window.open('https://docs.google.com/document/d/1IlEeKji912TytiTfhNk2ZHoh0DCq8Iwo/edit?usp=sharing&ouid=111443267578785456162&rtpof=true&sd=true', '_blank');
};
const openSchedule = () => {
    window.open('https://drive.google.com/file/d/1l9zH4gy_ApKHx5yewnJ4ccMeJ2SVyUht/view?usp=sharing', '_blank');
};
const openGoogleSlides = () => {
    window.open('https://docs.google.com/presentation/d/1k_0mclNXirU0cDKmZRnuUcgsddScB7IF/edit?usp=drive_link&ouid=111443267578785456162&rtpof=true&sd=true', '_blank');
};
export function Home() {



    return (
        <div className="mx-auto" style={{ backgroundColor: '#F0F8FF' }}>
            <section className="text-gray-600 body-font" >
                
                <div className="relative overflow-hidden rounded-xl ">
                    
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
                        <RetryImageComponent
                            src="https://ieeeindiscon.org/assets/images/college/chowk.jpeg"
                            alt="background"
                            maxRetries={3} // Number of retry attempts
                            retryInterval={2000} // Retry interval in milliseconds (e.g., 2000ms = 2 seconds)
                            className="object-cover w-full h-full opacity-25 rounded-xl hidden md:block" // Tailwind CSS classes for the image
                        />
                        <img src="https://ieeeindiscon.org/assets/images/college/chowk.jpeg" alt="background" className="object-cover w-full h-full opacity-15 rounded-xl" />
                    </div>
                    <Marquee className="text-red-500 p-4 text-center ">
                        <i className="fa-solid fa-bullhorn px-4 "></i>
                        <span className="text-yellow-400 font-bold animate-blink pr-4"> New</span>
                        <a onClick={openSchedule} className="text-2xl text-red-500">
                            Click here to view conference schedule
                           
                        </a>
                    </Marquee>
                    
                    <Marquee className="text-red-500 p-4">
                        <i className="fa-solid fa-bullhorn px-4 "></i><a onClick={openGoogleDocs} className="text-2xl"> Click here to download brochure</a>
                        <i className="fa-solid fa-bullhorn px-4  "></i><p className="text-2xl">Selected papers out of the papers presented in ICDMT 2024 will be  recommended for publication in journal of Composites and Advanced Materials by Sage publications having an impact factor of 1.7 after rigorous peer review by the journal. The decision to accept or reject papers is at the sole discretion of chief editor.</p>
                        <i className="fa-solid fa-bullhorn px-4  "></i><a href="https://www.icdmt2024.com/sponsorship" target="_blank" className="text-2xl">Click to view sponsors</a>
                        <i className="fa-solid fa-bullhorn px-4  "></i><a href="https://www.icdmt2024.com/registration" target="_blank" className="text-2xl">Please note : Registration fees is non-refundable.</a>

                    
                    </Marquee>
                    <div className="container mx-auto font-serif">
                        <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
                            <div className="rounded-box lg:p-3 rounded w-full">
                                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">
                                    <span className="text-red-500">I</span>nternational <span className="text-red-500">C</span>onference on <span className="text-red-500">D</span>esign and <span className="text-red-500">M</span>anufacturing <span className="text-red-500">T</span>echnologies
                                </h1>
                                <p className="sm:text-3xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Theme : Design, Develop and Manufacture</p>
                                <p className="sm:text-3xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Organized by</p>

                                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Department of Mechanical Engineering
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold">
                                    Punjab Engineering College (Deemed to be University), Chandigarh
                                </h1>
                                <p className="sm:text-2xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Institute under Chandigarh Administration (Govt. of India)</p>
                                <h1 className="pt-3 sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                                    In Collaboration With
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Design Innovation Center, Department of Design
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold ">
                                    Indian Institute of Technology, Roorkee
                                </h1>
                                <p className="sm:text-2xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Funded by MHRD (Govt. of India)</p>
                                <h1 className="pt-3 sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                                    &
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Central Scientific Instruments Organisation (CSIO)
                                </h1>
                                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold ">
                                Council of Scientific & Industrial Research (CSIR)
                                </h1>
                                <h1 className="sm:text-5xl text-2xl pt-4  title-font mb-2 text-red-500 font-bold">
                                    November 8-10, 2024
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font pb-8">
                <div className="container mx-auto pt-4 lg:flex lg:items-start lg:justify-center lg:space-x-16">
                    <div className="lg:flex-1 lg:max-w-1/2">
                        <div className="pt-10 lg:pt-10 w-full">
                            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900 text-center lg:text-left">
                                About ICDMT-2024
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                            <p className="text-xl text-justify mt-4">
                            The goal of the International Conference on Design and Manufacturing Technologies (ICDMT-2024), scheduled from November 8-10, 2024, is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing, with a focus on advanced materials, to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view of product design, process design, and analysis, as well as to create and manufacture goods. The conference will feature research tracks including <a className="text-indigo-500 inline-flex items-center" href="/callforpapers" target="_blank" rel="noopener noreferrer">Materials, Composites, Design, Manufacturing Technologies, Robotics, Mechatronics and Automation, and Sustainable Circular Bioeconomy.</a>
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex-1 lg:max-w-lg flex items-center justify-center mt-10 lg:mt-0 h-80 lg:pt-20 ">
                        <div className="w-full lg:max-w-md bg-gray-200 shadow-md h-80 ">
                            <div className="pt-4 bg-gray-900 rounded-t-2xl">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white text-center lg:text-center">
                                    Important Updates
                                </h1>
                                <div className="flex justify-center">
                                    <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                                </div>
                            </div>

                            <div className="h-full w-full shadow-xl rounded-b-2xl p-4" style={{ backgroundColor: '#72A0C1' }}>
                                <marquee behavior="scroll" direction="up" scrollamount="2" onMouseOver={(e)=>{e.target.stop()}} onMouseOut={(e)=>{e.target.start()}} className="h-full w-full">
                                    <ul className=" text-xl text-white h-full flex flex-col justify-start items-start py-4 px-2 ">
                                        <li className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl " style={{ backgroundColor: '#2a52be' }}><i classname="fa-solid fa-bullhorn px-3"></i><a onClick={openSchedule}> View Conference Schedule</a></li>
                                        <li className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl " style={{ backgroundColor: '#2a52be' }}><i classname="fa-solid fa-bullhorn px-3"></i><a onClick={openGoogleSlides}> Download PPT Template</a></li>
                                        <li className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl" style={{ backgroundColor: '#2a52be' }}><i classname="fa-solid fa-bullhorn px-3"></i><a onClick={openGoogleDocs}><button>Download Conference Brochure</button></a></li>
                                        <li className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl " style={{ backgroundColor: '#2a52be' }}><i classname="fa-solid fa-bullhorn px-3"></i><a onClick={openTemplate}> <button>View Paper Template</button></a></li>
                                        <li className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl " style={{ backgroundColor: '#2a52be' }}><i classname="fa-solid fa-bullhorn px-3"></i><a href="/sponsorship"> <button>View Sponsor Packages</button></a></li>
                                        
                                       
                                    </ul>
                                </marquee>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <AboutUs_home />
            {/* <Impdates_main /> */}
            <Speakershome />
            <Callforpapers_home />
            <Registration_home />
            <Committees_home />
            <ContactUs_home />
        </div>
    )
}
