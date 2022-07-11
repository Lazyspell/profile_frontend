import { Navbar, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./navigation.css";

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
                                        Home
                                    </span>
                                </ListGroupItem>

                                <ListGroupItem className="list">
                                    <i className="fak fa-user-visor-duotone"></i>

                                    <span
                                        className="link"
                                        onClick={() => {
                                            console.log("About");
                                        }}
                                    >
                                        About
                                    </span>
                                </ListGroupItem>

                                <ListGroupItem className="list">
                                    <span
                                        className="link"
                                        onClick={() => {
                                            console.log("Portfolio");
                                        }}
                                    >
                                        Portfolio
                                    </span>
                                </ListGroupItem>

                                <ListGroupItem className="list">
                                    <FontAwesomeIcon icon="fa-brands fa-github" />
                                    <span
                                        className="link"
                                        onClick={() => {
                                            console.log("Contact");
                                        }}
                                    >
                                        Contact
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
