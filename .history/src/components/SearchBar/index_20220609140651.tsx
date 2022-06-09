import React from "react";

export function SearchBar() {
  const [cep, setCep] = useState("");

  return (
    <>
      <input type="text" />
      <button>Pesquisar</button>
    </>
  );
}
