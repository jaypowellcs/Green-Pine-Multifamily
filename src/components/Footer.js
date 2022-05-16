import { Col, Container, Row } from "reactstrap";

const Footer  = () => {
  return (
      <Container fluid className="text-center text-md-left font-small pt-4 mt-4" color="success">
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
                <a href="#!">Amenities</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Floor Plan</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Photo</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Neighborhood</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Schedule a Tour</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;