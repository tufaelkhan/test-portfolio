import { useEffect, useState } from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { FaCheckDouble } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineArrowOutward } from "react-icons/md";


function ExperienceInfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="bg-gray-200 items-center justify-center mx-auto pb-10 pl-16">
            <div className="text-center">
            <h1 className="text-1xl font-semibold text-gray-700 mb-5 underline">My Experience</h1>
            <h1 className="text-2xl font-semibold text-gray-900 ">Navigating Success: Milestones in a Journey of Expertise.</h1>
            </div>
            {
                info.map( (item, idx) => <div key={idx} className="pt-10 md:flex justify-evenly gap-y-5 gap-5">
                    <div className="shadow-2xl border-2 hover:border-cyan-600 duration-500 p-3  rounded-2xl">
                <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><BiSolidInstitution /></span><span>{item.experience[0].company}</span></h1>
                <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><FaCheckDouble /></span><span>{item.experience[0].role}</span></h1>
                <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SlCalender /></span><span>{item.experience[0].duration}</span></h1>
                <h1 className="text-1xl font-bold ml-5 m-2">Responsibilities</h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[0].responsibilities[0]}</span></h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[0].responsibilities[1]}</span></h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[0].responsibilities[2]}</span></h1>
                <h1 className="text-1xl font-bold ml-5 m-2">Achievements</h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[0].achievements[0]}</span></h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[0].achievements[1]}</span></h1>
                
                
                    </div>






                    <div className="shadow-2xl border-2 hover:border-cyan-600 duration-500 p-3  rounded-2xl">
                <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><BiSolidInstitution /></span><span>{item.experience[1].company}</span></h1>
                <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><FaCheckDouble /></span><span>{item.experience[1].role}</span></h1>
                <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SlCalender /></span><span>{item.experience[1].duration}</span></h1>
                <h1 className="text-1xl font-bold ml-5 m-2">Responsibilities</h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[1].responsibilities[0]}</span></h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[1].responsibilities[1]}</span></h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[1].responsibilities[2]}</span></h1>
                <h1 className="text-1xl font-bold ml-5 m-2">Achievements</h1>
                <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span><span>{item.experience[1].achievements[0]}</span></h1>
                
                
                    </div>
                </div>)
            }
        </div>
    );
}

export default ExperienceInfo;