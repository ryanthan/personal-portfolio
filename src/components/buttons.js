import Link from 'next/link';

function CodeButton(link) {
    return (
        <Link href={link.link} target="_blank" aria-label="Link to the associated project's source code on GitHub." passHref>
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-600 active:bg-cyan-950 active:text-gray-500">
                Source Code
            </span>
        </Link>
    );
}

function DesignButton(link) {
    return (
        <Link href={link.link} target="_blank" aria-label="Link to the associated project's design file." passHref>
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-600 active:bg-cyan-950 active:text-gray-500">
                Design File
            </span>
        </Link>
    );
}

function VideoButton(link) {
    return (
        <Link href={link.link} target="_blank" aria-label="Link to the associated project's video demonstration." passHref>
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-600 active:bg-cyan-950 active:text-gray-500">
                Video Demo
            </span>
        </Link>
    );
}

function OtherButton(props) {
    return (
        <Link href={props.link} target="_blank" aria-label={`Link to the associated project's ${props.label}`} passHref>
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-600 active:bg-cyan-950 active:text-gray-500">
                {props.label}
            </span>
        </Link>
    );
}

export {CodeButton, DesignButton, VideoButton, OtherButton};