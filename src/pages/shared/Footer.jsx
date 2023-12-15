import { TbBrandFacebookFilled } from "react-icons/tb";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";

function Footer() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pl-16 pt-16 text-white justify-center pb-14">
            <div className="mr-10">
                <p className="text-3xl"> © 2023 Tufael Khan</p>
                <p className="mt-4 text-slate-400">Passionate web developer dedicated to crafting seamless digital experiences. Expertise in front-end and back-end technologies. Lets bring your ideas to life!</p>
            </div>
            <div>
                <div>
                <p className="text-3xl font-bold ml-7"> Follow Me</p>
                </div>
                <div className="flex mt-8 items-center">
                <p className="mr-5 text-4xl border-2 border-white p-2 rounded-full hover:text-slate-900 hover:bg-white duration-500"><TbBrandFacebookFilled /></p>
                <p className="mr-5 text-4xl border-2 border-white p-2 rounded-full hover:text-slate-900 hover:bg-white duration-500"><RiLinkedinFill /></p>
                <p className="mr-5 text-4xl border-2 border-white p-2 rounded-full hover:text-slate-900 hover:bg-white duration-500"><FaTwitter /></p>
                </div>
            </div>
            <div className="ml-10">
                <div>
                <p className="text-3xl"> Address</p>
                </div>
                <div className="flex items-center mt-4">
                    <p className="mr-5 border-2 border-white p-2 rounded-full hover:text-slate-800 hover:bg-white duration-500"><FaMapMarkerAlt /></p>
                    <p>Chandpur, Bangladesh.</p>
                </div>
                <div className="flex items-center mt-2">
                    <p className="mr-5 border-2 border-white p-2 rounded-full hover:text-slate-800 hover:bg-white duration-500"><SiGmail /></p>
                    <p>example@gmail.com</p>
                </div>
                <div className="flex items-center mt-2">
                    <p className="mr-5 border-2 border-white p-2 rounded-full hover:text-slate-800 hover:bg-white duration-500"><FaPhoneVolume /></p>
                    <p>+85654120105</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;