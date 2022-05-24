import { Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';

const Footer  = () => {
  return (
      <Container fluid className=" site-footer">
        <Row>
          <Col>
            <h5 className="title-footer">VISIT</h5>
            <h7>Green Pines Apartment Complex</h7>
            <p>
            123 Main Street 
            Grapevine, TX 76051
            </p>
            
            <p>
              <i class="fa fa-phone-square" aria-hidden="true"><a href="tel:1111111111" style={{ color: 'rgba(255,255,255,.75)' }}>Green Pines (833) 111-1111</a></i>
              <i class="fa fa-phone-square" aria-hidden="true"><a href="tel:111111111" style={{ color: 'rgba(255,255,255,.75)' }}>Maintenance (833) 111-1111</a></i>
            </p>
          </Col>
        

        
          <Col>
            <h5 className="title-footer">Site Map</h5>
            <ul>
              
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Amenities" style={{ color: 'rgba(255,255,255,.75)' }}>
                  <i className="fa fa-building" aria-hidden="true"> Amenities</i>
                </NavLink>
              </li>
              
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Photos" style={{ color: 'rgba(255,255,255,.75)' }}>
                <i className="fa fa-camera" aria-hidden="true"> Photos</i>
                </NavLink>
              </li>
        
              <li className="list-unstyled">
                <NavLink className='nav-link' to="/Tour" style={{ color: 'rgba(255,255,255,.75)' }}>
                <i className="fa fa-calendar" aria-hidden="true"> Schedule a Tour</i> 
                </NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink className='nav-link 'style={{ color: 'rgba(255,255,255,.75)' }}  to="/FAQ Application">
                  <i class="fa fa-question" aria-hidden="true"> FAQ Residents</i>
                </NavLink>
              </li>
            </ul>
            </Col>
        </Row>
      </Container>
  );
}

export default Footer;