import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

function ProjectInfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="bg-gray-200 items-center justify-center mx-auto pb-10">
        <div className="text-center">
        <h1 className="text-1xl font-semibold text-gray-700 mb-5 underline">My Latest Project</h1>
        <h1 className="text-2xl font-semibold text-gray-900 ">Who you are, your expertise, and passion for design</h1>
        </div>
        {
            info.map( (item, idx) => <div key={idx} className=" ml-16">
                <div className="md:flex gap-x-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <img className=" mr-7 rounded-xl" src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="md:w-1/2 p-5 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl font-semibold mb-5 mt-5"><span className=""></span><span>{item.projects[0].title}</span></h1>
                    <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SlCalender /></span><span>{item.projects[0].year}</span></h1>
                    <h1>{item.projects[0].description}</h1>
                    <h1 className="text-1xl font-bold ml-5 m-2">Technologies Uses</h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[0].technologies[0]}<span></span></h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[0].technologies[1]}<span></span></h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[0].technologies[2]}<span></span></h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[0].technologies[3]}<span></span></h1>
                    </div>
                </div>

                {/* second project */}
                <div className="md:flex gap-x-7 mt-10 items-center justify-center">
                <div className="md:w-1/2 p-5 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl font-semibold mb-5 mt-5"><span className=""></span><span>{item.projects[1].title}</span></h1>
                    <h1 className="text-2xl font-semibold mb-2 flex items-center"><span className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SlCalender /></span><span>{item.projects[1].year}</span></h1>
                    <h1>{item.projects[1].description}</h1>
                    <h1 className="text-1xl font-bold ml-5 m-2">Technologies Uses</h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[1].technologies[0]}<span></span></h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[1].technologies[1]}<span></span></h1>
                    <h1 className="font-semibold mb-1 flex items-center"><span className="mr-2 p-2 "><MdOutlineArrowOutward /></span>{item.projects[1].technologies[2]}<span></span></h1>
                    </div>
                    <div className="md:w-1/2">
                        <img className="rounded-xl" src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fHww" alt="" />
                    </div>
                    
                </div>
            </div>)
        }
    </div>
    );
}

export default ProjectInfo;