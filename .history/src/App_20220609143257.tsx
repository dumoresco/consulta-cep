import { useState, ButtonHTMLAttributes } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState<string>("");

  async function getInfosByCep(cep: any) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const data = await response.json();

    console.log(data);
    console.log(cep);
  }

  return (
    <>
      <input type="text" />
      <button type="button" onClick={getInfosByCep}>
        Pesquisar
      </button>
    </>
  );
}

export default App;
