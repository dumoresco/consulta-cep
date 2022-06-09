import { useState } from "react";

function App() {
  const [cep, setCep] = useState<string>("");

  console.log(cep);

  function button(cep) {
    console.log(cep);
  }

  return (
    <>
      <input type="text" onChange={(e) => setCep(e.target.value)} />
      <button type="button" onClick={}>Pesquisar</button>
    </>
  );
}

export default App;
