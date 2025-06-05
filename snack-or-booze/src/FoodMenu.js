import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  const items = snacks || drinks;
  const type = snacks ? "snacks" : "drinks";
  const title = snacks ? "Snacks" : "Drinks";

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            {title === "Snacks"
              ? "A selection of snacks to enjoy with your favorite drink."
              : "A selection of drinks to enjoy with your favorite snack."}
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
