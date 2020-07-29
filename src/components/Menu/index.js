import React from "react";
import Logo from "../../assets/img/logo_aluraflix.png";
// import ButtonLink from "../components/ButtonLink";
import Button from "../Button/index";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </a>
      {/* as = vai se comportar como a tag <a> */}
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
