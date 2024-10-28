import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Row, Tabs, Tab, Container, Image, Button, Card, CardGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import database from './firebase';

function BasicExample() {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents page reload
        console.log("Form submitted");  // Check if this logs to the console
        
        if (name && email && message) {
            console.log("Attempting to send data");  // Check if this logs to the console
    
            database.ref("contacts").push(
                { name, email, message },
                (err) => {
                    if (err) {
                        console.error("Firebase Error:", err);
                        toast.error("Error sending message");  // Should show if there's an error
                    } else {
                        toast.success("Message sent successfully");  // Should show if message is sent
                        setState({ name: '', email: '', message: '' });
                    }
                }
            );
        } else {
            console.log("Empty fields");  // Check if fields are empty
            toast.warn("Please fill in all fields");  // Warn if fields are empty
        }
    };
    
    return (
        <div className="App">
            <ToastContainer />
            <header>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Home">
                        <main>
                            <Container>
                                <Row className="px-4 my-5">
                                    <Col sm={7}>
                                        <Image
                                            src="https://business.wisc.edu/wp-content/uploads/2021/07/WSB_BlogGraphic_Enderle_1.21.jpg"
                                            fluid rounded
                                            className="img-fluid"
                                        />
                                    </Col>
                                    <Col sm={5}>
                                        <h1 className="font-weight-light">Hi, I'm Bryce</h1>
                                        <p className="mt-4">
                                            I was born and raised in Schaumburg throughout my life. I go to Conant High School and aspire to be an Actuary when I grow up. I love the freedom and creativity computer science gives me and hope to use these skills to further my success in the future.
                                        </p>
                                        <button onClick={() => toast.info("This is a test toast")}>Test Toast</button>
                                    </Col>
                                </Row>
                            </Container>
                        </main>
                    </Tab>
                    <Tab eventKey="aboutMe" title="About Me">
                        <h1 className="text-center font-weight-light">My Favorite Sports</h1>
                        <CardGroup>
                            {/* Your Cards here */}
                        </CardGroup>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <Container>
                            <Row className="mb-5 mt-3">
                                <Col lg="8">
                                    <h1 className="display-4 mb-4">Contact Me</h1>
                                </Col>
                            </Row>
                            <Row className="sec_sp">
                                <Col lg="5" className="mb-5">
                                    <h3 className="color_sec py-4">Get in touch</h3>
                                    <address>
                                        <strong>brycekim2007@gmail.com</strong>
                                        <p><strong>XXX-XXX-XXXX</strong></p>
                                    </address>
                                </Col>
                                <Col lg="6" className="d-flex align-items-center">
                                    <form className="contact_form w-100" onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg="6" className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    type="text"
                                                    onChange={handleInputChange}
                                                    value={name}
                                                    style={{ color: 'black', backgroundColor: 'white' }}
                                                />
                                            </Col>
                                            <Col lg="6" className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    type="email"
                                                    onChange={handleInputChange}
                                                    value={email}
                                                    style={{ color: 'black', backgroundColor: 'white' }}
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <textarea
    className="form-control rounded-0"
    id="message"
    name="message"
    placeholder="Message"
    rows="5"
    onChange={handleInputChange}
    value={message}
    style={{ color: 'black', backgroundColor: 'white' }} // Set text and background color
></textarea>
                                        <br />
                                        <Row>
                                            <Col lg="12" className="form-group">
                                                <button className="btn ac_btn" type="submit">
                                                    Send
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </header>
        </div>
    );
}

export default BasicExample;
