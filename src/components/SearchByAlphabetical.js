import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import data from "../data.json";

const SearchByAlphabetical = () => {
  const arr = [];
  const newArray = data.prizes.map((val) => {
    val.laureates.map((item) => {
      item.year = val.year;
      item.category = val.category;
      arr.push(item);
      console.log(item);

      //console.log(item.firstname);
    });
  });
  arr.sort(function (a, b) {
    if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) {
      return 1;
    }
    if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  return (
    <Container className="mt-4">
      {arr.map((item, key) => (
        <Card className="p-2 m-1 w-50" key={key}>
          <Card.Text>
            <strong>firstname</strong>:{item.firstname} {"   "}{" "}
            <strong>surname:</strong>
            {item.surname}
          </Card.Text>
          <Card.Text>
            <strong>Year</strong>:{item.year} {"  "} <strong>Category</strong>:
            {item.category}
          </Card.Text>
        </Card>
      ))}
    </Container>
  );
};

export default SearchByAlphabetical;
