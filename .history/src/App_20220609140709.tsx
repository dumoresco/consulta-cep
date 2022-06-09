import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [cep, setCep] = useStateate("");

  return <SearchBar />;
}

export default App;
