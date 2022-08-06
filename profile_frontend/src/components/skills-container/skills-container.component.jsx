import { SkillItem } from "../skills-item/skills-item.component.jsx";
import Carousel from "react-material-ui-carousel";

import "./skills-container.styles.scss";

export const SkillsContainer = ({ skills }) => {
    return (
        <>
            <h1>Test</h1>
            <Carousel className="skill-container">
                {skills.map((skill, index) => (
                    <SkillItem key={index + 1} inputSkills={skill} />
                ))}
            </Carousel>
        </>
    );
};
