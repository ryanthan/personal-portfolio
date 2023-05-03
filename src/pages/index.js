import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/footer";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Than | Home</title>
        <meta name="description" content="Home page of Ryan Than's website."></meta>
      </Head>

      <main>
        <section className="grid grid-rows-[1fr_max-content_max-content] h-[calc(100vh-78px)]">
          <div className="flex flex-col items-center justify-center text-center p-5 lg:p-[8%]">
            <h1 className="text-7xl lg:text-8xl py-2 font-poppins font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-700 animate-text">Ryan Than</h1>
            <h2 className="text-xl lg:text-3xl py-2 font-semibold font-raleway">Developer and Designer</h2>
            <p className="text-lg lg:text-xl py-2 px-10 font-raleway">
              Passionate about front-end development and UI/UX design of complex software projects.<br></br>
              Always striving to enhance software usability and provide a seamless user experience.
            </p>
          </div>

          <div className="flex flex-shrink justify-center gap-10 pb-8">
            <Link href="https://github.com/ryanthan" target="_blank" passHref aria-label="Link to Ryan Than's GitHub page." className="scale-hover">
              <AiFillGithub className="text-5xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
            </Link>
            <Link href="https://www.linkedin.com/in/ryan-than/" target="_blank" passHref aria-label="Link to Ryan Than's LinkedIn page." className="scale-hover">
              <AiFillLinkedin className="text-5xl transition-all ease-in duration-100 hover:text-emerald-600 active:text-emerald-900" />
            </Link>
          </div>

          <Footer/>
        </section>
      </main>
    </div>
  )
}
