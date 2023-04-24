import Head from 'next/head';
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Than | Home</title>
        <meta name="description" content="Home page"></meta>
        <meta name="author" content="Ryan Than"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo-icon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
      </Head>

      <main className="bg-cyan-100 text-gray-900 dark:text-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-950">
        <section className="grid grid-rows-[max-content_1fr_max-content] min-h-screen">
          <NavigationBar />
          
          <div className="flex flex-col items-center justify-center text-center p-5 lg:p-[8%]">
            <h2 className="text-7xl lg:text-8xl py-2 font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-700">Ryan Than</h2>
            <h3 className="text-xl lg:text-3xl py-2 font-bold font-raleway">Software Developer and Designer</h3>
            <p className="text-lg lg:text-xl py-2 px-10 font-raleway">
              Passionate software developer specializing in <b>front-end</b> design (UI/UX) and development of complex software projects.<br></br>
              Always striving to enhance software usability and provide a seamless user experience.
            </p>
          </div>

          <div className="flex justify-center gap-10 pb-8">
            <a href="https://github.com/ryanthan" target="_blank" className="focus:outline-cyan-500">
              <AiFillGithub className="text-5xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
            </a>
            <a href="https://www.linkedin.com/in/ryan-than/" target="_blank" className="focus:outline-cyan-500">
              <AiFillLinkedin className="text-5xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
            </a>
          </div>

          <Footer/>
        </section>
      </main>
    </div>
  )
}
