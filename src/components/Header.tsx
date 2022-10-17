import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        style={{ zIndex: '5' }}
      >
        <Container style={{ zIndex: '5' }}>
          <Navbar.Brand href="#home">
            <img src="/favicon.ico" width="44px" height="44px" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="gap-2">
              <Link href="#construtora" passHref>
                <Nav.Link>Construtora</Nav.Link>
              </Link>
              <Link href="#sobre" passHref>
                <Nav.Link>Sobre</Nav.Link>
              </Link>
              <Link href="#projetos" passHref>
                <Nav.Link>Projetos</Nav.Link>
              </Link>
              <Link href="#contato" passHref>
                <Nav.Link>Contato</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
