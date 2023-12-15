import ContactInfo from "./ContactInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";
import ProjectInfo from "./ProjectInfo";
import SkillsInfo from "./SkillsInfo";


function Portfolio() {
    return (
        <div className="">
            <PersonalInfo></PersonalInfo>
            <ContactInfo></ContactInfo>
            <SkillsInfo/>
            <EducationInfo/>
            <ExperienceInfo/>
            <ProjectInfo/>
        </div>
    );
}

export default Portfolio;