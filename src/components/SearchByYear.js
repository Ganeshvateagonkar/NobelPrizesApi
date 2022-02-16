import { useState, useEffect } from "react";
import { Container, Form, Button, Card, CardGroup } from "react-bootstrap";
import data from "../data.json";
const SearchByYear = () => {
  const [query, setQuery] = useState("");

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Enter year</Form.Label>
          <Form.Control
            type="number"
            value={query}
            placeholder="Enter year"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      {data.prizes
        .filter((val) => {
          if (val.year.includes(parseInt(query))) {
            return val;
          }
        })
        .map((item, key) => (
          <Card className="w-50 mb-1" key={key}>
            <Card.Body>
              <Card.Text>
                <strong>year</strong>:{item.year}
              </Card.Text>
              <Card.Text>
                <strong>Category</strong>:{item.category}
              </Card.Text>
              <Card.Text>
                {item.laureates.map((val, key) => (
                  <>
                    <Card.Text>
                      <strong>firstname</strong>: {val.firstname}
                    </Card.Text>
                    <Card.Text>
                      <strong>surname</strong>: {val.surname}
                    </Card.Text>
                    <hr />
                  </>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default SearchByYear;
