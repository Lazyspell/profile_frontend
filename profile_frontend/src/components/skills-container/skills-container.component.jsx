import { SkillItem } from "../skills-item/skills-item.component.jsx";
import Carousel from "react-material-ui-carousel";

import "./skills-container.styles.scss";

export const SkillsContainer = ({ skills }) => {
    const { frontend, backend, machine_learning, cloud_service } = skills;
    const categories = [backend, frontend, machine_learning, cloud_service];

    return (
        <>
            {categories.map((item) => (
                <div className="skill-div">
                    <div className="category">
                        <h1 className="skill-title">
                            Skill - {item[0].category.toUpperCase()}
                        </h1>
                        <Carousel className="skill-container">
                            {item.map((skill, index) => (
                                <SkillItem
                                    key={index + 1}
                                    inputSkills={skill}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <h1>Experience</h1>
                        <p>place holder</p>
                    </div>
                </div>
            ))}
        </>
    );
};
