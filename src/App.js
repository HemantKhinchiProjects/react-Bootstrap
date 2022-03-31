import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Form from './Components/Forms/Forms';
import Button from './Components/Buttons/Button';
export default function App() {
  const webTitle = ' React';
  return (
    <>
      <Navbar title={webTitle} />
      <div className="container">
        <Form />
        <div className="row">
          <div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
