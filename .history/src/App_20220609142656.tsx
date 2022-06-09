import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState<string>("91740840");

  const [results, setResults] = useState({});

  async function getInfosByCep(cep: any) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const data = await response.json();

    console.log(data);
    console.log(setCep);
  }

  return (
    <>
      {" "}
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
      <button onClick={getInfosByCep}>Pesquisar</button>
    </>
  );
}

export default App;
