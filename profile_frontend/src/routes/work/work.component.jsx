import { WorkContainer } from "../../components/work-container/work-container.component";
import { ProfileContext } from "../../contexts/profile.context";
import { useContext } from "react";
import { TagCloudAnimation } from "../../components/animation/tagCloud/tagCloud.component";

import "./work.styles.scss";

export const Work = () => {
    const { experience } = useContext(ProfileContext);

    // console.log(experience[0].tech_used);

    return (
        <>
            <div className="work-container">
                <div className="work-left">
                    <WorkContainer
                        experiences={experience}
                        className="work-component"
                    />
                </div>
                <div className="work-right">
                    <div className="salt">
                        <TagCloudAnimation data={experience[0].tech_used} />
                    </div>
                </div>
            </div>
        </>
    );
};
