import React from "react";

import { ButtonHTMLAttributes } from "react";

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
  getInfosByCep: ButtonHTMLAttributes<void>;
};

export function SearchBar({
  setCep,
  handleGetCep,
  getInfosByCep,
}: SearchBarProps) {
  async function getInfosByCep(cep: string) {
    const response = await fetch(`viacep.com.br/ws/${cep}/json/`);

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
