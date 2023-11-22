import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Image,
  Dropdown,
  Form,
  Stack,
} from "react-bootstrap";
import "../style/css.css";
import { BsArrowLeftShort, BsDownload, BsEyeFill } from "react-icons/bs";

function RelatorioVenda() {
  

  return (
    <>
      <Container
        className="border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5"
        style={{ minWidth: "90vh" }}
      >
        <Row>
          <Col>
            <Row className="mb-3">
              <Col className="w-25 ">
                <Form.Label>DATA INICIAL</Form.Label>
                <Form.Control type="date" className="custom-focus" />
              </Col>
              <Col className="w-25 ">
                <Form.Label>DATA FINAL</Form.Label>
                <Form.Control type="date" className="custom-focus" />
              </Col>
            </Row>
          </Col>
          <Col>
            <p className="text-right">
              RELATÓRIO DE VENDA - ASSOCIAÇÕES E EMPRESAS COMPRADORAS RELATÓRIO
              EXTRAÍDO ÀS HH:MM - DD/MM/AA
            </p>
          </Col>
          <hr className="mb-4" />
        </Row>
        <Stack direction="horizontal" gap={1}>
          <div className="p-2 data-relatorio rounded-2">DD/MM/AA</div>
        </Stack>
        <Row className="w-100 my-1">
          <Form>
            <Form.Group>
              <Form.Label className="text-orange">Nome do Catador: </Form.Label>
              <Form.Control
                type="text"
                className="form-control custom-focus"
                placeholder="Fualno de tal"
                aria-label="Disabled input exampl"
                disabled
              />
            </Form.Group>
          </Form>
        </Row>

        <Row className="w-100 my-3">
          <Col>
            <Form.Label className="w-100 text-orange">Rota</Form.Label>
            <Form.Control
              type="number"
              className="form-control custom-focus"
              placeholder="3 rotas"
              aria-label="Disabled input exampl"
              disabled
            />
          </Col>
          <Col>
            <Form.Label className="text-orange">
              Quantidade de residíduos coletados:{" "}
            </Form.Label>
            <Form.Label className="d-flex align-items-center text-orange">
              <Form.Control
                type="number"
                className="form-control custom-focus"
                placeholder="0 kg"
                aria-label="Disabled input exampl"
                disabled
              />
            </Form.Label>
          </Col>
        </Row>

        <Row className="w-100 my-3">
          <Form>
            <Form.Label className="text-orange">Tipo de Veículo: </Form.Label>
            <Form.Control
              type="text"
              className="form-control custom-focus"
              placeholder="Triciclo"
              aria-label="Disabled input exampl"
              disabled
            />
          </Form>
        </Row>
        <Row className="w-100 my-3">
          <Col>
            <Form.Label className="text-orange">
              {" "}
              Todos os pontos foram visitados?{" "}
            </Form.Label>
            <Form.Control
              type="text"
              className="form-control custom-focus"
              placeholder="Sim"
              aria-label="Disabled input exampl"
              disabled
            />
          </Col>
          <Col>
            <Form.Label className="text-orange">
              {" "}
              Foi feito a coleta em todos os pontos?{" "}
            </Form.Label>
            <Form.Control
              type="text"
              className="form-control custom-focus"
              placeholder="Não"
              aria-label="Disabled input exampl"
              disabled
            />
          </Col>
        </Row>

        <Row className="w-100 my-3">
          <Form>
            <Form.Label className="text-orange"> Motivo </Form.Label>
            <Form.Control
              type="text"
              className="form-control custom-focus"
              placeholder="O motivo fica aqui"
              aria-label="Disabled input exampl"
              disabled
            />
          </Form>
        </Row>
            
                
                
        
      </Container>
    </>
  );
}

export default RelatorioVenda;
