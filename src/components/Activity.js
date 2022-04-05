import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addFavorite } from "../redux/favorites";

const Activity = ({
  id,
  title,
  accessibility,
  type,
  participants,
  price,
  link,
}) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      {title ? (
        <>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Accessibility: {accessibility}</ListGroupItem>
            <ListGroupItem>Type: {type}</ListGroupItem>
            <ListGroupItem>Participants: {participants}</ListGroupItem>
            <ListGroupItem>Price: {price}</ListGroupItem>
            {link && <ListGroupItem>Link: {link}</ListGroupItem>}
          </ListGroup>
          <Card.Body>
            <Card.Link
              onClick={() => {
                dispatch(
                  addFavorite({
                    id,
                    title,
                    accessibility,
                    type,
                    participants,
                    price,
                    link,
                  })
                );
              }}
            >
              Add to favorites
            </Card.Link>
          </Card.Body>
        </>
      ) : (
        <Card.Body>
          <Card.Title>No activity</Card.Title>
        </Card.Body>
      )}
    </Card>
  );
};

export default Activity;
