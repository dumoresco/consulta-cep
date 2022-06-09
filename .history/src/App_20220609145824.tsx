import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const [bairro, setBairro] = useState("");

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
      <p>{bairro}</p>
    </>
  );
}

export default App;
