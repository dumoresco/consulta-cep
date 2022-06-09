import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const 

  const handleGetCep = (value: string) => {
    setCep(value);
  };

  function getInfosByCep(cep: string) {
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((data) => {
            setBairro(data.bairro);
            setLogradouro(data.logradouro);
          });
      }
    }
  }

  return (
    <>
      <SearchBar
        setCep={cep}
        getInfosByCep={getInfosByCep}
        handleGetCep={handleGetCep}
      />
      <p>{localidade}</p>
      <p>{bairro}</p>
      <p>{logradouro}</p>
    </>
  );
}

export default App;
