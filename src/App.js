import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
export default function App() {
  const webTitle = ' React';
  return (
    <>
      <Navbar title={webTitle} />
    </>
  );
}
