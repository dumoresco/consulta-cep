import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState<string>("");

  const [results, setResults] = useState({});

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };

  async function getInfosByCep(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const data = await response.json();

    console.log(data);
    console.log(setCep);
  }

  return (
    <>
      {" "}
      <input
        type="text"
        value={cep}
        onChange={(e) => handleGetCep(e.target.value)}
      />
      <button onClick={}>Pesquisar</button>
    </>
  );
}

export default App;
