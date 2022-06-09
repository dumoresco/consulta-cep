import React from "react";

type SearchBarProps = {
  setCep: string,
  handleGetCep: () => void
}

export function SearchBar(setCep, handleGetCep) {
  return (
    <>
      <input type="text" />
      <button>Pesquisar</button>
    </>
  );
}
