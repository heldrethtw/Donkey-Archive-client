import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React from "react";
import "./index.scss";
import MainView from "../components/MainView/main-view";

ReactDOM.render(
  <Container>
    <MainView />
  </Container>,
  document.getElementById("root")
);
