import { FaRegUserCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";


function HappyClient() {
    return (
        <div className="bg-gray-200 md:flex mx-auto pb-16 pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 mx-auto items-center gap-x-5 gap-y-5"> 
                {/* customer */}
                <div className="flex p-4 hover:border-2 border-cyan-500 rounded-lg duration-1000 shadow-2xl bg-gray-300">
                   <div className=" mt-3 mr-4 text-4xl">
                   <FaRegUserCircle />
                    </div> 
                   <div>
                    <p className="font-bold text-gray-950 text-5xl">280 +</p>
                    <p className="font-semibold text-gray-800">Happy Client</p>
                    </div> 
                </div>

                {/* complete project */}
                <div className="flex p-4 hover:border-2 border-cyan-500 rounded-lg duration-1000 shadow-2xl bg-gray-300">
                   <div className="mt-3 mr-4 text-4xl">
                   <GrProjects />
                    </div> 
                   <div>
                    <p className="font-bold text-gray-950 text-5xl">28 +</p>
                    <p className="font-semibold text-gray-800">Complete Project</p>
                    </div> 
                </div>

                {/* experience */}
                <div className="flex p-4 hover:border-2 border-cyan-500 rounded-lg duration-1000 shadow-2xl bg-gray-300">
                   <div className="mt-3 mr-4 text-4xl">
                   <SlCalender />
                    </div> 
                   <div>
                    <p className="font-bold text-gray-950 text-5xl">11 +</p>
                    <p className="font-semibold text-gray-800">Years Of Experience</p>
                    </div> 
                </div>

                {/* ongoing */}
                <div className="flex p-4 hover:border-2 border-cyan-500 rounded-lg duration-1000 shadow-2xl bg-gray-300">
                   <div className="mt-3 mr-4 text-4xl">
                   <AiOutlineFundProjectionScreen />
                    </div> 
                   <div>
                    <p className="font-bold text-gray-950 text-5xl">10 +</p>
                    <p className="font-semibold text-gray-800">Ongoing Project</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default HappyClient;