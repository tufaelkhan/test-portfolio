import AllService from "./AllService";

function Service() {
    return (
        <div className="bg-slate-300 mx-auto justify-center items-center pt-8">
            <div className="text-start md:ml-20">
            <h1 className="text-gray-800 text-2xl font-semibold mb-5 font-[Poppins]">Get My Service</h1>
            <h1 className="text-3xl font-bold text-slate-900 font-[Poppins]">Building Digital Solutions, Transforming Businesses</h1>
            </div>
            <AllService/>
        </div>
    );
}

export default Service;