import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from '../styles/Homepage.module.scss';

type Props = {};

const Homepage = (props: Props) => {
  return (
    <section>
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
          className={styles.bgImg}
        />
        <div className={styles.homepageMain}>
          <Row
            className="text-center p-2"
            style={{ position: 'relative', zIndex: '5', height: '100%' }}
          >
            <h2 className="text-center py-3 fw-bold" style={{ zIndex: 5 }}>
              Construção
            </h2>
            <CardGroup className="gap-2 align-items-md-center ">
              <Card className={styles.cardMain}>
                <Card.Body>
                  <Card.Title className="text-primary">
                    Nossa empresa
                  </Card.Title>
                  <Card.Text className="text-md-lg">
                    Somos uma empresa em plena ascensão no segmento da
                    Construção Civil. Temos amplo comprometimento na realização
                    de obras e reformas rápidas e de baixo custo, sejam estas
                    residenciais, corporativas, comerciais e industriais.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className={styles.cardMain}>
                <Card.Body>
                  <Card.Title className="text-primary">Missão</Card.Title>
                  <Card.Text>
                    Atender com o mais alto nível de excelência e qualidade,
                    atendendo às expectativas dos nossos clientes, parceiros,
                    fornecedores e colaboradores. Prezando os valores éticos de
                    nossos clientes, colaboradores e parceiros.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className={styles.cardMain}>
                <Card.Body>
                  <Card.Title className="text-primary">Visão</Card.Title>
                  <Card.Text>
                    Ser reconhecida como empresa líder em serviços de Engenharia
                    Civil, focada na área de Construção e Reforma, estando entre
                    as melhores do pais nesse segmento, visando eficácia,
                    eficiência e efetividade.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Homepage;
