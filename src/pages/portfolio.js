import Head from 'next/head';
import Link from 'next/link';
import Footer from "@/components/footer";
import PortfolioCard from  "@/components/portfolio-card";

export default function Portfolio() {

    return (
        <div>
            <Head>
                <title>Ryan Than | Portfolio</title>
                <meta name="description" content="Project portfolio page of Ryan Than's website."></meta>
            </Head>

            <main>
                <section className="py-3 px-[8%]">
                    <h1 className="text-4xl py-1 font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-700">Projects</h1>

                    <PortfolioCard 
                        title="Personal Portfolio" 
                        summary="Developed and deployed this website from scratch using NextJS 13 (React development framework) and styled with TailwindCSS. It is fully responsive, user friendly, and accessible." 
                        imageSrc="bg-[url(/images/portfolio/website-dev.webp)]" 
                        imageAlt="Person typing code on a laptop." 
                        software="true" design="false" industry="false" personal="true" school="false"
                        moreDetails="true"
                        codeLink="https://github.com/ryanthan/personal-portfolio"
                        videoLink="" designLink="" otherLink=""
                    />

                    <PortfolioCard 
                        title="Figma Plugin - Lingoport Localyzer" 
                        summary="Designed, developed, and published a Figma plugin that allows users to translate their designs quickly and efficiently into different languages."
                        imageSrc="bg-[url(/images/portfolio/plugin.webp)]" 
                        imageAlt="Infographic showing the workflow from the Figma design file to the Lingoport Localyzer plugin to a translation service of your choice and back."
                        software="true" design="true" industry="true" personal="false" school="false"
                        moreDetails="true"
                        codeLink="" designLink=""
                        videoLink="https://vimeo.com/817611549"
                        otherLabel="Plugin on Figma Marketplace" otherLink="https://www.figma.com/community/plugin/1202323341358312750/Lingoport-Localyzer"
                    />

                    <PortfolioCard 
                        title="Ludos" 
                        summary="Developed a native iOS mobile application that reads, parses, and displays information from over 500,000 video games." 
                        imageSrc="bg-[url(/images/portfolio/ludos.webp)]" 
                        imageAlt="The Ludos application logo on top of a black to red gradient background." 
                        software="true" design="true" industry="false" personal="true" school="true"
                        moreDetails="true"
                        longDescription={
                        <div>
                            <p>
                                Ludos is an iOS application created using the Swift programming language in the Xcode development environment.
                                The app presents users with an extensive list of video games gathered from the <Link href="https://rawg.io/apidocs" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">RAWG API</Link>.
                                Users are able to search for specific games, use filters to focus on their desired platforms/genres, add games to a favorites list, and find new games through the random feature.
                            </p>
                            <br/>
                            <p className="text-xs md:text-sm italic">
                                Note: This application is not intended for release on the Apple App Store. It was created for a university course and became a personal project afterwards.
                            </p>
                        </div>}
                        codeLink="https://github.com/ryanthan/RyanThan_AdvancedMobileAppDev_Spring2021/tree/master/iOS/Agile%20Project/Ludos/Ludos/Ludos"
                        designLink="https://www.figma.com/file/IVsbRBWXxU5qIoGwhI8dgJ/Ludos-Prototype?node-id=0%3A1&t=AfaNIsU7MfMVVhEU-1"
                        videoLink="https://drive.google.com/file/d/1NQGoXCEShB9E6k3Jy4DxgPsOF3YaliVb/view?usp=sharing"
                        otherLink=""
                    />

                    <PortfolioCard 
                        title="Insights Intervention" 
                        summary="For my university senior capstone project, I worked alongside four other students to develop a new React Native mobile application and enhance the overall user experience of our client's website." 
                        imageSrc="bg-[url(/images/portfolio/insights.webp)]" 
                        imageAlt="The Insights Intervention logo on a blue, green, and white background. The company's signature puppet characters are displayed above the logo." 
                        software="true" design="true" industry="false" personal="false" school="true"
                        moreDetails="true"
                        longDescription={
                        <div>
                            <p>
                                For my senior capstone project at the University of Colorado Boulder, my team and I were paired with <Link href="https://www.insightsintervention.com/" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">Insights Intervention</Link>, 
                                an evidence-based intervention with parenting, teacher, and primary grade classroom programs. We completed two primary tasks:
                            </p>
                            <ul className="list-disc list-inside pl-4 md:pl-7">
                                <li>
                                    <b>Mobile Application: </b>
                                    We utilized the <Link href="https://expo.dev/" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">Expo</Link> and <Link href="https://reactnative.dev/" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">React Native</Link> frameworks
                                    and developed the app using HTML, CSS, JavaScript, and TypeScript. The app was created as a companion to the client’s main website and provides useful information (and games) to parents, teachers, and kids.
                                </li>
                                <li>
                                    <b>Enhancing the Website: </b>
                                    I assisted in identifying and executing over 30 unique user experience enhancements on the client’s primary website.
                                    These ranged from smaller changes such as button and text sizing to more prominent changes regarding the website’s overall mobile and tablet responsiveness.
                                </li>
                            </ul>
                            <br/>
                            <p>
                                I was in charge of the overall creative design and worked on both the website and front-end of the application. We used Figma for design, Balsamiq for the initial prototyping,
                                Git for version control, and Asana for project management. The team consisted of myself, Kyran Butler, Jessica Sanborn, Tiffany Phan, and William Ness.
                            </p>
                        </div>}
                        codeLink="" videoLink="" designLink=""
                        otherLabel="Team Presentation + Demo" otherLink="https://www.youtube.com/watch?v=M3ZPvzxyyfI"
                    />

                    <PortfolioCard 
                        title="Video Games" 
                        summary="To expand my skillset as a developer and as a hobby, I enjoy working on small video games. So far I have worked with the Unity and GB Studio game engines to develop two short games." 
                        imageSrc="bg-[url(/images/portfolio/video-games.webp)]" 
                        imageAlt="A pixel art piece of a character from the game Space Invaders on a yellow brick wall." 
                        software="true" design="true" industry="false" personal="true" school="false"
                        moreDetails="true"
                        longDescription={
                        <div>
                            <p>So far, I have created:</p>
                            <ul className="list-disc list-inside pl-4 md:pl-7">
                                <li>
                                    <b>The Sea of Trees: </b>
                                    A short choose your own adventure game that has players attempting to escape a horror-filled forest. The game was developed in Unity (with the C# programming language) and can be played in your browser <Link href="https://ryanthan.itch.io/the-sea-of-trees" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">here</Link>.
                                </li>
                                <li>
                                    <b>Forgotten Sins: </b>
                                    A short, top-down adventure game that has players take on the role of an amnesiac robot trying to learn the secrets of an island. The game was developed in GB Studio and can be played in your browser <Link href="https://ryanthan.itch.io/forgotten-sins" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">here</Link>.
                                    You can find the design process documentation for this game <Link href="https://drive.google.com/file/d/1c-9W7bMMjc9dMF155u6y9ewow4agnSU7/view" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">here</Link>.
                                </li>
                            </ul>
                            <br/>
                            <p>I plan to continue exploring and developing with different game engines in the future.</p>
                        </div>}
                        codeLink="" videoLink="" designLink="" 
                        otherLabel="The Sea of Trees Source Code" otherLink="https://github.com/ryanthan/The-Sea-of-Trees"
                    />

                    <PortfolioCard 
                        title="Tactile Picture Books" 
                        summary="As an intern, I worked alongside other students to design and construct tactile picture books to provide visually impaired learners a unique way to experience popular children’s stories." 
                        imageSrc="bg-[url(/images/portfolio/tactile-book.webp)]" 
                        imageAlt="A page from the tactile book version of The Very Hungry Caterpillar. It shows 3D printed versions of a caterpillar on a leaf and the sun. Beside the objects is braille and the corresponding story text." 
                        software="false" design="true" industry="false" personal="false" school="true"
                        moreDetails="true"
                        longDescription={
                        <div>
                            <p>
                                While I was an intern with the <Link href="https://www.colorado.edu/project/bbb/" target="_blank" className="font-semibold text-emerald-700 hover:text-cyan-700 hover:underline active:text-blue-800">Build a Better Book</Link> project at CU Boulder,
                                I was able to work on two separate tactile picture books based off <em>The Very Hungry Caterpillar</em> by Eric Carle and <em>If I Crossed the Road</em> by Stephen Kroninger.
                                Through the use of braille, 3D-printed objects, touchable textures, audio narration, and more, we converted several popular children’s books into a unique tactile experience for the visually impaired.
                            </p>
                        </div>}
                        codeLink="" videoLink="" designLink="" otherLink=""
                    />

                    <PortfolioCard 
                        title="Monstrum Academy" 
                        summary="For a university class, I designed a detailed concept for a mobile application that allows players to learn a new language with a fun twist: a monster companion that they can raise and customize." 
                        imageSrc="bg-[url(/images/portfolio/monstrum-academy.webp)]" 
                        imageAlt="A mockup showing the completion of a language lesson with a monster companion encouraging the player to do better on the next lesson." 
                        software="false" design="true" industry="false" personal="false" school="true"
                        moreDetails="true"
                        longDescription=""
                        codeLink="" videoLink="" 
                        designLink="https://www.figma.com/file/9LJdj70HyoBjoF99HTXarq/Monstrum-Academy?type=design&node-id=0-1&t=RdytaDPPa5yC05BJ-0" 
                        otherLabel="Detailed Write-Up" otherLink="https://drive.google.com/file/d/1z98iaYcgGU9tHEEfubAJoNKbmA5qqD04/view"
                    />
                </section>

                <Footer/>
            </main>
        </div>
    )
}
