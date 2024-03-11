/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <section className="content-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.pic} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {/* <Link to='/blogs'>{props.button}</Link> */}
          <Button
            href="http://fast-fjord-34221-ea7817f74303.herokuapp.com/login"
            variant="dark"
          >
            {props.button}
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Cards;
