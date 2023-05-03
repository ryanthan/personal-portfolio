import {FaCode} from 'react-icons/fa';
import {MdDesignServices, MdWork, MdSchool, MdPersonPin} from 'react-icons/md'
import {CustomTooltip} from '@/components/custom-tooltip';

function SoftwareTag() {
    return (
        <CustomTooltip title="This project involved software elements.">
            <span className="flex w-fit text-xs md:text-sm font-poppins font-semibold px-2 uppercase rounded-full text-cyan-900 bg-cyan-100 border-2 border-cyan-900 cursor-default" aria-label="A tag indicating that the associated project involved software elements.">
                <FaCode className="text-base self-center" />
                <p className="pl-1">Software</p>
            </span>
        </CustomTooltip>
    );
}

function DesignTag() {
    return (
        <CustomTooltip title="This project involved design elements.">
            <span className="flex w-fit text-xs md:text-sm font-poppins font-semibold px-2 uppercase rounded-full text-pink-900 bg-pink-100 border-2 border-pink-900 cursor-default" aria-label="A tag indicating that the associated project involved design elements.">
                <MdDesignServices className="text-base self-center" />
                <p className="pl-1">Design</p>
            </span>
        </CustomTooltip>
    );
}

function IndustryTag() {
    return (
        <CustomTooltip title="This project was worked on at an industry job position.">
            <span className="flex w-fit text-xs md:text-sm font-poppins font-semibold px-2 uppercase rounded-full text-blue-900 bg-blue-100 border-2 border-blue-900 cursor-default" aria-label="A tag indicating that the associated project was worked on at an industry job position.">
                <MdWork className="text-base self-center" />
                <p className="pl-1">Industry</p>
            </span>
        </CustomTooltip>
    );
}

function PersonalTag() {
    return (
        <CustomTooltip title="This project was worked on as a personal project.">
            <span className="flex w-fit text-xs md:text-sm font-poppins font-semibold px-2 uppercase rounded-full text-yellow-900 bg-yellow-100 border-2 border-yellow-900 cursor-default" aria-label="A tag indicating that the associated project was worked on as a personal project.">
                <MdPersonPin className="text-base self-center" />
                <p className="pl-1">Personal</p>
            </span>
        </CustomTooltip>
    );
}

function SchoolTag() {
    return (
        <CustomTooltip title="This project was worked on for a class or job at university.">
            <span className="flex w-fit text-xs md:text-sm font-poppins font-semibold px-2 uppercase rounded-full text-green-900 bg-green-100 border-2 border-green-900 cursor-default" aria-label="A tag indicating that the associated project was worked on for a class or job at university.">
                <MdSchool className="text-base self-center" />
                <p className="pl-1">School</p>
            </span>
        </CustomTooltip>
    );
}

export {SoftwareTag, DesignTag, IndustryTag, PersonalTag, SchoolTag};