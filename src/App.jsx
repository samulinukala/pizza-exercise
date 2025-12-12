


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza(props){
  return (<li className="pizza">
   <img src={props.pizzaOBJ.photoName} alt={props.pizzaOBJ.name}/>
   <div>
  <h3>{props.pizzaOBJ.name}</h3>
  <p>{props.pizzaOBJ.ingredient}</p>
  <span>{props.pizzaOBJ.price}</span>
  </div>
 
  </li>
  );
}
function Header()
{
  const style={color: "red",fontSize: "5em",textTransform: "uppercase"};
  return
  <header className="header" >
  <h1 > Fast React Pizza Co. </h1>
  </header>
}
function Menu()
{
  return <main className="menu">
  <h2>our menu</h2>
    <ul className="pizzas">
    {pizzaData.map(pizzaobj => <Pizza pizzaOBJ={pizzaobj} key={pizzaobj.name}/>)}
    </ul>

  </main>
}

function Footer()
{
  const hour=new Date().getHours();
  const openHour=12;
  const closedHour=22;
  {//(hour<closedHour&&hour>openHour) ? alert("sorry we are open") : alert("yes we are closed");
  }
  const isOpen=hour<=closedHour&&hour>=openHour;
  
  return(
  <div className="footer">
  <h2>we are open</h2>
  <footer>{new Date().toLocaleTimeString()}.Terribly sorry </footer>
  </div>
  );
}

function App() {
  
  return (
    <div className="container">
    <Header/>
    <Menu/>
    <Footer/>

   </div>
  )
}

export default App
