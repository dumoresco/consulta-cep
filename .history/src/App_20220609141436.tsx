import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };

  async function getInfosByCep(value: string) {
    const response = async fetch(`viacep.com.br/ws/01001000/json/`)
  }

  return <SearchBar setCep={cep} handleGetCep={handleGetCep} />;
}

export default App;
