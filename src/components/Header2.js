import { 
    Nav,
    NavItem,  
    DropdownItem, 
    DropdownMenu, 
    DropdownToggle, 
    UncontrolledDropdown,
    Navbar, 
    NavbarBrand, 
    NavbarToggler,
    Collapse,
    NavbarText,
    } from 'reactstrap';
import Logo from '../app/assets/img/logo2.png';
import { NavLink } from 'react-router-dom';

const Header2 = () => {


    return (
        <Navbar
            color="success"
            dark
            expand="md"
            fixed="top"
        >
        <NavbarBrand href="/">
            <NavLink className='nav-link' to="/">
                <img className='navbar-brand' src={Logo} alt="Green Pine Apartment Complex"></img>
            </NavLink>
        </NavbarBrand>

        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
        <Nav
            className="me-auto"
            navbar
        >
            <NavItem>
            <NavLink className='nav-link' to="/Amenities">
                Amenities 
            </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className='nav-link' to="/Photos">
                    Photos
                </NavLink>
            </NavItem>

            <UncontrolledDropdown
            inNavbar
            nav
            >
            <DropdownToggle
                caret
                nav
            >
                Apartment Options 
            </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink className='nav-link' to="/Floor Plans 1"><DropdownItem>1 Bedroom</DropdownItem></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink className='nav-link' to="/Floor Plans 2"><DropdownItem>2 Bedrooms</DropdownItem></NavLink>
                    </DropdownItem>
                </DropdownMenu>`
            </UncontrolledDropdown>

            <NavItem>
                <NavLink className='nav-link' to="/Tour">
                    Schedule a Tour 
                </NavLink>
            </NavItem>

            <UncontrolledDropdown
            inNavbar
            nav
            >
            <DropdownToggle
                caret
                nav
            >
                Apartment Options 
            </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink className='nav-link' to="/FAQ Application"><DropdownItem >Applicant FAQ</DropdownItem></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink className='nav-link' to="/FAQ Schools"><DropdownItem>Utilites and Schools</DropdownItem></NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink className='nav-link' to="/FAQ Renters"><DropdownItem>Renters Insurance</DropdownItem></NavLink>
                    </DropdownItem>
                </DropdownMenu>`
            </UncontrolledDropdown>

            <NavItem>
                <NavLink className='nav-link' to="/Residents Page">
                    Contact Us
                </NavLink>
            </NavItem>


        </Nav>


        <NavbarText>
            Green Pines Mulitfamily Apartments 
        </NavbarText>
        </Collapse>
    </Navbar>
    );
};

export default Header2; 