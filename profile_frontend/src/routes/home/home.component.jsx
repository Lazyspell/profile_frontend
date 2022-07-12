import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import TypeAnimation from "react-type-animation";
import { ProfileContext } from "../../contexts/profile.context";

// import "./home.style.css";

const Home = () => {
    const { fullName } = useContext(ProfileContext);
    const { first_name, last_name } = fullName;

    return (
        <div align="center">
            <div className="img-1">
                <Card className="hcard">
                    <span className="space"></span>

                    <div className="c">
                        <Card className="clear">
                            <Card.Img
                                // src="https://i.ibb.co/qymfPT2/IMG-2688.jpg"
                                className="pic"
                            />
                            <span className="sp"></span>

                            <h1 className="text">
                                <span className="a">{first_name}</span>{" "}
                                <span className="n">{last_name}</span>{" "}
                            </h1>

                            <h4 className="type">
                                <div>
                                    <TypeAnimation
                                        cursor={true}
                                        sequence={[
                                            "Software Developer",
                                            2000,
                                            "",
                                            500,
                                            "Programmer",
                                            2000,
                                            "",
                                            500,
                                            "Tennis Player",
                                            2000,
                                            "",
                                            500,
                                            "Father",
                                            2000,
                                            "",
                                            500,
                                        ]}
                                        wrapper="h2"
                                        repeat={Infinity}
                                    />
                                </div>
                            </h4>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Home;
