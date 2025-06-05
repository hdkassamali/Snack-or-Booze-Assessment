import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import SnackOrBoozeApi from "./Api";
import slugify from "slugify";

function NewItemForm() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snacks",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { type, ...itemData } = formData;

    const id = slugify(itemData.name, { lower: true });

    try {
      await SnackOrBoozeApi.addItem(type, { ...itemData, id });

      history.push(`/${type}`);
    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <section className="col-md-6">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a New Item
          </CardTitle>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                type="select"
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="snacks">Snack</option>
                <option value="drinks">Drink</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name of the item"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Description of the item"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="recipe">Recipe</Label>
              <Input
                type="text"
                name="recipe"
                id="recipe"
                placeholder="Recipe instructions"
                value={formData.recipe}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="serve">Serve</Label>
              <Input
                type="text"
                name="serve"
                id="serve"
                placeholder="How to serve"
                value={formData.serve}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button color="primary" type="submit">
              Add Item
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItemForm;
