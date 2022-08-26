import { WorkContainer } from "../../components/work-container/work-container.styles";
import { ProfileContext } from "../../contexts/profile.context";
import { useContext } from "react";

import "./work.styles.scss";

export const Work = () => {
    const { experience } = useContext(ProfileContext);
    return (
        <>
            <div className="work-container">
                <div className="work-left">
                    <WorkContainer experiences={experience} />
                </div>
                <div className="work-right"></div>
            </div>
        </>
    );
};
