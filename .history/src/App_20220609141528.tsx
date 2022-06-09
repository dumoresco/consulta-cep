import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const [results, setResults] = useState({});

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };

  async function getInfosByCep(value: string) {
    const response = await fetch(`viacep.com.br/ws/${value}/json/`);

    const data = await response.json();
  }

  return <SearchBar setCep={cep} handleGetCep={handleGetCep} />;
}

export default App;
