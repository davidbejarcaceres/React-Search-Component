import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

const items = [
  "Severian",
  "Thecla",
  "Dorcas",
  "Valeria",
  "Agia",
  "Jonas",
  "Jolenta",
  "Baldanders",
  "Talos",
  "Burgundofara",
  "Ouen",
  "Tzadkiel",
  "Apu Punchau",
  "Vodalus",
  "Typhon"
]

function App() {
  const SearchComponentLazy = lazy(() => import('./components/SearchComponent'));
  const SearchFilterComponentLazy = lazy(() => import('./components/SearchListFilter'));

  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchFilterComponentLazy items={items}/>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
