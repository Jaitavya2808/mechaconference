import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel } from "flowbite-react";
export function Callforpapers_home() {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time for larger screens
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1700, // Auto scroll after every 3 seconds
        arrows: true, // Show arrow navigation
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Show only 1 card at a time for mobile devices
                },
            },
        ],
    };
    return (
        <div className="w-3/4 m-auto pt-8">
            <div className="container  mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="lg:w-full lg:mb-0 ">
                        <h1 className="sm:text-6xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Call For Papers
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div>
                <Slider {...settings} className='pt-10 px-0 mx-0 '>

                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl ">
                        <div className="absolute inset-0 z-0">
                            <img src="https://www.aiche.org/sites/default/files/styles/aiche_content/public/images/pageset/lead/materials.jpg?itok=jJc3j1x6" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2 text-2xl">Track -1 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Materials</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Materials behaviour</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Metals and Alloys</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Ceramic Materials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Polymeric Materials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Advanced Nanomaterials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Smart Materials and their applications</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Sustainable and Recycled Materials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Functionally graded materials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-atom"></i></div>
                                            <div>Superconductors</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnWaMAHNPWLwyf4R1ORyxZxJb7quDSpE_0YoOp5KUweF6IYwd8s512BY3SLplcTv1sQg&usqp=CAU" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 2 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Composites</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Nanocomposites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Hybrid composites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Bio-composites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Green Composites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Multi-functional composites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Recycled waste-based composites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Delamination, damage, fracture, failure, fatigue and durability of composites</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-minimize"></i></div>
                                            <div>Metal matrix composites</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://t3.ftcdn.net/jpg/03/21/87/58/360_F_321875802_aAtoxcTHoEMkI2lwcJXh6r4NVdyjh6y8.jpg" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 3 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Design</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Finite Element Analysis</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Differential/Dynamical systems</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Modelling & Simulation</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Cryogenic Materials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Multi-scale analysis</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Advanced Numerical Techniques in Engineering Structures</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Tribology, Nano mechanics and MEMS</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-regular fa-object-group"></i></div>
                                            <div>Fracture and Failure Mechanics</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/700E4D82-4F55-4EE1-9B6CA0C194C84956/182DC208-2737-40B8-A720EEBF9FA9B88F/WebsiteJpg_XL-FMTEC_Main%20Visual_Red_Website.jpg" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 4 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Manufacturing Technologies</h3>
                            <ul className='text-left mt-10'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Advanced finishing Processes</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Metal Joining Processes</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Metal Forming Processes</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Powder Metallurgy</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Additive Manufacturing</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Modelling, Simulation and Optimisation of manufacturing processes</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-industry"></i></div>
                                            <div>Quality & Reliability in manufacturing</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230415/pngtree-ai-robot-innovation-high-tech-ppt-robot-template-background-image-image_2207016.jpg" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 5 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Robotics</h3>
                            <ul className='text-left sm:mt-8'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Reconfigurable manipulator</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Human Centric Robotics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Soft Robotics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Industrial Robotics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Agriculture and Field Robotics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Bionic robotics, autonomous and evolutionary robotics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Robotics and Mechanical Engineering</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-robot"></i></div>
                                            <div>Mobile and Autonomous Systems</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://www.ecpi.edu/sites/default/files/Mechatronics%20Tech%20Dec%2028.png" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 6 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Mechatronics and Automation</h3>
                            <ul className='text-left sm:mt-6 sm:mb-4'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Mechatronic system Design</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Industrial Control</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Manufacturing mechatronics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Real Time Supervisory Control</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Micro and Nano Mechatronics</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Industry 4.0 and 5.0 technologies and its applications</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-lightbulb"></i></div>
                                            <div>Information Technology in Automation</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl ">
                        <div className="absolute inset-0 z-0">
                            <img src="https://www.aiche.org/sites/default/files/styles/aiche_content/public/images/pageset/lead/materials.jpg?itok=jJc3j1x6" alt="background" className="object-cover w-full h-full opacity-10 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2 text-2xl">Track -7 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Sustainable Circular Bio Economy</h3>
                            <ul className='text-left'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-earth-americas"></i></div>
                                            <div>Sustainable Manufacturing Practices</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-earth-americas"></i></div>
                                            <div>Smart Manufacturing and Industry 4.0</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-earth-americas"></i></div>
                                            <div>Precision Engineering and Design</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-earth-americas"></i></div>
                                            <div>Agriculture and Rural Innovations</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-earth-americas"></i></div>
                                            <div>Energy Efficiency and Management</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-earth-americas"></i></div>
                                            <div>Waste Management and Resource Recovery</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    {/* <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl">
                        <div className="absolute inset-0 z-0">
                            <img src="https://nenews.in/wp-content/uploads/2022/12/Railway-Coach-Factory.jpg" alt="background" className="object-cover w-full h-full opacity-15 rounded-xl" />
                        </div>
                        <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                        </div>
                        <div className="p-4 text-center" >
                            <p className=" font-semibold mb-2  sm:text-2xl text-xl">Track - 7 </p>
                            <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">Railway Vehicle Dynamics</h3>
                            <ul className='text-left sm:mt-10 sm:mb-20'>
                                <li>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-train"></i></div>
                                            <div>Real-time monitoring of rail coaches</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-train"></i></div>
                                            <div>Automation in railway coaches</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-train"></i></div>
                                            <div>Sustainable and green materials</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-train"></i></div>
                                            <div>Sensors and actuators for railway coach</div>
                                        </div>
                                    </a>
                                </li>
                                <li className='pt-2'>
                                    <a className='sm:text-2xl text-xl'>
                                        <div class="flex items-center space-x-3">
                                            <div><i class="fa-solid fa-train"></i></div>
                                            <div>Risk assessment and mitigation strategies</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div> */}

                </Slider>

            </div>
            <div className="flex justify-center items-center mt-10 pt-2">
                <a href="/callforpapers" className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl inline-block">
                    View All Tracks
                </a>
            </div>

        </div>
    );
}
