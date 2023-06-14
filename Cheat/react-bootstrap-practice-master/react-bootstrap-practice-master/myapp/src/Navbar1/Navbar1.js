import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar1.css';
import { Navbar, Container } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="navbar navbar-dark bg-dark" expand={expand} className="mb-3">
          <Container fluid>
            <div className="container">
              <div className="row">
                <div className="col-6 logo">
                <img src="images/img1.jpg" className="img1" alt="..."/>
                  <Navbar.Brand href="#">Album</Navbar.Brand>
                </div>
                <div className="col-6 hamburger">
                  <Navbar.Toggle />
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navbar1;
