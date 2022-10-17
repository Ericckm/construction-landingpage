import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

type Props = {};

const Sobre = (props: Props) => {
  return (
    <div style={{ height: 'max-content' }}>
      <Row className="text-center" id="sobre">
        <Card bg="dark" text="light">
          <Card.Body>Sobre</Card.Body>
        </Card>
      </Row>
      <Carousel>
        <Carousel.Item style={{ height: '500px', position: 'relative' }}>
          <Image
            className="d-block w-100"
            src="https://picsum.photos/200"
            alt="Third slide"
            layout="fill"
            objectFit="cover"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px', position: 'relative' }}>
          <Image
            className="d-block w-100"
            src="https://picsum.photos/200"
            alt="Third slide"
            layout="fill"
            objectFit="cover"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '500px', position: 'relative' }}>
          <Image
            className="d-block w-100"
            src="https://picsum.photos/200"
            alt="Third slide"
            layout="fill"
            objectFit="cover"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Sobre;
