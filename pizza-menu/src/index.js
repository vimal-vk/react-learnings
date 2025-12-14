import React from 'react';
import ReactDOM from 'react-dom/client';
import pizzaData from './data.js';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.imgName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>
    </div>
  );
}

const Header = () => {
  return (<header className='header'><h1 style={{color: 'red'}}>Fast React Pizza Co.</h1></header>);
}

const Menu = () => {
  return <main className='menu'>
    <h2>Our Menu</h2>
    <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" imgName="pizzas/focaccia.jpg"/>
    <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" imgName="pizzas/focaccia.jpg"/>
  </main>
}

const Footer = () => {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currHour >= openHour && currHour <= closeHour;
  return <footer className='footer header'>
    {new Date().toLocaleTimeString()} We're currently open!
  </footer>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);