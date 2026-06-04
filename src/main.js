import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import card from './card.js'

let data = [
  {
    id: 1,
    name: "Furniture Name",
    price: 250,
    image: "img/1.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 2,
    name: "Furniture Name",
    price: 250,
    image: "img/2.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 3,
    name: "Furniture Name",
    price: 250,
    image: "img/3.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 4,
    name: "Furniture Name",
    price: 250,
    image: "img/4.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 5,
    name: "Furniture Name",
    price: 250,
    image: "img/5.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 6,
    name: "Furniture Name",
    price: 250,
    image: "img/6.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 7,
    name: "Furniture Name",
    price: 250,
    image: "img/7.png",
    description: "It is a long established fact that a reader will be distracted."
  },
  {
    id: 8,
    name: "Furniture Name",
    price: 250,
    image: "img/8.png",
    description: "It is a long established fact that a reader will be distracted."
  }

];

const container = document.querySelector(".container");


data.forEach(item => {
  container.append(card(item));
});
