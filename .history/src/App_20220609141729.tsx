import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const [results, setResults] = useState({});

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };

  async function getInfosByCep(cep) {
    const response = await fetch(`viacep.com.br/ws/${value}/json/`);

    const data = await response.json();

    console.log(data);
  }

  return <SearchBar setCep={cep} handleGetCep={handleGetCep} getInfosByCep={getInfosByCep}/>;
}

export default App;
