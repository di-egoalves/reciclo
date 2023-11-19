import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { BsFillFileEarmarkFill, BsBarChartFill, BsRecycle } from "react-icons/bs";
import TelaAdmin from '../images/telaadmin.svg'
import '../style/css.css';

function Catador() {
 
    return (
        <>
            <Container className='d-flex justify-content-center align-items-center'style={{ minHeight: '90vh' }}>
                <Row className='border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5'>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image src={TelaAdmin}/>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <div>
                            <h5 className='text-center mb-3'>Você está acessando como <span style={{ color: '#EF7A2A' }}>CATADOR</span> da plataforma.</h5>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsFillFileEarmarkFill size={20} className='m-2'/> Formulários </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsBarChartFill size={20} className='m-2'/> Relatórios </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsRecycle size={20} className='m-2'/> Catálogo de Materiais </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Catador;