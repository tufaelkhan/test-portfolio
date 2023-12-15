import { useEffect, useState } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiGmail, SiWebtrees } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

function ContactInfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="bg-gray-200 items-center justify-center mx-auto pb-10">
            <div className="text-center">
            <h1 className="text-1xl font-semibold text-gray-700 mb-5 underline">Contact With Me</h1>
            <h1 className="text-2xl font-semibold text-gray-900 ">Lets Connect: Your Gateway to Seamless Communication.</h1>
            </div>
            {
                info.map( (item, idx) => <div key={idx} className="pt-10 md:flex">
<div className="text-1xl grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 pl-16 items-center">
                <div className="flex items-center">
                    <p className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><PiPhoneCallFill /></p>
                    <p>{item.contactInfo.phoneNumber}</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SiGmail /></p>
                    <p>{item.contactInfo.email}</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SiWebtrees /> </p>
                    <p>{item.contactInfo.personalWebsite}</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><BsGithub /> </p>
                    <p>{item.contactInfo.github}</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-2 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><RiLinkedinFill /> </p>
                    <p>{item.contactInfo.linkedin}</p>
                </div>
                
            </div>
                </div>)
            }
        </div>
    );
}

export default ContactInfo;