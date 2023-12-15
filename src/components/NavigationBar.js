import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="dark">
            <Container>
                <Navbar.Brand>Film Movie LK 21</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">Trending</Nav.Link>
                <Nav.Link href="#allMovie">All Movie</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>      
    )
}

export default NavigationBar