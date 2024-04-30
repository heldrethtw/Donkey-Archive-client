import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React from "react";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import MainView from "../components/MainView/main-view";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Container>
      <MainView />
    </Container>
  </BrowserRouter>
);
