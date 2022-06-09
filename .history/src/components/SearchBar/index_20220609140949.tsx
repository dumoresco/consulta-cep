import React from "react";

type SearchBarProps = {
  setCep: string,
  handleGetCep: ()
}

export function SearchBar(setCep, handleGetCep) {
  return (
    <>
      <input type="text" />
      <button>Pesquisar</button>
    </>
  );
}
