import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks}) {
  const [myStocks, setMyStocks] = useState([])

  function addStock(stock) {
    if(myStocks.includes(stock)) {
      return
    }

    let portfolio = [...myStocks]
    portfolio.push(stock)
    setMyStocks(portfolio)
  }

  function removeStock(stock) {
    if(myStocks.includes(stock) === false) {
      return
    }

    let portfolio = myStocks.filter(i => {
      return i !== stock
    })

    setMyStocks(portfolio)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks = {stocks} addStock = {addStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks = {myStocks} removeStock = {removeStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
