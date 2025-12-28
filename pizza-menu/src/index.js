import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";

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
    <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price} </span>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1 style={{ color: "red" }}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzaCount = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" photoName="pizzas/focaccia.jpg"/>
    <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" photoName="pizzas/focaccia.jpg"/> */}
      {pizzaCount > 0 ? (
        <>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.id} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

const Footer = () => {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currHour >= openHour && currHour <= closeHour;
  return (
    <footer className="footer header">
      {isOpen ? (
        <Order  closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
};

const Order = (props) => {
  return <div className="order">
          <p>We are open till {props.closeHour}:00, come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
