import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Container,
  Image,
  Row,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import fotoPerfil from "../images/perfil.jpg";

import "../style/css.css";
import {
  BsArrowLeftShort,
  BsCalendar,
  BsDownload,
  BsEye,
  BsEyeFill,
} from "react-icons/bs";

function Perfil() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleLast7Days = () => {
    const today = new Date();
    const last7Days = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    setStartDate(formatDate(last7Days));
    setEndDate(formatDate(today));
  };

  const handleLast15Days = () => {
    const today = new Date();
    const last15Days = new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000);
    setStartDate(formatDate(last15Days));
    setEndDate(formatDate(today));
  };

  const handleLast30Days = () => {
    const today = new Date();
    const last30Days = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    setStartDate(formatDate(last30Days));
    setEndDate(formatDate(today));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Row className="p-5 border bg-white rounded-5 shadow mt-5 w-100 justify-content-center p-5">
          <h3 className="mt-3 p-0" style={{ color: "#EF7A2A" }}>
            Relatórios
          </h3>
          <hr className="mb-4" />
          <Row>
            <Form.Label className="text-orange mt-2 p-0">
              Busca por Associação/Catador
            </Form.Label>
            <Col>
              <Dropdown className="w-100">
                <Dropdown.Toggle
                  className="w-100 outline-white"
                  id="dropdown-basic"
                >
                  {" "}
                  Selecionar Associação{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100 ">
                  <Dropdown.Item href="#/action-1">teste1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">teste2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">teste3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown className="w-100">
                <Dropdown.Toggle
                  className="w-100 outline-white"
                  id="dropdown-basic"
                >
                  {" "}
                  Selecionar Catador{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100 ">
                  <Dropdown.Item href="#/action-1">teste1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">teste2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">teste3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="justify-content-evenly mt-2">
            <Form.Label className="text-orange mt-2 ps-1">
              Escolha um Período
            </Form.Label>
            <Button
              className="rounded-5 w-25 pt-2 outline-white"
              onClick={handleLast7Days}
            >
              Últimos 7 dias
            </Button>
            <Button
              className="rounded-5 w-25 pt-2 outline-white"
              onClick={handleLast15Days}
            >
              Últimos 15 dias
            </Button>
            <Button
              className="rounded-5 w-25 pt-2 outline-white"
              onClick={handleLast30Days}
            >
              Últimos 30 dias
            </Button>
          </Row>
          <Row>
            <Col className="p-0 me-3">
              <Form.Label className="text-orange mt-3">Data Inicial</Form.Label>
              <Form.Control
                type="date"
                className="custom-focus"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Col>
            <Col className="p-0 ms-3">
              <Form.Label className="text-orange mt-3">Data Final</Form.Label>
              <Form.Control
                type="date"
                className="custom-focus"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Col>
          </Row>

          <div className="mt-5 d-flex center justify-content-evenly">
            <Button type="submit" className="w-25 mx-2 btn-orange">
              <BsEyeFill /> Visualizar
            </Button>
            <Button type="submit" className="w-25 mx-2 btn-orange">
              <BsDownload /> Baixar
            </Button>
            <Button type="submit" className="w-25 mx-2 outline-white">
              <BsArrowLeftShort /> Voltar
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Perfil;