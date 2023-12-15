import { useEffect, useState } from "react";


function SkillsInfo() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('info.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="bg-gray-200 items-center justify-center mx-auto pb-10">
            <div className="text-center">
            <h1 className="text-1xl font-semibold text-gray-700 mb-5 underline">My Personal Skills</h1>
            <h1 className="text-2xl font-semibold text-gray-900 ">Skills Showcase: Bridging Vision with Technical Mastery.</h1>
            </div>
            {
                info.map( (item, idx) => <div key={idx} className="pt-10 ml-16 grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-3 gap-y-3">
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.programmingLanguages[0]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://img-c.udemycdn.com/course/240x135/4898996_e73f_24.jpg" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.programmingLanguages[1]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://contentstatic.techgig.com/photo/83117460.cms" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.programmingLanguages[2]}</p>
                    </div>

                    {/* framework and libraries */}
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://legacy.reactjs.org/logo-og.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.frameworksAndLibraries[0]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVYEFVNYZrOPPjzH0T9h9QOd4BA5MV2x2gblwsOhbewVZ03OhCzIhUo6fRfVoG6VYebE&usqp=CAU" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.frameworksAndLibraries[1]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://expressjs.com/images/express-facebook-share.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.frameworksAndLibraries[2]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img src="https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.frameworksAndLibraries[3]}</p>
                    </div>

                    {/* database */}
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8pIKcT_oTcazJ1ONJKtTRHlFBiMS6-E97Fx6oeHSgHMNtk1-rFA8fg2X8qzrElxpCl8&usqp=CAU" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.databases[0]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.databases[1]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz7XImw-2oJNtQ7ZIvWbyxFynSPohDdwkb1-EiMzGVN1oYdAzTVdqHesqdXIye1KT&usqp=CAU" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.databases[2]}</p>
                    </div>

                    {/* technologies */}
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://bunnyacademy.b-cdn.net/what-is-docker.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.toolsAndTechnologies[0]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://assets.intersystems.com/dims4/default/a9dad27/2147483647/strip/true/crop/780x422+0+0/resize/780x422!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.toolsAndTechnologies[1]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWjzi1duZqfejhAkw-uIEZ6addQ-q5aNJmlPhH0-M7qfOEzxjG4bDDRw-YZPJhr34jeQ&usqp=CAU" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.toolsAndTechnologies[2]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://slack.engineering/wp-content/uploads/sites/7/2021/05/jenkins-fire.png" alt="" />
                    <p className="font-semibold text-1xl ">{item.skills.toolsAndTechnologies[3]}</p>
                    </div>

                    {/* soft skills */}
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://imageio.forbes.com/specials-images/dam/imageserve/863497498/960x0.jpg?height=474&width=711&fit=bounds" alt="" />
                    <p className="font-semibold">{item.skills.softSkills[0]}</p>
                    </div>
                    <div className="w-24 h-20 bg-slate-800 my-auto text-white p-2 rounded-lg hover:border-2 hover:border-cyan-500 duration-500">
                    <img className="h-10" src="https://static.jobscan.co/blog/uploads/Problem-Solving-Skills.jpg" alt="" />
                    <p className="font-semibold">{item.skills.softSkills[0]}</p>
                    </div>
                </div>)
            }
        </div>
    );
}

export default SkillsInfo;