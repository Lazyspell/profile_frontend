import { WorkItem } from "../work-item/work-item.component";
import "./work-container.styles.scss";

export const WorkContainer = ({ experiences }) => {
    console.log(experiences);
    return (
        <>
            <div>
                <h1>Work Experience</h1>

                {experiences.map((experience, index) => (
                    <WorkItem key={index + 1} inputWork={experience} />
                ))}
            </div>
        </>
    );
};
