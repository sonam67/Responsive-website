import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import Middle from './components/Middle';
import Landing_page from './components/Landing_page';
import Add_item from './components/Add_item';


const App = () => {
  return (
    <div className='allfile'>
      <Navbar/>
      <Landing_page/>
      <Middle/>
      <Add_item/>
    </div>
   
  );
};

export default App;

