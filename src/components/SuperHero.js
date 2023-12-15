
import Card from 'react-bootstrap/Card';
import antImages from '../assets/images/cover/Ant-Man.jpg' 
import spiderManImages from '../assets/images/cover/spider man.jpg' 
import petsImages from '../assets/images/cover/secret life of pets 2.jpg'
import batmanImages from '../assets/images/cover/batman.jpeg'
import AvengersImages from '../assets/images/cover/Avengers.jpeg'
import pets2Images from '../assets/images/cover/secret life of pets.jpg'
import { Container, Row, Col, Image} from 'react-bootstrap';

const superHero = () =>{
    return(
        <div>
            <Container>
                <br/>
                <h1 className='text-white'>All Movie</h1>
                <br/>
                <Row>
                    <Col md={4} className='moveWraper' id='allMovie'>
                        <Card className="bg-white moveImages" >
                            <Image src={antImages} alt="Pets Secret 2" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natura This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>        
                                </div>
                            </div>              
                        </Card>
                    </Col>
                    <Col md={4} className='moveWraper'>
                        <Card className="bg-white moveImages" >
                            <Image src={spiderManImages} alt="Spider Man" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natura This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>        
                                </div>
                            </div>              
                        </Card>
                    </Col>
                    <Col md={4} className='moveWraper'>
                        <Card className="bg-white moveImages" >
                            <Image src={petsImages} alt="Pets Secret" className='images'  />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natura This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>        
                                </div>
                            </div>              
                        </Card>
                    </Col>
                    <Col md={4} className='moveWraper'>
                        <Card className="bg-white moveImages" >
                            <Image src={batmanImages} alt="Pets Secret" className='images'  />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natura This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>        
                                </div>
                            </div>              
                        </Card>
                    </Col>
                    <Col md={4} className='moveWraper'>
                        <Card className="bg-white moveImages" >
                            <Image src={AvengersImages} alt="Pets Secret" className='images'  />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natura This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>        
                                </div>
                            </div>              
                        </Card>
                    </Col>
                    <Col md={4} className='moveWraper'>
                        <Card className="bg-white moveImages" >
                            <Image src={pets2Images} alt="Pets Secret" className='images'  />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natura This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>        
                                </div>
                            </div>              
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default superHero