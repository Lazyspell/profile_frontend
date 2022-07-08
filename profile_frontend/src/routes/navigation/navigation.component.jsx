import { Navbar, Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
                            <ListGroup variant="flush">
                                <div className="space"></div>

                                <ListGroupItem className="list">
                                    <span
                                        className="link"
                                        onClick={() => {
                                            console.log("home");
                                        }}
                                    >
                                        Home
                                    </span>
                                </ListGroupItem>
                                <div className="space"></div>

                                <ListGroupItem className="list">
                                    <span
                                        className="link"
                                        onClick={() => {
                                            console.log("About");
                                        }}
                                    >
                                        About
                                    </span>
                                </ListGroupItem>
                                <div className="space"></div>

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
                                <div className="space"></div>

                                <ListGroupItem className="list">
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
        </>
    );
};

export default Navigation;
