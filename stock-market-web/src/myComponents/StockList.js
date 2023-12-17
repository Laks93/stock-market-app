import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock list from the API
    axios.get('https://api.iex.cloud/v1/data/core/quote/T,TMUS,VZ?token=pk_dda19f510a194bb38af41a35dc10ed23')
      .then(response => setStocks(response.data))
      .catch(error => console.error('Error fetching stock list:', error));
  }, []);

  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            <a href={`/stock/${stock.symbol}`}>{stock.symbol} - {stock.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;