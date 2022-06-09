import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useState("");

  const handleGetCep = (value: string) => {};

  return <SearchBar setCep={cep} handle />;
}

export default App;
