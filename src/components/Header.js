import { 
    Nav,
    NavItem,  
    DropdownItem, 
    DropdownMenu, 
    DropdownToggle, 
    UncontrolledDropdown,
    } from 'reactstrap';
import Logo from '../app/assets/img/logo2.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
                <Nav className='nav-header'>
                    <NavItem>
                        <NavLink className='nav-link' to="/"><img className='navbar-brand' src={Logo} alt="Green Pine Apartment Complex"></img>
                    </NavLink>
                    </NavItem>
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
                            </DropdownMenu>
                    </UncontrolledDropdown>
                   
                    <NavItem>
                        <NavLink className='nav-link' to="/Photos">
                            Photos
                        </NavLink>
                    </NavItem>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>FAQ
                        </DropdownToggle>
                            <DropdownMenu>
                                <NavLink className='nav-link' to="/FAQ Application"><DropdownItem >Applicant FAQ</DropdownItem></NavLink>
                                <NavLink className='nav-link' to="/FAQ Schools"><DropdownItem>Utilites and Schools</DropdownItem></NavLink>
                                <NavLink className='nav-link' to="/FAQ Renters"><DropdownItem>Renters Insurance</DropdownItem></NavLink>
                            </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                        <NavLink className='nav-link' to="/Tour">
                            Schedule a Tour 
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to="/Residents Page">
                            Contact Us
                        </NavLink>
                    </NavItem>
                    </Nav>
    );
};

export default Header;