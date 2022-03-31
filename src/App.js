import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Form from './Components/Forms/Forms';

export default function App() {
  const webTitle = ' React';
  
  return (
    <>
      <Navbar title={webTitle} />
      <div className="container">
        <Form heading="Ennter your Content" />
        
      </div>
    </>
  );
}
