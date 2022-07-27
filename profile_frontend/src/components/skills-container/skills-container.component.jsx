import { SkillItem } from "../skills-item/skills-item-component.jsx";
import "./skills-container.styles.scss";

export const SkillsContainer = ({ skills }) => {
    return (
        <div className="skill-container">
            {skills.map((skill, index) => (
                <SkillItem key={index + 1} inputSkills={skill} />
            ))}
        </div>
    );
};
