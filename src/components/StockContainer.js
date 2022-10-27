import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock}) {
  let list = stocks.map(stock => {
    return (
      <Stock key = {stock.id} stock = {stock} changeStock = {addStock}/>
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {list}
    </div>
  );
}

export default StockContainer;
