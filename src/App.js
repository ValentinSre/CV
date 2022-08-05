import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/css?family=Barlow:100,300,400,700,800&subset=latin-ext" rel="stylesheet" />
          <>
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
            </Routes>
          </>
    </BrowserRouter>
  );
}

export default App;
