import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AuthContext from './context/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';



function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ name: 'teste' }}>
          <Routes />
        </AuthContext.Provider>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
