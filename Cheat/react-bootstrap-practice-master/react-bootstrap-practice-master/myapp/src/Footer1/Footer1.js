import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer1.css';
import { Container, Row, Col } from 'react-bootstrap';
const Footer1 = () => {
    return (
        <> 
            <Container>
                <Row className="footer">
                    <Col>
                        <p>
                            Album example is &copy; Bootstrap,but please download and customize it for yourself.
                        </p>
                        <p>
                            New to Bootstrap? <a href='#' className="back">Visit the homepage</a> or read our <a href='#' className="back">getting started guide.</a>
                        </p>
                    </Col>
                    <Col id="last">
                        <p><a href='#' className="back">Back to top</a></p>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Footer1;