function CodeButton(link) {
    return (
        <a href={link.link} target="_blank">
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-800 active:bg-cyan-950 active:text-gray-500">
                Source Code
            </span>
        </a>
    );
}

function DesignButton(link) {
    return (
        <a href={link.link} target="_blank">
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-800 active:bg-cyan-950 active:text-gray-500">
                Design Document
            </span>
        </a>
    );
}

function VideoButton(link) {
    return (
        <a href={link.link} target="_blank">
            <span className="flex w-fit text-sm font-poppins px-3 py-1 uppercase rounded-md bg-blue-950 text-white hover:bg-cyan-800 active:bg-cyan-950 active:text-gray-500">
                Video Demo
            </span>
        </a>
    );
}

export {CodeButton, DesignButton, VideoButton};