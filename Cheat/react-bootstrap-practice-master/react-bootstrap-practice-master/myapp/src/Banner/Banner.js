import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';
import { Container, Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <>
            <Container>
                <div className="row ban">
                    <div className="col-12">
                        <h1>Album example</h1>
                    </div>
                    <div className="col-12">
                        <p className='text'>Something short and leading about the collection below--its<br />
                            contents, the creator ,etc.Make it short and sweet, but not too short<br />
                            so folks don't simply skip over it entirely. </p>
                    </div>
                    <div className="col-12">
                        <Button variant="primary">Main Call to action</Button>{' '}
                        <Button variant="secondary">Secondary action</Button>{' '}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Banner;