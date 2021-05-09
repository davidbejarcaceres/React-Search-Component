import React, {lazy, Suspense} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './App.css';


const items = [
  'Severian',
  'Thecla',
  'Dorcas',
  'Valeria',
  'Agia',
  'Jonas',
  'Jolenta',
  'Baldanders',
  'Talos',
  'Burgundofara',
  'Ouen',
  'Tzadkiel',
  'Apu Punchau',
  'Vodalus',
  'Typhon'
];

function App() {
  const SearchComponentLazy = lazy(() => import('./components/SearchComponent'));
  const SearchFilterComponentLazy = lazy(() => import('./components/SearchListFilter'));

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchComponentLazy items={items}/>
          </Suspense>
        </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
