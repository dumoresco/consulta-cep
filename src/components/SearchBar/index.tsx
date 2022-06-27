import React, { FormEvent, KeyboardEvent } from "react";
import './Style.css'

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

  function handleKeyPress(e:KeyboardEvent){
    if(e.key === 'Enter'){
      getInfosByCep(setCep);
    }
    e.preventDefault()
  }

  return (
    <>
      <div className="input-item">
        <label htmlFor="">Cep</label>
        <input
          type="text"
          value={setCep}
          onChange={(e) => handleGetCep(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' ? handleKeyPress(e) : null}
        />
      </div>
     
      <button type="button" onClick={() => getInfosByCep(setCep)}>
        Pesquisar
      </button>
    </>
  );
}
