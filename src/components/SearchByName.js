import { useState } from "react";
import { Container, Form, Card } from "react-bootstrap";
import data from "../data.json";
const SearchByName = () => {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setQuery("");
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            value={query}
            placeholder="Enter name"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      {data.prizes.map((val, key) => {
        return val.laureates
          .filter((item) => {
            if (query === "") {
              return "";
            } else if (
              item.firstname.toLowerCase().includes(query.toLowerCase())
            ) {
              return item;
            }
          })
          .map((d, key) => {
            return (
              <Card className="w-50 p-2 m-1" key={key}>
                <Card.Text>
                  <strong>Id</strong>:{d.id}
                </Card.Text>
                <Card.Text>
                  <strong>firstname</strong>:{d.firstname}
                </Card.Text>
                <Card.Text>
                  <strong>surname</strong>:{d.surname}
                </Card.Text>
                <Card.Text>
                  <strong>description</strong>:{d.motivation}
                </Card.Text>
              </Card>
            );
          });
      })}
    </Container>
  );
};

export default SearchByName;
