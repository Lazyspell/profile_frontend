import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { SkillsContainer } from "../../components/skills-container/skills-container.component";
import { ProfileContext } from "../../contexts/profile.context";
import "./skills.styles.scss";

export const Skills = () => {
    const { skills } = useContext(ProfileContext);
    return (
        <div className="skills-container">
            <SkillsContainer skills={skills} />
        </div>
    );
};
