import "./about.styles.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimatedSphere } from "../../components/animation/cloudSphere/cloudSphere.component";
export const About = () => {
    return (
        <>
            <div className="main-container">
                <div className="split left">
                    <div className="adjust-center"></div>
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
