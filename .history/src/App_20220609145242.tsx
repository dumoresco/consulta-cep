import { useState } from "react";

function App() {
  const [cep, setCep] = useState("");

  function button(cep: string) {
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
    }
  }

  return (
    <>
    <
    </>
  );
}

export default App;
