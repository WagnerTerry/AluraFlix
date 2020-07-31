import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo_aluraflix.png";
// import ButtonLink from "../components/ButtonLink";
import Button from "../Button/index";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </Link>
      {/* as = vai se comportar como a tag <a> */}
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
