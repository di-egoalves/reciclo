import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { BsPeopleFill, BsRecycle, BsBicycle, BsShareFill, BsBarChartFill, BsCoin } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import TelaAdmin from '../images/telaadmin.svg';
import '../style/css.css';

function Associacao() {
    const navigate = useNavigate();

    const handleCatadoresClick = () => {
        navigate('/lista-catador');
    };

    const handleColetaClick = () => {
        navigate('/lista-coleta');
    };

    const handleVendaClick = () => {
        navigate('/lista-venda');
    };

    const handleRelatoriosClick = () => {
        navigate('/lista-relatorio');
    };

    return (
        <>
            <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
                <Row className='border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5'>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image src={TelaAdmin} />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <div>
                            <h5 className='text-center mb-3'>Você está acessando como <span style={{ color: '#EF7A2A' }}>ASSOCIAÇÃO</span> da plataforma.</h5>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2' onClick={handleCatadoresClick}>
                                <BsBicycle size={20} className='m-2' />
                                CATADORES
                            </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2' onClick={handleColetaClick}>
                                <BsRecycle size={20} className='m-2' />
                                FORMULÁRIO DE COLETA
                            </Button>
                            <Button type='submit' className='rounded-5 btn-orange w-100 p-3 mb-2' onClick={handleVendaClick}>
                                <BsCoin size={20} className='m-2' />
                                FORMULÁRIO DE VENDA
                            </Button>
                            <Button type='submit' className='rounded-5 outline-white w-100 p-3 mb-2' onClick={handleRelatoriosClick}>
                                <BsShareFill size={20} className='m-2' />
                                RELATÓRIOS
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Associacao;