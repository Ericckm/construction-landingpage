import Card from 'react-bootstrap/Card';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <Card
        className="text-center"
        bg="dark"
        text="white"
        style={{ borderRadius: '0' }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">designed by ericckm</Card.Footer>
      </Card>
    </footer>
  );
};

export default Footer;
