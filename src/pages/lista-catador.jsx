import React, { useState } from 'react';
import { Badge, Button, Col, Container, FormControl, InputGroup, ListGroup, Pagination, Row, Modal, Form, FormLabel, Dropdown } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import { BsFilePlus, BsPen, BsPeopleFill, BsPlusCircleFill, BsSearch, BsTrash } from 'react-icons/bs';
import '../style/css.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Autenticacao } from "../config/Autenticacao";


import 'bootstrap/dist/css/bootstrap.min.css';

function AdicionarCatador(props) {
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title style={{ color: '#EF7A2A' }}>
                    Criar Cadastro
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                        <FormLabel className='text-orange'>
                            Nome Completo
                        </FormLabel>

                        <FormControl className="form-control custom-focus" type='text' />

                        <FormLabel className='text-orange'>
                            CPF
                        </FormLabel>
                        <InputMask className="form-control custom-focus" mask="999.999.999-99" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        {(inputProps) => <Form.Control {...inputProps} />}
                    
                        <FormLabel className='text-orange'>
                            E-mail
                        </FormLabel>
                        <FormControl className="form-control custom-focus" type='email' />

                        <FormLabel className='text-orange'>
                            Telefone
                        </FormLabel>
                        <InputMask className="form-control custom-focus" mask="99 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        {(inputProps) => <FormControl {...inputProps} />}

                        <FormLabel className='text-orange'>
                            Ecoponto
                        </FormLabel>
                        <Dropdown className='w-100'>
                            <Dropdown.Toggle className='w-100 outline-white' id="dropdown-basic"> Ecoponto </Dropdown.Toggle>

                            <Dropdown.Menu className='w-100 '>
                                <Dropdown.Item href="#/action-1">teste1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">teste2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">teste3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>

                <Button type="submit" className='rounded btn-orange w-100' onClick={props.onHide}> Enviar </Button>
            </Modal.Footer>
        </Modal>
    );
}


function Cadastro() {
    const [catadorData, setCatadorData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(catadorData)


    // Token de autenticação
    const autenticacao = Autenticacao();
    const token = autenticacao.token;

    // Configuração do cabeçalho com o token
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        // Fazendo a chamada para o backend para obter os dados do catador
        axios.get('http://18.219.127.240:3000/api/v1/catadores/pega-catadores/associacao', config)
            .then(response => {
                setCatadorData(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter os dados do catador:', error);
            });
    }, []);

    const [modalShow, setModalShow] = React.useState(false);

    // Função para paginar os resultados
    const paginateResults = (data, page, resultsPerPage) => {
        const startIndex = (page - 1) * resultsPerPage;
        const endIndex = startIndex + resultsPerPage;
        return data.slice(startIndex, endIndex);
    };

    // Definimos a quantidade de resultados por página
    const resultsPerPage = 2;

    // Filtramos os resultados da página atual
    const currentResults = catadorData ? paginateResults(catadorData, currentPage, resultsPerPage) : [];

    // Calculamos o número total de páginas
    const totalPages = catadorData ? Math.ceil(catadorData.length / resultsPerPage) : 0;

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
            <Row className='border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5'>
                <Col md={12} className="d-flex align-items-center justify-content-center">
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />ADMINISTRADOR</Button>
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />CATADOR</Button>
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />ASSOCIAÇÃO</Button>
                    <Button type='submit' className='rounded-5 btn-orange p-3 mb-2 mx-2'><BsPeopleFill size={20} className='m-2' />OP. LOGÍSTICO</Button>
                </Col>
                <hr className='m-4' />
                <Col md={12} className="d-flex align-items-center justify-content-between">
                    <InputGroup className="w-75">
                        <FormControl className='custom-focus'
                            placeholder="Pesquisar"
                            aria-label="Pesquisar"
                            aria-describedby="basic-addon2"
                        />
                        <Button type='submit' className='btn-orange' id="button-addon2">
                            <BsSearch className='' /> Buscar
                        </Button>
                    </InputGroup>
                    <Button type='submit' className='btn-orange' onClick={() => setModalShow(true)}>
                        <BsPlusCircleFill /> Adicionar
                    </Button>
                    <AdicionarCatador show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
                <Col>
                    <h3 className='m-3' style={{ color: '#EF7A2A' }}>Lista de Catadores</h3>
                    <ListGroup as='ol' numbered>
                        {currentResults.map((catador, index) => (
                            <ListGroup.Item
                                key={index}
                                action
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className='ms-2 me-auto'>
                                    <div className="fw-bold">{catador.user.name}</div>
                                    CPF: {catador.cpf} <br />
                                    Email: {catador.user.email}
                                </div>
                                <div>
                                    <Button type='submit' className="mx-2 btn-orange" >
                                        <BsPen /> Editar
                                    </Button>
                                    <Button type='submit' className="btn-orange" >
                                        <BsTrash /> Excluir
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                    <Pagination className='pagination-orange mt-3 justify-content-center'>
                        <Pagination.Prev
                            onClick={() => setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}
                        >
                            Anterior
                        </Pagination.Prev>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={currentPage === index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            onClick={() => setCurrentPage(prevPage => prevPage < totalPages ? prevPage + 1 : prevPage)}
                        >
                            Próxima
                        </Pagination.Next>
                    </Pagination>

                </Col>
            </Row>
        </Container>

    );
}

export default Cadastro;