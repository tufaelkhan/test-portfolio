import { MdArrowOutward } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Welcome() {
    return (
        <div className="bg-gray-200 md:flex items-center justify-center mx-auto pb-16">
        <div className="md:w-1/3 mb-10 lg:w-full mx-auto md:ml-16 items-center">
            <h1 className="font-semibold"><span className="text-6xl text-cyan-600 ">Hello!</span> <span className="text-4xl text-slate-800">I am</span>  </h1>
            <h1 className="text-5xl text-slate-800 font-bold">Tufael Khan</h1>
            <h1 className="text-slate-900 font-semibold mt-5 font-sans">Empowering Businesses through Web Excellence</h1>

            <div className="flex">
            <button className="bg-cyan-400 flex items-center text-white font-[Poppins] duration-500 px-3 py-2 mx-4 hover:bg-cyan-500 rounded mt-16 ">
              <span className="mr-3">Portfolio</span> <span className="text-2xl"><MdArrowOutward /></span>
            </button>
            <button className="bg-slate-800 flex items-center text-white font-[Poppins] duration-500 px-3 py-2 mx-4 hover:bg-slate-900 rounded mt-16 ">
            <span className="mr-3">Hire Me</span> <span className="text-2xl"><MdArrowForwardIos /></span>
            </button>
            </div>
        </div>
        <div className="md:w-2/3 lg:w-full mx-auto items-center">
        <img className="rounded-full mr-10" src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?size=626&ext=jpg&ga=GA1.1.939033137.1692619858&semt=sph" alt="" />
        </div>
        </div>
    );
}

export default Welcome;


