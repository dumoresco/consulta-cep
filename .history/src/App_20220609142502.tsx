import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const [results, setResults] = useState({});

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };
  async function getInfosByCep(setCep: any) {
    const response = await fetch(`https://viacep.com.br/ws/${setCep}/json/`);

    const data = await response.json();

    console.log(data);
    console.log(setCep);
  }

  return <SearchBar setCep={cep} handleGetCep={handleGetCep} />;
}

export default App;
