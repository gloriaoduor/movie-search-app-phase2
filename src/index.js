import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Genres from './components/Genres';
import SearchMovie from './components/SearchMovie';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/genres' element={<Genres/>} />
        <Route path='/search' element={<SearchMovie/>} />
      </Routes>
    </Router>,
  
);
