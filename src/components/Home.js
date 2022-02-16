import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container fluid>
      <h1 className="text-center text-primary p-4">Nobel Prize Winner</h1>
      <Row className="mt-4">
        <Col md={3}>
          <Link to="/name">
            <Button>SearchByName</Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/year">
            <Button>search by Year</Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/yearandcategory">
            <Button>Search by year and category</Button>
          </Link>
        </Col>
        <Col md={3}>
          <Link to="/alphabeticalorder">
            <Button>Show winner by Alphnetical order</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
