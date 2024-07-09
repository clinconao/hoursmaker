import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards.jsx'

function App() {
  const cardData = [
    { title: 'Lunes', content: 'This is the 1 card'},
    { title: 'Martes', content: 'This is the 1 card'},
    { title: 'Miércoles', content: 'This is the 1 card'},
    { title: 'Jueves', content: 'This is the 1 card'},
    { title: 'Viernes', content: 'This is the 1 card'},
    { title: 'Sábado', content: 'This is the 1 card'},
    { title: 'Domingo', content: 'This is the 1 card'},
  ]

  return (
    <>
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
    </>
  );
};


export default App
