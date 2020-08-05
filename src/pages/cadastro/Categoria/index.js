import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descrição: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descrição
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute("name"), e.target.value);
  }

  // function handleInput(e) {  //outra forma de fazer onChange
  //   setValues(e.target.value);
  // }

  useEffect(() => {
    const url = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://aluraflix-terry.herokuapp.com/categorias";
    fetch(url).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: "Front End",
    //       descricao: "Uma categoria",
    //       cor: "#cbd1ff",
    //     },
    //     {
    //       id: 2,
    //       nome: "Back End",
    //       descricao: "Outra categoria",
    //       cor: "#cbd1ff",
    //     },
    //   ]);
    // }, 3 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descrição"
          value={values.descrição}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descrição}
              name="descrição"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>Cadastrar</Button>
      </form>
      {categorias.length === 0 && <div>Loading...</div>}
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria.nome}</li>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
