import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import {BiSun, BiMoon, BiUpArrowCircle} from "react-icons/bi";

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function ToggleDarkMode() {
    const [theme, setTheme] = useState("dark");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return [colorTheme, setTheme];
}

function Footer() {
    const [colorTheme, setTheme] = ToggleDarkMode();

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: "white",
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'white',
          color: "black",
          maxWidth: 200,
          fontSize: "0.95rem",
          marginBottom: "10px !important",
          fontFamily: 'Raleway',
          fontWeight: "bold",
          textAlign: "center"
        },
    }));

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className={`flex justify-center w-full pb-2 px-2 ${currentRoute === "/" ? 'md:justify-end' : 'md:justify-between'}`}>
            <div className={`${currentRoute === "/" ? 'hidden' : 'hidden md:flex md:gap-2'}`}>
                <a href="https://github.com/ryanthan" target="_blank" className="focus:outline-cyan-500">
                    <AiFillGithub className="text-2xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
                </a>
                <a href="https://www.linkedin.com/in/ryan-than/" target="_blank" className="focus:outline-cyan-500">
                    <AiFillLinkedin className="text-2xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
                </a>
            </div>

            <div className="flex gap-2">
                <CustomTooltip title="Scroll To Top">
                    <div><BiUpArrowCircle className="text-2xl hover:text-emerald-500 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/></div>
                </CustomTooltip>
                <CustomTooltip title={`${colorTheme === "light" ? "Change To Light Mode" : "Change To Dark Mode"}`}>
                    <div>{colorTheme === "light" 
                        ? (<BiSun className="text-2xl hover:text-emerald-500 cursor-pointer focus:outline-cyan-500" onClick={() => setTheme("light")}/>) 
                        : (<BiMoon className="text-2xl hover:text-blue-700 cursor-pointer focus:outline-cyan-500" onClick={() => setTheme("dark")}/>) }
                    </div>
                </CustomTooltip>
            </div>
        </div>
    );
}

export default Footer;