import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { BsPersonCircle, BsHouseFill, BsDoorOpenFill } from 'react-icons/bs';
import '../style/css.css';
import recicloLogo from '../images/reciclo-logo.png';

function Header() {
    return (
        <>
            <Navbar expand="lg" className='login-navbar'>
                <Container className="d-flex justify-content-between align-items-center">
                    <Button className="outline-orange">
                        <BsHouseFill /> Início
                    </Button>
                    <Navbar.Brand href="#home">
                        <img src={recicloLogo} alt="Reciclo Logo" style={{ maxWidth: '100px' }} />
                    </Navbar.Brand>
                    <div className="d-flex">
                        <Button className="outline-orange">
                            <BsPersonCircle /> Olá, usuário
                        </Button>
                        <div className='m-1'></div>
                        <Button className="outline-orange">
                            <BsDoorOpenFill /> Sair
                        </Button>
                    </div>
                </Container>
            </Navbar >
        </>
    );
}

export default Header;