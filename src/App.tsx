import React from 'react';
import AppHeader from './components/app-header';
import BurgerIngredients from './components/burger-ingredients';
import BurgerConstructor from './components/burger-constructor';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
