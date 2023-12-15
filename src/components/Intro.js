
import { Col, Container, Row, Button} from 'react-bootstrap';


const Intro =() => {
    return(
    <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
              <div className='title'>Nonton Gratis Kapanpun</div>
              <div className='intoButton mt-4 text-center'>
                <Button>Lihat Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
    )
}

export default Intro