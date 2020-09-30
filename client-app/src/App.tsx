import React from 'react';
import './App.css';
import { cars } from './Car';
import CarItem from './CarItem';

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        {cars.map(car => (
          <CarItem car={car} ></CarItem>
        ))}
      </ul>
    </div>
  );
}


export default App;