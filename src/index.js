import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/index";
import CadastroVideo from "./pages/cadastro/video/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./pages/cadastro/Categoria";

const pagina404 = () => <div>Erro 404</div>;

ReactDOM.render(
  // BrowserRouter rota do navegador
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route path="/" component={Home} exact />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
