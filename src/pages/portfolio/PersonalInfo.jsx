import { useEffect, useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";

function PersonalInfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="bg-gray-200 md:flex items-center justify-center mx-auto pb-16">
            {
                info.map( (item, idx) => <div key={idx} className="pt-10 md:flex">
                       <div className="md:w-1/3 mb-10 lg:w-full mx-auto md:ml-16 items-center">
            <h1 className="font-semibold"><span className="text-6xl text-cyan-600 ">Hello!</span> <span className="text-4xl text-slate-800">I am</span>  </h1>
            <h1 className="text-4xl text-slate-800 font-bold">{item.personalInfo.name}</h1>
            <h1 className="text-5xl text-slate-900 font-bold mt-6">{item.personalInfo.title}</h1>
            <h1 className="text-slate-900 mt-5 font-semibold font-sans">{item.personalInfo.summary}</h1>

            <div className="flex">
            <h1 className=" flex items-center text-white font-[Poppins] duration-500 px-3 py-2 mx-4 rounded mt-5">
              <span className="mr-5 text-slate-800 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><FaMapMarker /></span> <span className="text-1xl text-slate-900 font-semibold">{item.personalInfo.location}</span>
            </h1>
            </div>

            {/* language */}
            <div className="flex">
            <h1 className=" flex items-center text-white font-[Poppins] duration-500 px-3 py-2 mx-4 rounded">
              <span className="mr-5 text-slate-800 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><FaLanguage /></span> <span className="text-1xl text-slate-900 font-semibold">{item.personalInfo.languages[0]} &</span><span className="text-1xl ml-3 text-slate-900 font-semibold">{item.personalInfo.languages[1]}</span>
            </h1>
            </div>
        </div>
        <div className="md:w-2/3 lg:w-full mx-auto items-center">
        <img className="rounded-full mr-10" src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?size=626&ext=jpg&ga=GA1.1.939033137.1692619858&semt=sph" alt="" />
        </div>
                </div>)
            }
        </div>
    );
}

export default PersonalInfo;