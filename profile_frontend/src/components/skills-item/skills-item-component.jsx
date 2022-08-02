import "./skills-item.styles.scss";

export const SkillItem = ({ inputSkills }) => {
    const { tech_name, years_of_experience, tech_description, image_url } =
        inputSkills;
    console.log(inputSkills);
    return (
        <div className="skill-item-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${image_url})`,
                }}
            />
            <div className="skills-body">
                <h2>{tech_name}</h2>
                <p> {tech_description}</p>
                <span>Years of Experience: {years_of_experience}</span>
            </div>
        </div>
    );
};
