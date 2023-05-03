
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Searchbar } from './components/Searchbar';
import { Featured } from './components/Featured';
import { Catalog } from './components/Catalog';
function App() {
  return (
   <>
     <BrowserRouter>
     <Navbar/>
    </BrowserRouter>
    <Searchbar/>
    <Featured/>
    <Catalog/>
  
   </>
  );
}

export default App;
