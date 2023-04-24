import Head from 'next/head';
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import PortfolioCard from  "@/components/portfolio-card";

export default function Portfolio() {

    return (
        <div>
            <Head>
                <title>Ryan Than | Portfolio</title>
                <meta name="description" content="Project portfolio page."></meta>
                <meta name="author" content="Ryan Than"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/logo-icon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
            </Head>

            <main className="bg-cyan-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-950 dark:text-white min-h-screen">
                <NavigationBar />

                <section className="py-3 px-[8%]">
                    <h2 className="text-4xl lg:text-5xl py-2 font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-700">Projects</h2>
                    
                    <PortfolioCard 
                        title="Test Card" 
                        summary="This is a test description for the portfolio card." 
                        imageSrc="bg-[url(/selfie2.jpg)]" 
                        imageAlt="" 
                        software="true" design="true" industry="true" personal="true" school="true"
                        longDescription={
                        <div>
                            <h2>Test Content</h2>
                            <p>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                            <br/>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            <br/>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                            <br/>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </p>
                        </div>}
                        codeLink="test"
                        designLink="s"
                        videoLink="a"
                    />
                </section>

                <Footer/>
            </main>
        </div>
    )
}
