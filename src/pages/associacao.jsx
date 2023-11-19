import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { BsPeopleFill, BsRecycle, BsBicycle, BsShareFill, BsBarChartFill } from "react-icons/bs";
import TelaAdmin from '../images/telaadmin.svg'
import '../style/css.css';
 
function Associacao() {

    return (
        <>
            <Container className='d-flex justify-content-center align-items-center'style={{ minHeight: '90vh' }}>
                <Row className='border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5'>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image src={TelaAdmin}/>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <div>
                            <h5 className='text-center mb-3'>Você está acessando como <span style={{ color: '#EF7A2A' }}>ASSOSSIAÇÃO</span> da plataforma.</h5>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsBicycle size={20} className='m-2'/>VEÍCULOS </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsRecycle size={20} className='m-2'/>MATERIAL </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsShareFill size={20} className='m-2'/>ASSOCIAÇÃO </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2'><BsBarChartFill size={20} className='m-2'/>RELATÓRIOS </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Associacao;