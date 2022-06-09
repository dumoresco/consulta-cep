import { useState } from "react";

type Props = {
  cep: string;
};

function App() {
  const [cep, setCep] = useState("");

  function button(cep: Props) {
    console.log(cep);
  }

  return (
    <>
      <input type="text" onChange={(e) => setCep(e.target.value)} />
      <button type="button" onClick={() => button()}>
        Pesquisar
      </button>
    </>
  );
}

export default App;
