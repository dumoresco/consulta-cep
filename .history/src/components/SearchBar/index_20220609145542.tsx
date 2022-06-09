import React from "react";

import { ButtonHTMLAttributes } from "react";

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
  getInfosByCep: (value: string) => void;
};

export function SearchBar({
  setCep,
  getInfosByCep,
  handleGetCep,
}: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        value={setCep}
        onChange={(e) => handleGetCep(e.target.value)}
      />
      <button type="button">Pesquisar</button>
    </>
  );
}
