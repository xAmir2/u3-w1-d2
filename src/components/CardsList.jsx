import { Button, Card } from "react-bootstrap";

function CardsList({ books }) {
  return (
    <>
      {books.map((i) => (
        <Card
          key={i.asin}
          style={{
            width: "300px",
            margin: "10px",
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid white",
          }}
        >
          <Card.Img
            variant="top"
            src={i.img}
            style={{ height: "300px", objectFit: "cover" }}
          />

          <Card.Body className="d-flex flex-column">
            <Card.Title>{i.title}</Card.Title>
            <Card.Text>Category: {i.category}</Card.Text>
            <Card.Text>Price: {i.price}€</Card.Text>

            <Button className="mt-auto" variant="success">
              Buy
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardsList;
