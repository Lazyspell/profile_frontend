import { Navbar, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    solid,
    thin,
    regular,
    brands,
    duotone,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import "./navigation.css";

const home = " Home";
const about = " About";
const portfolio = " Portfolio";
const contact = " Contact";

const Navigation = () => {
    return (
        <>
            <Navbar className="home">
                <Card className="card">
                    <Card.Img
                        // src ={}
                        variant="top"
                        className="sig"
                    />
                    <Card.Body>
                        <Card.Text>
                            <ListGroup variant="flush" className="navi-bar">
                                <div className="space"></div>

                                <ListGroupItem className="list">
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
                                </ListGroupItem>

                                <ListGroupItem className="list">
                                    <FontAwesomeIcon
                                        icon={duotone("user-bounty-hunter")}
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
                                        {about}
                                    </span>
                                </ListGroupItem>

                                <ListGroupItem className="list">
                                    <FontAwesomeIcon
                                        icon={solid("book-journal-whills")}
                                        className="link"
                                        onClick={() => {
                                            console.log(
                                                "May the force be with you"
                                            );
                                        }}
                                    />
                                    <span
                                        className="link"
                                        onClick={() => {
                                            console.log("Portfolio");
                                        }}
                                    >
                                        {portfolio}
                                    </span>
                                </ListGroupItem>

                                <ListGroupItem className="list">
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
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Navigation;
