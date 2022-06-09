import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const [results, setResults] = useState({});

  const handleGetCep = (value: string) => {
    setCep(value);
    console.log(cep);
  };



  return (
    <SearchBar
      setCep={cep}
      handleGetCep={handleGetCep}
      getInfosByCep={getInfosByCep}
    />
  );
}

export default App;
