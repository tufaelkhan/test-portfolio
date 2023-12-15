import { PiPhoneCallFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { SiWebtrees } from "react-icons/si";


function Subcribtion() {
    return (
        <div className="bg-gray-200 mx-auto pb-16 items-center md:pl-16">
            <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-700 mb-5">Get My Latest Update</h1>
            <h1 className="text-4xl font-semibold text-gray-900 mb-5">Subscribe For Every Week Newsletter</h1>
            </div>
            <div className="sm:ml-10">

            <input className="border-2 border-cyan-600 rounded-3xl p-3 md:w-[400px] sm:ml-10 sm:mr-5 md:ml-60 md:mr-12 font-2xl" type="email" placeholder="example@gmail.com" />
            <input className="text-2xl rounded-3xl p-2 border-2 border-slate-600 pr-4 pl-4 pb-3 cursor-pointer text-white bg-slate-900 hover:border-cyan-600" type="button" value="submit" />
            </div>

            <div className="text-3xl mt-16 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
                <div className="flex items-center">
                    <p className="mr-5 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><PiPhoneCallFill /></p>
                    <p>+8801000000000</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-5 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SiGmail /></p>
                    <p>example@gmail.com</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-5 border-2 border-slate-800 p-2 rounded-full hover:text-white hover:bg-slate-800 duration-500"><SiWebtrees /></p>
                    <p>www.dribble.com</p>
                </div>
            </div>
        </div>
    );
}

export default Subcribtion;