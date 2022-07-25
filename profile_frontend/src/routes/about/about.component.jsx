import "./about.styles.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimatedSphere } from "../../components/animation/cloudSphere/cloudSphere.component";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/profile.context";

export const About = () => {
    const { contact } = useContext(ProfileContext);
    const { about_my_career } = contact;
    return (
        <>
            <div className="main-container">
                <div className="split left">
                    <div className="adjust-center">
                        <div className="about-header">
                            <h1 className="text-header">Me, Myself, & I</h1>
                        </div>
                        <div className="about-message">
                            <p className="text-message">{about_my_career}</p>
                        </div>
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
