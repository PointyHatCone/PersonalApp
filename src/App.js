
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Tabs, Tab, Nav, Container, Image, Button, Card, CardGroup} from "react-bootstrap";


function BasicExample() {
    return (
        <div className="App">
            <header >
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Home">
                        <main>
                            <Container>
                                <Row className="px-4 my-5">
                                    <Col sm={7}>
                                        <Image src="https://business.wisc.edu/wp-content/uploads/2021/07/WSB_BlogGraphic_Enderle_1.21.jpg"
                                               fluid rounded className="img-fluid"/>;
                                    </Col>
                                    <Col sm={5}>
                                        <h1 className="font-weight-light">Hi, I'm Bryce</h1>
                                        <p className="mt-4">
                                            I was born and raised in Schaumburg throughout my life. I go to Conant High school and aspire to be an Actuary when I grow up. I love the freedom and creativity computer science gives me and hope to use these skills to further my success in the future.
                                        </p>
                                        <Button>More About Me</Button>
                                    </Col>
                                </Row>
                                <Row className="px-4 my-5">
                                    <Col sm={4}></Col>
                                    <Col sm={7}></Col>
                                </Row>
                            </Container>
                        </main>
                    </Tab>
                    <Tab eventKey="aboutMe" title="About Me">
                        <h1 className="text-center font-weight-light">
                            My Favorite Sports
                        </h1>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEofDnnyX6xHlUOeOgDOPHOmqz-mUoSBfXPA&s" />
                                <Card.Body>
                                    <Card.Title>Tennis</Card.Title>
                                    <Card.Text>
                                        I played tennis since I was 6 years old and still love the sport to this day. Tennis requires not just pure athleticism, but also skill and precision to hit the ball where you want to go. I like to play casually with my friends on open tennis courts and also compete for the Conant Tennis Team.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://visitutahkenticoprod.blob.core.windows.net/cmsroot/visitutah/media/site-assets/winter-photography/ski-resorts/snowbird/ski-resorts_snowbird_markewitz_dsc2227.jpg" />
                                <Card.Body>
                                    <Card.Title>Snowboarding</Card.Title>
                                    <Card.Text>
                                        I have been snowboarding since I was 10 years old and loved every second of it. The feeling of gliding through snow like butter is fantastic and the speed is exhilarating. My family and I always make a tradition to try and go on at least one snowboarding trip a year during winter.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://thecapecurrent.com/wp-content/uploads/2023/07/play-volley.jpg" />
                                <Card.Body>
                                    <Card.Title>Volleyball</Card.Title>
                                    <Card.Text>
                                        I came to like this sport around the beginning of high school. I got roped into volleyball because my three closest friends all play it. Although I am not as good as them I still enjoy playing the sport and hanging out with them.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <Container>
                            <Row className="mb-5 mt-3">
                                <Col lg="8">
                                    <h1 className="display-4 mb-4">
                                        Contact Me
                                    </h1>

                                </Col>
                            </Row>
                            <Row className="sec_sp">
                                <Col lg="5" className="mb-5">
                                    <h3 className="color_sec py-4">
                                        Get in touch
                                    </h3>
                                    <address>
                                        <strong>
                                            brycekim2007@gmail.com
                                        </strong>
                                        <br/>
                                        <br/>
                                        <p>
                                            <strong>XXX-XXX-XXXX</strong>
                                        </p>
                                    </address>
                                </Col>
                                <Col lg="6" className="d-flex align-items-center">
                                    <form className="contact_form w-100">
                                        <Row>
                                            <Col lg="6" className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    type="text"
                                                />
                                            </Col>
                                            <Col lg="6" className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    type="email"
                                                />
                                            </Col>
                                        </Row>
                                        <br/>
                                        <textarea
                                            className="form-control rounded-0" id="message"
                                            name="message"
                                            placeholder="Message"
                                            rows="5"
                                        ></textarea>
                                        <br/>
                                        <Row>
                                            <Col lg="12" className="form-group">
                                                <button className="btn ac_btn" type="submit">Send</button>
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
