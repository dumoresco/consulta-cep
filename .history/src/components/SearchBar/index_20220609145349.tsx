import React from "react";

import { ButtonHTMLAttributes } from "react";

type SearchBarProps = {
  setCep: string;
  getInfosByCep: (value: string) => void;
};

export function SearchBar({ setCep, getInfosByCep }: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        value={setCep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button>Pesquisar</button>
    </>
  );
}