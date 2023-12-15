import { FaAngleDoubleRight } from "react-icons/fa";


function AllService() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:ml-20 md:mr-20 gap-5 sm:gap-y-5 md:gap-y-5 pb-16">

{/* ui ux section */}
        <section className="rounded-3xl shadow-2xl">
            <div className="p-6 shadow-2xl bg-slate-400">
                <img className="h-10 mb-3" src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702425600&semt=ais" alt="ui/us image" />
            <div className="flex items-center mb-4">
<span className="text-3xl font-semibold text-slate-900">UI/UX Design</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Landing Page</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">User Flow</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Wireframing</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Prototyping</span></div>
            <div className="flex items-center"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Web Site Design</span></div>

            </div>
        </section>

{/* development section  */}
        <section className="rounded-3xl shadow-2xl">
            <div className="p-6 shadow-2xl bg-slate-400">
                <img className="h-10 mb-3" src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" alt="ui/us image" />
            <div className="flex items-center mb-4">
<span className="text-3xl font-semibold text-slate-900">web Development</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">HTML/CSS</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">JavaScript</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Animation</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">React</span></div>
            <div className="flex items-center"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Express</span></div>

            </div>
        </section>

{/* Software section  */}
        <section className="rounded-3xl shadow-2xl">
            <div className="p-6 shadow-2xl bg-slate-400">
                <img className="h-10 mb-3" src="https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg" alt="Software image" />
            <div className="flex items-center mb-4">
<span className="text-3xl font-semibold text-slate-900">Software Solution</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">Java</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">MongoDB</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">TypeScript</span></div>
            <div className="flex items-center mb-3"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">SQL</span></div>
            <div className="flex items-center"><span className="mr-3"><FaAngleDoubleRight /></span>
<span className="text-1xl font-semibold text-slate-800">DevOps</span></div>

            </div>
        </section>
        </div>
    );
}

export default AllService;