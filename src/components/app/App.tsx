import React from 'react';
import AppHeader from '../app-header';
import BurgerIngredients from '../burger-ingredients';
import BurgerConstructor from '../burger-constructor';
import './App.css';

function App() {
  const apiUrl: string = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingredients, setIngredients] = React.useState([]);
  React.useEffect(() => {
    fetch(apiUrl)
      .then(data => data.json())
      .then(data => setIngredients(data.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="App">
        <AppHeader />
        <main className="main">
          {ingredients.length > 0 ?
          <>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor ingredients={ingredients} />
          </>
          : null}
        </main>
      </div>
      <div id="modal-root"></div>
    </>
  );
}

export default App;
