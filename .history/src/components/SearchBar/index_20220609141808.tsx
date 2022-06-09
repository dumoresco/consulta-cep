import React from "react";

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
  getInfosByCep: (value: string) => void;
};

export function SearchBar({
  setCep,
  handleGetCep,
  getInfosByCep,
}: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        value={setCep}
        onChange={(e) => handleGetCep(e.target.value)}
      />
      <button onClick={getInfosByCep(value)}>Pesquisar</button>
    </>
  );
}
