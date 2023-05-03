import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

import { useTheme } from "next-themes";
import {BiSun, BiMoon, BiUpArrowCircle} from "react-icons/bi";

import {CustomTooltip} from '@/components/custom-tooltip';

function Footer() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const router = useRouter();
    const currentRoute = router.pathname;

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    return (
        <footer className={`flex justify-center w-full pb-2 px-2 ${currentRoute === "/" ? 'md:justify-end' : 'md:justify-between'}`}>
            <div className={`${currentRoute === "/" ? 'hidden' : 'hidden md:flex md:gap-2'}`}>
                <Link href="https://github.com/ryanthan" target="_blank" aria-label="Link to Ryan Than's GitHub page." passHref>
                    <AiFillGithub className="text-2xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
                </Link>
                <Link href="https://www.linkedin.com/in/ryan-than/" target="_blank" aria-label="Link to Ryan Than's LinkedIn page." passHref>
                    <AiFillLinkedin className="text-2xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
                </Link>
            </div>

            <div className="flex gap-2">
                <CustomTooltip title="Scroll To Top">
                    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} aria-label="Button to scroll the page back to the top."><BiUpArrowCircle className="text-2xl hover:text-emerald-500 cursor-pointer"/></button>
                </CustomTooltip>
                <CustomTooltip title={`${currentTheme == "dark" ? "Change To Light Mode" : "Change To Dark Mode"}`}>
                    <button onClick={() => currentTheme == "dark" ? setTheme("light") : setTheme("dark")} aria-label="Button to toggle the website's color theme between light and dark.">
                        {
                            currentTheme == "dark" 
                            ? (<BiSun className="text-2xl hover:text-emerald-500 cursor-pointer"/>) 
                            : (<BiMoon className="text-2xl hover:text-blue-700 cursor-pointer"/>)
                        }
                    </button>
                </CustomTooltip>
            </div>
        </footer>
    );
}

export default Footer;