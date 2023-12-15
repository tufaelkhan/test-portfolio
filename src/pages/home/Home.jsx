import ClientSay from "./ClientSay";
import HappyClient from "./HappyClient";
import Service from "./Service";
import Subcribtion from "./Subcribtion";
import Welcome from "./Welcome";

function Home() {
    return (
        <div className="font-[Poppins]">
            <Welcome></Welcome>
            <Service></Service>
            <HappyClient></HappyClient>
            <ClientSay></ClientSay>
            <Subcribtion></Subcribtion>
            
        </div>
    );
}

export default Home;