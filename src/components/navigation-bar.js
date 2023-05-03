import { useState } from "react";
import Link from 'next/link';
import { Twirl as Hamburger } from 'hamburger-react';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { useRouter } from 'next/router';

import Image from 'next/image';
import Logo from '../../public/images/logo.webp';

function NavigationBar() {
    const [navOpen, openNav] = useState(false);
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav className={`sticky top-0 h-[78px] z-50 ${navOpen ? 'bg-gray-100 dark:bg-gray-950 md:bg-transparent md:backdrop-blur-xl dark:md:bg-transparent dark:md:backdrop-blur-xl' : 'bg-transparent backdrop-blur-xl'}`}>
            <div className="justify-between w-full px-5 mx-auto md:items-center md:flex md:px-[8%]">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-4 md:block">
                        <Link href="/" aria-label="Link to the website's home page." passHref scroll={false}>
                            <Image src={Logo} alt="Logo for Ryan Than" className="w-10 md:w-12 h-auto cursor-pointer scale-hover" />
                        </Link>
                        
                        <div className="md:hidden">
                            <button className="text-gray-900 dark:text-gray-400" onClick={() => openNav(!navOpen)} aria-label="Button to open the mobile navigation menu.">
                                <Hamburger rounded label="Toggle navigation menu." toggled={navOpen} toggle={openNav} />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={` 
                        ${navOpen 
                            ? 'fixed left-0 top-auto bg-gray-100 dark:bg-gray-950 shadow-2xl w-full h-auto ease-out duration-300 md:relative md:w-full md:h-auto md:bg-transparent md:shadow-none dark:md:bg-transparent dark:md:shadow-none' 
                            : 'fixed left-[-100%] bg-transparent shadow-none top-auto h-auto md:relative md:w-full md:left-0'}`
                    }>
                        <ul className="text-xl font-raleway md:flex md:items-center md:w-auto md:flex-row w-full flex-col items-center text-center">
                            <li className="py-2 md:py-0">
                                <Link href="/portfolio" className="group transition duration-300 active:text-gray-400 dark:active:text-gray-700" passHref scroll={false} aria-label="Link to the website's portfolio page." onClick={() => openNav(false)}>Portfolio
                                    <span className={`${currentRoute === "/portfolio" ? 'block max-w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-700' : 'block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-gradient-to-r from-emerald-500 to-blue-700'}`}></span>
                                </Link>
                            </li>
                            <li className="py-2 md:ml-6 md:py-0">
                                <Link href="/about" className="group transition duration-300 active:text-gray-400 dark:active:text-gray-700" passHref scroll={false} aria-label="Link to the website's about me page." onClick={() => openNav(false)}>About
                                    <span className={`${currentRoute === "/about" ? 'block max-w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-700' : 'block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-gradient-to-r from-emerald-500 to-blue-700'}`}></span>
                                </Link>
                            </li>
                            <li className="py-2 md:ml-6 md:py-0">
                                <Link href="/documents/ryan-than-resume.pdf" alt="Resume" target="_blank" rel="noopener noreferrer" className="group transition duration-300 active:text-gray-400 dark:active:text-gray-700" passHref scroll={false} aria-label="Link to open Ryan Than's resume in a different tab." onClick={() => openNav(false)}>Resume
                                    <span className={`${currentRoute === "/resume" ? 'block max-w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-700' : 'block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-gradient-to-r from-emerald-500 to-blue-700'}`}></span>
                                </Link>
                            </li>
                            <li className="py-2 pb-5 md:py-0 md:pb-0">
                                <Link href="mailto:thanryan789@gmail.com" className="relative md:ml-6 py-2 overflow-hidden rounded-lg group bg-gradient-to-br from-emerald-500 to-blue-700 group-hover:from-emerald-500 group-hover:to-blue-700s active:from-emerald-700 active:to-blue-900" passHref scroll={false} aria-label="Link to send an email to Ryan Than." onClick={() => openNav(false)}>
                                    <span className="relative px-2.5 py-2 rounded-lg transition-all ease-in duration-100 text-white bg-gray-900 dark:text-gray-900 dark:bg-white group-hover:bg-opacity-0 dark:hover:text-white">
                                        Contact Me
                                    </span>
                                </Link>
                            </li>
                        </ul>

                        <div className={`${navOpen ? 'flex justify-center gap-7 pb-3 md:hidden' : 'hidden'}`}>
                            <Link href="https://github.com/ryanthan" target="_blank" passHref scroll={false} aria-label="Link to Ryan Than's GitHub page.">
                                <AiFillGithub className="text-5xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/ryan-than/" target="_blank" passHref scroll={false} aria-label="Link to Ryan Than's LinkedIn page.">
                                <AiFillLinkedin className="text-5xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
                            </Link>
                        </div>

                        <div className={`${navOpen ? 'fixed top-auto left-0 w-full h-screen bg-black opacity-60 md:hidden' : 'hidden'}`} onClick={() => openNav(!navOpen)}></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;