import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StockDetails() {
  const { symbol } = useParams();
  const [stockDetails, setStockDetails] = useState(null);

  useEffect(() => {
    // Fetch stock details for the selected symbol
    axios.get(`https://api.iex.cloud/v1/data/core/quote/${symbol}/?token=pk_dda19f510a194bb38af41a35dc10ed23`)
      .then(response => setStockDetails(response.data))
      .catch(error => console.error('Error fetching stock details:', error));
  }, [symbol]);

  if (!stockDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Stock Details</h2>
      <p>Symbol: {stockDetails.symbol}</p>
      <p>Name: {stockDetails.name}</p>
      {/* Display other stock details as needed */}
    </div>
  );
}

export default StockDetails;