import { useState } from "react";

function App() {
  const [cep, setCep] = useState("");

  function button(cep: string) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json());
  }

  return (
    <>
      <input type="text" onChange={(e) => setCep(e.target.value)} />
      <button type="button" onClick={() => button(cep)}>
        Pesquisar
      </button>
    </>
  );
}

export default App;
