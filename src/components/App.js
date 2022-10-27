import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetchStocks()
  }, [])

  function fetchStocks() {
    fetch(`http://localhost:3001/stocks`)
      .then(response => response.json())
      .then(json => {
        setStocks(json)
      })
  }

  return (
    <div>
      <Header />
      <MainContainer stocks = {stocks}/>
    </div>
  );
}

export default App;
