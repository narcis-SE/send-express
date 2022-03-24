import { Navbar, Container, Nav, Offcanvas, NavDropdown } from "react-bootstrap"
import "./Header.css"

export const Header = () => {
    return (
        <div className="Header">
            {/* <div className="top">
                <Navbar bg="dark" variant="dark">
                    <div className="top">
                    <Navbar.Brand href="#home">
                            <img
                            alt=""
                            src="/logo.jpg"
                            width="150"
                            height="100"
                            className=" align-top"
                            />{' '}
                        </Navbar.Brand>
                    
                    </div>
                </Navbar>
            </div> */}
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">
                            <img
                            src="/logo.jpg"
                            width="85"
                            height="55"
                            alt="React Bootstrap logo"
                        /> Send Express LLC
                        </Navbar.Brand>
                    <Navbar.Brand href="#home">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#careers">Careers</Nav.Link>
                                <Nav.Link href="#careers">Contact</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        Something else here
                        </NavDropdown.Item>
                    </NavDropdown> */}
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>





        </div>
    )
}