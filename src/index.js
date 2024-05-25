import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext, AppProvider } from './context';
import './index.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookLists from './pages/components/BookLists/BookLists';
import BookDetails from './pages/components/BookDetails/BookDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element = { <Home/>}>
            <Route path='about' element = {<About/>} />
            <Route path='book' element = {<BookLists/>} />
            <Route path='/book/:id' element = {<BookDetails/>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

