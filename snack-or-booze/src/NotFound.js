import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function NotFound() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">404 Not Found</h3>
            <p>The page you're looking for doesn't exist.</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default NotFound;
