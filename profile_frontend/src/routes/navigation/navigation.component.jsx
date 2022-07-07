import { Navbar, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import "./navigation.css";

const Navigation = () => {
    return (
        <>
            <Navbar className="home">
                <h1>Jeremy Elam</h1>
                <Card className="card">
                    <Card.Img
                        // src ={}
                        variant="top"
                        className="sig"
                    />
                    <Card.Body>
                        <Card.Text>
                            <ListGroup variant="flush">
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
