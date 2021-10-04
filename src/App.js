import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
