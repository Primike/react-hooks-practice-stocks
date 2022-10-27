import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, removeStock}) {
  let list = myStocks.length > 0 ? myStocks.map(stock => {
    return (
      <Stock key = {stock.id} stock = {stock} changeStock = {removeStock}/>
    )
  }) : ''
  return (
    <div>
      <h2>My Portfolio</h2>
      {list}
    </div>
  );
}

export default PortfolioContainer;
