import React from "react";

import {ButtonHTMLAttributes} from 'react'

type SearchBarProps = {
  setCep: string;
  handleGetCep: (value: string) => void;
  getInfosByCep: <HTML>;
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
      <button onClick={getInfosByCep}>Pesquisar</button>
    </>
  );
}
