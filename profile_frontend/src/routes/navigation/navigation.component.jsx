import { Navbar, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import {
    solid,
    regular,
    brands,
    duotone,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import "./navigation.scss";

const home = " Home";
const about = " About";
const work = " Work";
const contact = " Contact";
const skills = " My Skills";

const Navigation = () => {
    const navigateToGit = () => {
        window.open("https://github.com/lazyspell");
    };

    const navigateToLinkedIn = () => {
        window.open("https://linkedin.com/in/jeremy-elam-7a5480102");
    };

    const navigateToDiscord = () => {
        window.open("https://discord.gg/9CKfr9jQnd");
    };
    return (
        <>
            <Navbar className="home">
                <ListGroup variant="flush" className="navi-bar">
                    <div className="nav-space"></div>

                    <ListGroupItem className="list">
                        <Link className="nav-link" to="/">
                            <FontAwesomeIcon
                                icon={faHome}
                                className="link"
                                onClick={() => {
                                    console.log("home");
                                }}
                            />
                            <span
                                className="link"
                                onClick={() => {
                                    console.log("home");
                                }}
                            >
                                {home}
                            </span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="list">
                        <Link className="nav-link" to="/about" color="black">
                            <Popup
                                trigger={
                                    <FontAwesomeIcon
                                        icon={duotone("user-bounty-hunter")}
                                        className="link"
                                        onClick={() => {
                                            console.log("This is the way");
                                        }}
                                    />
                                }
                                position="top left"
                                nested
                            >
                                This is the way
                            </Popup>
                            <span className="link">{about}</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="list">
                        <Link className="nav-link" to="/skills">
                            <FontAwesomeIcon
                                icon={regular("sword-laser")}
                                className="link"
                                onClick={() => {
                                    console.log("This is the way");
                                }}
                            />
                            <span
                                className="link"
                                onClick={() => {
                                    console.log("About");
                                }}
                            >
                                {skills}
                            </span>
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem className="list">
                        <Link className="nav-link" to="/work">
                            <FontAwesomeIcon
                                icon={solid("book-journal-whills")}
                                className="link"
                                onClick={() => {
                                    console.log("May the force be with you");
                                }}
                            />
                            <span
                                className="link"
                                onClick={() => {
                                    console.log("work");
                                }}
                            >
                                {work}
                            </span>
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem className="list">
                        <Link className="nav-link" to="/contact">
                            <FontAwesomeIcon
                                icon={solid("alien-8bit")}
                                className="link"
                                onClick={() => {
                                    console.log("Contact");
                                }}
                            />
                            <span
                                className="link"
                                onClick={() => {
                                    console.log("Contact");
                                }}
                            >
                                {contact}
                            </span>
                        </Link>
                    </ListGroupItem>
                    <div className="spacing"></div>

                    <ListGroupItem className="list">
                        <FontAwesomeIcon
                            icon={brands("linkedin")}
                            className="link"
                            onClick={navigateToLinkedIn}
                        />
                        {"   "}
                        <FontAwesomeIcon
                            icon={brands("github")}
                            className="link"
                            onClick={navigateToGit}
                        />
                        {"   "}
                        <FontAwesomeIcon
                            icon={brands("discord")}
                            className="link"
                            onClick={navigateToDiscord}
                        />
                    </ListGroupItem>
                </ListGroup>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Navigation;
