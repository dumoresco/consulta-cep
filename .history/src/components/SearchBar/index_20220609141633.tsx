import React from "react";

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
  getInfosByCep: (value:string) =
};

export function SearchBar({ setCep, handleGetCep }: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        value={setCep}
        onChange={(e) => handleGetCep(e.target.value)}
      />
      <button onClick={getInfosByCep}>Pesquisar</button>
    </>
  );
}
