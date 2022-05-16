import { 
    Row, 
    Col, 
    Nav,
    NavItem, 
    NavLink,  
    DropdownItem, 
    DropdownMenu, 
    DropdownToggle, 
    UncontrolledDropdown,
    Navbar
    } from 'reactstrap';
    import Logo from '../app/assets/img/logo2.png';

const Header = () => {
    return (
        <Navbar color='success' sticky='top' expand='md'>
            <Row>
                <Col>
                <img src={Logo} alt="Green Pine Apartment Complex"></img>
                </Col>

                <Col>
                <Nav className="justify-content-center">
                    <NavItem>
                        <NavLink active href="#">Amenities 
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>Floor Plans 
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >1 Bedrooms</DropdownItem>
                                <DropdownItem >2 Bedrooms</DropdownItem>
                                <DropdownItem>3 Bedrooms</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Townhomes</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                   
                    <NavItem>
                        <NavLink  href="#">
                            Photos
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink  href="#">
                            Neighborhood
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>FAQ
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >Applicant FAQ</DropdownItem>
                                <DropdownItem >Utilities and Schools</DropdownItem>
                                <DropdownItem>Interactive Room</DropdownItem>
                                <DropdownItem>Renters Insurance</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                        <NavLink  href="#">
                            Schedule a Tour 
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>Contact Us
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >Residents</DropdownItem>
                                <DropdownItem >Future Investors</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    );
};

export default Header;