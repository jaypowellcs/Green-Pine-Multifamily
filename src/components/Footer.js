import { Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Footer  = () => {
  return (
      <Container fluid className=" site-footer text-center text-md-left font-small pt-4 mt-4" color="success">
        <Row>
          <Col md="6">
            <h5 className="title">VISIT</h5>
            <p>
            Bexley Grapevine
            3535 Bluffs Lane
            Grapevine, TX 76051
            Opens in a new tab
            
            Phone Number (833) 245-0783
            Fax: (817) 756-5567

            Maintenance: (817) 601-8652
            </p>
          </Col>
          <Col md="6">
            <h5 className="title">Site Map</h5>
            <ul>
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Amenities">Amenities 
                </NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Photos">
                              Photos
                </NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Neighborhood">
                            Neighborhood
                </NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Tour">
                            Schedule a Tour 
                </NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/FAQ Application">
                            FAQ Residents  
                </NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Residents Page">
                            Future Residents  
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;