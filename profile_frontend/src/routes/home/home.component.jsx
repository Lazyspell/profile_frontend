import { useContext, useEffect, useState } from "react";
import { TextAnimation } from "../../components/animation/textAnimation/text.animation";
import { ProfileContext } from "../../contexts/profile.context";
import { Button } from "../../components/button/button.component";

import "./home.style.scss";
import { Link } from "react-router-dom";

const Home = () => {
    const { fullName } = useContext(ProfileContext);
    const { first_name, last_name } = fullName;

    return (
        <div className="home-container">
            <div className="name">
                <h1 className="text">
                    <span className="a">Hi,</span>
                </h1>
                <h1 className="text">
                    <span className="a">I am</span>
                </h1>
                <h1 className="text">
                    <span className="a">{first_name}</span>{" "}
                    <span className="n">{last_name}</span>{" "}
                </h1>
                <h1 className="type">
                    <TextAnimation />
                </h1>
                <Link className="nav-link" to="/contact">
                    <Button> Contact Me </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
