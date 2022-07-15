import "./about.styles.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimatedSphere } from "../../components/animation/cloudSphere/cloudSphere.component";
export const About = () => {
    return (
        <>
            <div className="main-container">
                <div class="split left">
                    <div class="centered"></div>
                </div>

                <div class="split right">
                    <div class="centered">
                        <AnimatedSphere class="test" />
                    </div>
                </div>
            </div>
        </>
    );
};
