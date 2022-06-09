import { useState, ButtonHTMLAttributes } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState<string>("");

  

  return (
    <>
      <input type="text" />
      <button>Pesquisar</button>
    </>
  );
}

export default App;
