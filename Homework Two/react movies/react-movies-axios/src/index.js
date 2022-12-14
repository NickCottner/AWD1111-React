import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import './index.css';
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Container>
      <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<MovieList />}/>
      <Route path="/:imdbId" element = {<MovieDetails />}/>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
    </Container>
  
)

