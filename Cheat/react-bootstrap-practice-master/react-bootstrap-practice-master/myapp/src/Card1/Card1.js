import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Card1.css';
const Card1 = () => {
    return (
        <Container className="mainbody">
            <Row className="mainrow">
                <Col sm md><Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="images/image1.jpg" />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button variant="outline-dark">View</Button>
                                <Button variant="outline-dark">Edit</Button>
                            </Col>
                            <Col className='time'>
                                <p>9 mins</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card></Col>
                <Col sm><Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="images/image2.jpg" />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button variant="outline-dark">View</Button>
                                <Button variant="outline-dark">Edit</Button>
                            </Col>
                            <Col className='time'>
                                <p>9 mins</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card></Col>
                <Col sm><Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="images/image3.jpg" />
                    <Card.Body>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button variant="outline-dark">View</Button>
                                <Button variant="outline-dark">Edit</Button>
                            </Col>
                            <Col className='time'>
                                <p>9 mins</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>

    )
}

export default Card1;