import { useEffect, useState } from "react";


function EducationInfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="bg-gray-200 items-center justify-center mx-auto pb-10 pl-16">
            <div className="text-center">
            <h1 className="text-1xl font-semibold text-gray-700 mb-5 underline">My Educational Qualification</h1>
            <h1 className="text-2xl font-semibold text-gray-900 ">Learning Beyond Limits: Nurturing Minds, Shaping Futures.</h1>
            </div>
            {
                info.map( (item, idx) => <div key={idx} className="pt-10 md:flex justify-evenly gap-y-5">
                    <div className="shadow-2xl border-2 hover:border-cyan-600 duration-500 p-3  rounded-2xl">
                <h1 className="text-2xl font-semibold mb-2">{item.education[0].institution}</h1>
                <h1 className="text-1xl font-semibold mb-1">{item.education[0].degree}</h1>
                <h1 className="text-2xl font-semibold mb-1">{item.education[0].year}</h1>
                <h1 className="font-semibold mb-1">{item.education[0].thesisTitle}</h1>

                    </div>
                    <div className="shadow-2xl border-2 hover:border-cyan-600 duration-500 p-3  rounded-2xl">
                <h1 className="text-2xl font-semibold mb-2">{item.education[1].institution}</h1>
                <h1 className="text-1xl font-semibold mb-1">{item.education[1].degree}</h1>
                <h1 className="text-2xl font-semibold mb-1">{item.education[1].year}</h1>
                <h1 className="font-semibold mb-1">{item.education[1].honors[0]}</h1>

                    </div>
                </div>)
            }
        </div>
    );
}

export default EducationInfo;