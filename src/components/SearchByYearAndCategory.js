import { useState } from "react";
import { Container, Form, Card } from "react-bootstrap";
import data from "../data.json";
const SearchByYearAndCategory = () => {
  const [searchYear, setSearchYear] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  return (
    <Container className="mt-4">
      <Form>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Enter year</Form.Label>
          <Form.Control
            type="number"
            value={searchYear}
            placeholder="Enter year"
            onChange={(e) => setSearchYear(e.target.value)}
          />
          <Form.Label>Enter category</Form.Label>
          <Form.Select
            type="select"
            value={searchCategory}
            placeholder="Enter year"
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="all">select category</option>
            <option value="physics">physics</option>
            <option value="chemistry">chemistry</option>
            <option value="medicine">medicine</option>
            <option value="peace">peace</option>
            <option value="economics">economics</option>
          </Form.Select>
        </Form.Group>
      </Form>
      {data.prizes
        .filter((val) => {
          if (
            val.year.includes(parseInt(searchYear)) &&
            val.category.includes(searchCategory)
          ) {
            return val;
          }
        })
        .map((item, key) => (
          <Card key={key} className="w-50 mb-2">
            <Card.Body>
              <Card.Text>
                <strong>Year</strong>:{item.year}
              </Card.Text>
              <Card.Text>
                <strong>Category</strong>:{item.category}
              </Card.Text>
              <Card.Text>
                {item.laureates.map((val, key) => (
                  <>
                    <Card.Text>
                      <strong>firstname</strong>:{val.firstname}
                    </Card.Text>
                    <Card.Text>
                      <strong>surname</strong>:{val.surname}
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

export default SearchByYearAndCategory;
