import React from "react";

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
};

export function SearchBar({ setCep, handleGetCep }: SearchBarProps) {
  return (
    <>
      <input type="text" value={setCep} onChange={} />
      <button>Pesquisar</button>
    </>
  );
}
