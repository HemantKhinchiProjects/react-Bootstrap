import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Form from './Components/Forms/Forms';
import Button from './Components/Buttons/Button';
export default function App() {
  const webTitle = ' React';
  const uppercaseHandler = () => {};
  return (
    <>
      <Navbar title={webTitle} />
      <div className="container">
        <Form heading="Ennter your Content" />
        <div className="row">
          <div>
            <Button btnName="Uppercase" onClick={uppercaseHandler} />
          </div>
        </div>
      </div>
    </>
  );
}
