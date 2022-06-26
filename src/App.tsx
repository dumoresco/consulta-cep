import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import './Style.css';

function App() {
  const [cep, setCep] = useState("");
  const [inputValue, setInputValue] = useState("")

  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [ uf, setUf] = useState("")

  const handleGetCep = (value: string) => {
    setCep(value);
  };

  function getInfosByCep(cep: string) {
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((data) => {
            setBairro(data.bairro);
            setLogradouro(data.logradouro);
            setLocalidade(data.localidade);
            setUf(data.uf)
            console.log(data)
          });
      }
    }
  }

  return (
    <>
  
      <form action="">   
      <div className="input-group">
           <SearchBar
        setCep={cep}
        getInfosByCep={getInfosByCep}
        handleGetCep={handleGetCep}
      />
      </div>
    
        <div className="input-group">
          <div className="input-item">
            <label htmlFor="">Endereço</label>
            <input type="text" value={logradouro}/>
          </div>
          <div className="input-item">
            <label htmlFor="">Bairro</label>
            <input type="text" value={bairro}/>
          </div>
        </div>
        <div className="input-group">
          <div className="input-item">
            <label htmlFor="">Estado</label>
            <input type="text" value={uf}/>
          </div>
          <div className="input-item">
            <label htmlFor="">Cidade</label>
            <input type="text" value={localidade}/>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
