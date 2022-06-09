import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };

  async function getInfosByCep(value) {
    
  }

  return <SearchBar setCep={cep} handleGetCep={handleGetCep} />;
}

export default App;
