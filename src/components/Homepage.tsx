import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../styles/Homepage.module.scss';

type Props = {};

const Homepage = (props: Props) => {
  return (
    <main>
      <Container
        fluid
        className="HomepageContainer"
        bg-image
        style={{ position: 'relative', height: '90vh' }}
      >
        <Image
          src="/construction.jpg"
          layout="fill"
          objectFit="cover"
          style={{ position: 'absolute', zIndex: '1', opacity: '0.8' }}
        />
        <Row
          className="text-center p-5"
          style={{ position: 'relative', zIndex: '5' }}
        >
          <Card className="my-5" bg="dark" text="light">
            <Card.Body>Construtora</Card.Body>
          </Card>
        </Row>
      </Container>
    </main>
  );
};

export default Homepage;
