import { SkillItem } from "../skills-item/skills-item.component.jsx";
import Carousel from "react-material-ui-carousel";

import "./skills-container.styles.scss";

export const SkillsContainer = ({ skills }) => {
    const { frontend, backend, machine_learning, cloud_service } = skills;
    return (
        <>
            <h1>Backend</h1>
            <Carousel className="skill-container">
                {backend.map((skill, index) => (
                    <SkillItem key={index + 1} inputSkills={skill} />
                ))}
            </Carousel>

            <h1>Frontend</h1>
            <Carousel className="skill-container">
                {frontend.map((skill, index) => (
                    <SkillItem key={index + 1} inputSkills={skill} />
                ))}
            </Carousel>

            <h1>Machine Learning</h1>
            <Carousel className="skill-container">
                {machine_learning.map((skill, index) => (
                    <SkillItem key={index + 1} inputSkills={skill} />
                ))}
            </Carousel>

            <h1>Cloud Service</h1>
            <Carousel className="skill-container">
                {cloud_service.map((skill, index) => (
                    <SkillItem key={index + 1} inputSkills={skill} />
                ))}
            </Carousel>
        </>
    );
};
