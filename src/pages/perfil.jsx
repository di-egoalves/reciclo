import React from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import fotoPerfil from '../images/perfil.jpg';

import '../style/css.css';

function Perfil() {
 
    return (
        <>

            <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
                <Row className='border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5'>
                    <div className="text-center d-flex flex-column align-items-center">
                        <Image src={fotoPerfil} roundedCircle alt="Foto de Perfil" className="img-fluid perfil w-25" />
                        <h3 className='m-3'>Andeisy Stefany</h3>

                        <Button type='submit' className='btn-orange rounded-5 w-25 p-2 mt-1'> Alterar E-mail </Button>
                        <Button type='submit' className='btn-orange rounded-5 w-25 p-2 mt-1'> Alterar Senha </Button>

                        <Button className='rounded-5 w-25 p-2 mt-5 outline-white'> Voltar </Button>
                    </div>
                </Row>
            </Container>

        </>
    );
}

export default Perfil;

