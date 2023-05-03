import Head from 'next/head';
import Footer from "@/components/footer";
import Image from 'next/image';
import ProfilePicture from '../../public/images/selfie2.webp';
import {CustomTooltip} from '@/components/custom-tooltip';

export default function About() {
    return (
        <div>
            <Head>
                <title>Ryan Than | About Me</title>
                <meta name="description" content="About me page of Ryan Than's website."></meta>
            </Head>

            <main>
                <section className="grid grid-cols-1 md:grid-cols-[3fr_1fr] flex-wrap">

                    <div className="px-5 lg:pl-[8%] lg:pr-[4%] lg:py-[2%]">
                        <h1 className="text-4xl lg:text-5xl py-2 font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-700 animate-text">Ryan Than</h1>
                        <p className="text-lg lg:text-xl py-2 font-bold font-raleway italic">Passionate ⋅ Collaborative ⋅ Eager</p>
                        <blockquote className="p-3 my-4 border-l-4 bg-emerald-50 border-emerald-500 dark:bg-gray-800">
                            <p className="text-xl italic font-medium font-raleway leading-relaxed text-gray-900 dark:text-white">"Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun."</p>
                            <p className="text-md font-poppins dark:text-gray-400">Mary Lou Cook</p>
                        </blockquote>
                        <p className="text-lg font-raleway">
                            My career interests lie primarily in creative yet technical areas of Computer Science. I am very passionate about front-end software development projects (i.e., websites, web/mobile applications, etc.) as they often allow me to take creative liberties while simultaneously applying my technical programming abilities.
                            <br/><br/>
                            I am constantly exploring different software and design tools/frameworks to enhance the usability of the software I create and provide a seamless user experience. I have always believed that creativity drives innovation and I strive to blend the practicality of engineering with the limitless potential of the imagination in everything I work on!
                        </p>
                        <br/>
                        <h2 className="text-xl py-2 font-bold font-poppins">Background</h2>
                        <p className="text-lg font-raleway">I graduated from the University of Colorado Boulder with a degree in Computer Science (B.S.) and a minor in Creative Technology & Design (CTD) in December 2021. I am currently working as a Software Engineer at Lingoport, Inc. in Boulder, Colorado.</p>
                    </div>

                    <div className="p-5 lg:pr-[8%]">
                        <div className="rounded-full w-[100%] lg:max-w-xs h-auto mx-auto self-center bg-gradient-to-r p-[6px] from-emerald-500 via-cyan-600 to-blue-700">
                            <Image src={ProfilePicture} alt="Picture of Ryan Than" className="rounded-full w-[100%] lg:max-w-xs h-auto mx-auto lg:mr-0" priority />
                        </div>
            
                        <blockquote className="pl-3 my-4 border-l-4 bg-emerald-50 border-emerald-500 dark:bg-gray-800">
                            <h3 className="text-lg py-2 font-bold font-poppins">Education</h3>
                            <ul className="pb-3 pr-3">
                                <li><h4 className="text-md font-poppins">University of Colorado Boulder</h4></li>
                                <li><p className="text-sm italic text-gray-600 dark:text-gray-400 font-raleway">August 2017 - December 2021</p></li>
                                <li><p className="text-md font-raleway">• Computer Science (B.S.)</p></li>
                                <li><p className="text-md font-raleway">• Creative Technology & Design (Minor)</p></li>
                            </ul>
                        </blockquote>
                        <blockquote className="pl-3 my-4 border-l-4 bg-emerald-50 border-emerald-500 dark:bg-gray-800">
                            <h3 className="text-lg py-2 font-bold font-poppins">Interests</h3>
                            <ul className="pb-3 pr-3">
                                <li><p className="text-md font-raleway">• Cooking & Baking</p></li>
                                <li><p className="text-md font-raleway">• Traveling</p></li>
                                <li><p className="text-md font-raleway">• Video Games</p></li>
                            </ul>
                        </blockquote>
                    </div>
                </section>

                <section className="pb-7">
                    <h2 className="text-center text-3xl lg:text-5xl pb-4 font-poppins font-extrabold text-emerald-500">Skills</h2>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="grid grid-rows-[max-content_1fr_max-content] w-fit md:w-[40%] h-auto mx-[3%] rounded-2xl shadow-xl mb-5 md:mb-0 bg-gradient-to-b from-gray-100 from-5% via-sky-300 via-50% to-gray-100 to-95% dark:from-gray-900 dark:via-cyan-900 dark:via-50% dark:to-gray-900">
                            <h3 className="text-center font-poppins text-lg md:text-2xl font-bold p-4">Software Development</h3>
                            <ul className="flex flex-wrap px-[4%] justify-center items-center gap-3">
                                <CustomTooltip title="HTML"><li className="scale-hover-skills"><Image src="/skill-logos-software/HTML.svg" alt="HTML Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="CSS (Cascading Style Sheets)"><li className="scale-hover-skills"><Image src="/skill-logos-software/CSS.svg" alt="CSS Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Tailwind CSS"><li className="scale-hover-skills"><Image src="/skill-logos-software/Tailwind.svg" alt="Tailwind CSS Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="JavaScript"><li className="scale-hover-skills"><Image src="/skill-logos-software/JavaScript.svg" alt="JavaScript Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="TypeScript"><li className="scale-hover-skills"><Image src="/skill-logos-software/Typescript.svg" alt="TypeScript Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Node.js"><li className="scale-hover-skills"><Image src="/skill-logos-software/NodeJS.svg" alt="NodeJS Logo" width="0" height="0" className="w-28 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="React"><li className="scale-hover-skills"><Image src="/skill-logos-software/React.svg" alt="React Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="Git Version Control"><li className="scale-hover-skills"><Image src="/skill-logos-software/Git.svg" alt="Git Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="GitHub"><li className="scale-hover-skills"><Image src="/skill-logos-software/Github.svg" alt="GitHub Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Bash"><li className="scale-hover-skills"><Image src="/skill-logos-software/Bash.svg" alt="Bash Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Jenkins CI/CD"><li className="scale-hover-skills"><Image src="/skill-logos-software/Jenkins.svg" alt="Jenkins Logo" width="0" height="0" className="w-16" /></li></CustomTooltip>
                                <CustomTooltip title="Java"><li className="scale-hover-skills"><Image src="/skill-logos-software/Java.svg" alt="Java Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="Python"><li className="scale-hover-skills"><Image src="/skill-logos-software/Python.svg" alt="Python Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                            </ul>
                            <p className="p-3 text-center font-raleway text-xs md:text-sm dark:text-gray-300">...and more! I am always learning and experimenting with new software technologies.</p>
                        </div>

                        <div className="grid grid-rows-[max-content_1fr_max-content] w-fit md:w-[40%] h-auto mx-[3%] rounded-2xl shadow-xl bg-gradient-to-b from-gray-100 from-5% via-emerald-400 via-50% to-gray-100 to-95% dark:from-gray-900 dark:via-emerald-900 dark:via-50% dark:to-gray-900">
                            <h3 className="text-center font-poppins text-lg md:text-2xl font-bold p-4">Design</h3>
                            <ul className="flex flex-wrap px-[4%] justify-center items-center gap-3">
                                <CustomTooltip title="Figma"><li className="scale-hover-skills"><Image src="/skill-logos-design/Figma.svg" alt="Figma Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Adobe Illustrator"><li className="scale-hover-skills"><Image src="/skill-logos-design/Illustrator.svg" alt="Adobe Illustrator Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Adobe Photoshop"><li className="scale-hover-skills"><Image src="/skill-logos-design/Photoshop.svg" alt="Adobe Photoshop Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="Adobe InDesign"><li className="scale-hover-skills"><Image src="/skill-logos-design/InDesign.svg" alt="Adobe InDesign Logo" width="0" height="0" className="w-20 h-auto" /></li></CustomTooltip>
                                <CustomTooltip title="Adobe Dimension"><li className="scale-hover-skills"><Image src="/skill-logos-design/Dimension.svg" alt="Adobe Dimension Logo" width="0" height="0" className="w-20" /></li></CustomTooltip>
                                <CustomTooltip title="Procreate"><li className="scale-hover-skills"><Image src="/skill-logos-design/Procreate.svg" alt="Procreate Logo" width="0" height="0" className="w-20 h-auto"/></li></CustomTooltip>
                            </ul>
                            <p className="p-3 text-center font-raleway text-xs md:text-sm dark:text-gray-300">...and more! I am always eager to explore new design programs and learn more about UI/UX design.</p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        </div>
    )
}
