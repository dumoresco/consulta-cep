import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const handleGetCep = (value: string) => {
    setCep(cep);
    console.log(cep);
  };

  return <SearchBar setCep={cep} handleGetCep={handleGetCep} />;
}

export default App;
