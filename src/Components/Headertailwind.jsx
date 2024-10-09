import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menuitems } from './Menuitems.js';
import Typewriter from "typewriter-effect";
import main_logo from './main_logo.jpeg'
//import logo_nobg from './logo_nobg.png'
import pec_nobg from './pec_nobg.png'
import pec_circle from './pec_circle.png'
import logo_nobg_final_2 from './logo_nobg_final_2.png'
import csirlogo from './csirlogo.png'
import dsirlogo from './dsirlogo.png'
import nserbfinal from './nserbfinal.png'
import deefinal from './deefinal.png'
export function Headertailwind() {
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-gray-900 md:pb-5 pt-5">
            <div className="container mx-auto    lg:mx-auto flex items-center justify-between py-4 lg:max-w-screen-xl lg:flex lg:items-center lg:justify-between ">
                <div className="flex items-center space-x-2 lg:flex lg:items-center lg:justify-center md:justify-between lg:space-x-8 lg:mx-auto">
                <a href="/">
    <img className="h-16 w-20 md:h-20 lg:h-36 lg:w-36" src={pec_circle} alt="peclogo" />
</a>
<a href="/" className="hidden sm:block">
    <img className="h-16 w-20 md:h-20 lg:h-36 lg:w-36" src={csirlogo} alt="csirlogo" />
</a>
<a href="/" className="hidden sm:block">
    <img className="h-16 w-20 md:h-20 lg:h-36 lg:w-36" src={dsirlogo} alt="dsirlogo" />
</a>
<a href="/">
    <img className="h-16 w-40 sm:h-36 md:h-20 lg:h-36 lg:w-80" src={logo_nobg_final_2} alt="mainlogo" />
</a>
<a href="/" className="hidden sm:block">
    <img className="h-16 w-20 md:h-20 lg:h-36 lg:w-36" src={nserbfinal} alt="nserblogo" />
</a>
<a href="/" className="hidden sm:block">
    <img className="h-16 w-32 md:h-20 lg:h-36 lg:w-44" src={deefinal} alt="deefinal" />
</a>
<a href="/">
    <img className="h-16 w-20 md:h-20 lg:h-36 lg:w-36" src="https://iitr.ac.in/Centres/International%20Centre%20of%20Excellence%20for%20Dams/assets/b62ae2df8a426804bc7c58955ceeb977e240a0727ae0018eb62a6c637ab5b135_SRIC.png" alt="iitrlogo" />
</a>

                    <button onClick={toggleMobileMenu} className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 ml-4" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

            </div>



            <div className={`max-w-screen-xl mx-auto ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="font-large flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md: bg-gray-80 border-gray-700 text-sm">
                    {Menuitems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className="block py-2 px-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white hover:text-white hover:bg-transparent">
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
