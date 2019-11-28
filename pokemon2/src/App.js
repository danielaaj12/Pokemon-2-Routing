import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import FavoriteCard from './pages/favorites';
import PokemonCard from './pages/pokemon';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/favorites"} component={FavoriteCard} />
        <Route path={"/pokemon/:pokemonName"} component={PokemonCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
