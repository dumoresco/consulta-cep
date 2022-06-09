import { useState } from "react";

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
