/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  const { pic, title, text, link, button } = props;

  return (
    <section className="content-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="dark" as="a" href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {button}
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Cards;
