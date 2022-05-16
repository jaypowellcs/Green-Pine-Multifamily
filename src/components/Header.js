import { 
    Row, 
    Col, 
    Nav,
    NavItem,  
    DropdownItem, 
    DropdownMenu, 
    DropdownToggle, 
    UncontrolledDropdown,
    Container
    } from 'reactstrap';
    import Logo from '../app/assets/img/logo2.png';
    import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container fluid className='site-header' expand='md'>
            <Row>
                <Col  md='3'>
                    <NavLink className='nav-link' to="/"><img className='navbar-brand' src={Logo} alt="Green Pine Apartment Complex"></img>
                    </NavLink>
                </Col>

                <Col md='9'>
                <Nav className='nav-header'>
                    <NavItem>
                        <NavLink className='nav-link' to="/Amenities">Amenities 
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>Floor Plans 
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem ><NavLink className='nav-link' to="/Floor Plans 1">1 Bedrooms</NavLink></DropdownItem>
                                <DropdownItem ><NavLink className='nav-link' to="/Floor Plans 2">2 Bedrooms</NavLink></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><NavLink className='nav-link' to="/Townhomes">Townhomes</NavLink></DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                   
                    <NavItem>
                        <NavLink className='nav-link' to="/Photos">
                            Photos
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to="/Neighborhood">
                            Neighborhood
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>FAQ
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem ><NavLink className='nav-link' to="/FAQ Application">Applicant FAQ</NavLink></DropdownItem>
                                <DropdownItem ><NavLink className='nav-link' to="/FAQ Schools">Utilities and Schools</NavLink></DropdownItem>
                                <DropdownItem><NavLink className='nav-link' to="/FAQ Renters">Renters Insurance</NavLink></DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                        <NavLink className='nav-link' to="/Tour">
                            Schedule a Tour 
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>Contact Us
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem ><NavLink className='nav-link' to="/Residents Page">Future Residents</NavLink></DropdownItem>
                                <DropdownItem ><NavLink className='nav-link' to="/Investors Page">Investors</NavLink></DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;