import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
export default function App() {
  const webTitle = 'My Web';
  return (
    <>
      <Navbar title={webTitle} />
    </>
  );
}
