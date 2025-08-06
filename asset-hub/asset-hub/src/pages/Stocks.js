// src/pages/Stocks.js

import React, { useState } from 'react';

const stocksData = [
  { name: 'Tesla', symbol: 'TSLA' },
  { name: 'Apple', symbol: 'AAPL' },
  { name: 'Microsoft', symbol: 'MSFT' },
  { name: 'Amazon', symbol: 'AMZN' },
  // Add more stocks here
];

function Stocks() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStocks = stocksData.filter(stock =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="stocks-page">
      <h2>Stocks</h2>
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="stock-list">
        {filteredStocks.map((stock, index) => (
          <li key={index}>
            <span>{stock.name}</span> ({stock.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stocks;
