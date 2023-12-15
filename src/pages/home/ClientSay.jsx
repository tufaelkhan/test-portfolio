import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function ClientSay() {
    return (
        <div className="bg-gray-200 mx-auto pb-16 pt-16">
            <div className="text-start md:ml-20 mb-10">
            <h1 className="text-gray-800 text-2xl font-semibold mb-5 font-[Poppins]">Testimonial</h1>
            <h1 className="text-3xl font-bold text-slate-900 font-[Poppins]">Insider Perspectives: Crafting the Ultimate Review Experience</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto items-center gap-x-5 gap-y-5 mb-10 md:ml-16 justify-evenly">

            <div className="p-7 pt-10 hover:border-2 border-cyan-500 rounded-lg shadow-2xl bg-gray-300 transition duration-500 ease-in-out delay-150 h-80">
                   <div>
                   <p className="text-5xl text-gray-800"><RiDoubleQuotesL /></p>
                   </div>
                   <div>
                    <p className="text-gray-900 font-serif"><span>Exceptional service, exceeded expectations. Prompt, professional, and friendly. Highly recommend for quality and reliability. Top-notch experience overall.</span> 
                    </p>
                    <span className="text-5xl text-gray-800"><RiDoubleQuotesR /></span>
                    
                   </div>
                   <p className="text-gray-800 font-sans font-semibold mt-3 text-2xl">Hasib Hossain, Developer</p>
                
                </div>

            <div className="p-7 pt-10 hover:border-2 border-cyan-500 rounded-lg shadow-2xl bg-gray-300 transition duration-500 ease-in-out delay-150 h-80">
                   <div>
                   <p className="text-5xl text-gray-800"><RiDoubleQuotesL /></p>
                   </div>
                   <div>
                    <p className="text-gray-900 font-serif"><span>Transparent communication, attention to detail, and timely delivery make this service a standout choice. A truly satisfying and seamless experience.</span> 
                    </p>
                    <span className="text-5xl text-gray-800"><RiDoubleQuotesR /></span>
                    
                   </div>
                   <p className="text-gray-800 font-sans font-semibold mt-3 text-2xl">Sujoy Das, Developer</p>
                
                </div>

            <div className="p-7 pt-10 hover:border-2 border-cyan-500 rounded-lg shadow-2xl bg-gray-300 transition duration-500 ease-in-out delay-150 h-80">
                   <div>
                   <p className="text-5xl text-gray-800"><RiDoubleQuotesL /></p>
                   </div>
                   <div>
                    <p className="text-gray-900 font-serif"><span>Remarkable expertise, personalized approach. Effortlessly surpassed my expectations. Consistent excellence – a testament to their commitment and professionalism.</span> 
                    </p>
                    <span className="text-5xl text-gray-800"><RiDoubleQuotesR /></span>
                    
                   </div>
                   <p className="text-gray-800 font-sans font-semibold mt-3 text-2xl">Jahid Khan, Developer</p>
                
                </div>
            </div>
        </div>
    );
}

export default ClientSay;