import { useState } from "react";

function App() {
  const [cep, setCep] = useState<string>("");

  console.log()

  return (
    <>
      <input type="text" onChange={(e) => setCep(e.target.value)} />
      <button>Pesquisar</button>
    </>
  );
}

export default App;
