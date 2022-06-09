import React from "react";

import { ButtonHTMLAttributes } from "react";

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
};

export function SearchBar({ setCep, handleGetCep }: SearchBarProps) {
  async function getInfosByCep(setCep: any) {
    const response = await fetch(`viacep.com.br/ws/${setCep}/json/`);

    const data = await response.json();

    console.log(data);
  }
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
