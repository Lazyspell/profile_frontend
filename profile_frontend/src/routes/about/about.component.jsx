import "./about.styles.scss";
import { AnimatedSphere } from "../../components/animation/cloudSphere/cloudSphere.component";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/profile.context";
import { QuotesContainer } from "../../components/quotes-container/quotes-container.component";

export const About = () => {
    const { contact } = useContext(ProfileContext);
    const { about_my_career } = contact;
    const { quotes } = useContext(ProfileContext);
    return (
        <>
            <div className="about-main-container">
                <div className="split left">
                    <div className="about-title-container">
                        <h1 className="text-header">Me, Myself, & I</h1>
                    </div>
                    <div className="adjust-center">
                        <div className="about-header"></div>
                        <div className="about-message">
                            <div
                                className="text-message"
                                dangerouslySetInnerHTML={{
                                    __html: about_my_career,
                                }}
                            />
                        </div>
                    </div>
                    <div className="about-quotes-container">
                        <QuotesContainer quotes={quotes} className="test" />
                    </div>
                </div>

                <div className="split right">
                    <div className="centered">
                        <AnimatedSphere className="test" />
                    </div>
                </div>
            </div>
        </>
    );
};
