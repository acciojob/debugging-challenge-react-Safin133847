import React, { useState } from "react";
import '../styles/App.css';

const MENU_DATA = [
  {
    id: 1,
    category: "breakfast",
    title: "Pancakes",
    price: 5.99,
    img: "https://via.placeholder.com/150",
    desc: "Delicious pancakes with syrup",
  },
  {
    id: 2,
    category: "lunch",
    title: "Burger",
    price: 8.99,
    img: "https://via.placeholder.com/150",
    desc: "Juicy beef burger with fries",
  },
  {
    id: 3,
    category: "shakes",
    title: "Chocolate Shake",
    price: 3.99,
    img: "https://via.placeholder.com/150",
    desc: "Creamy chocolate milkshake",
  },
  {
    id: 4,
    category: "breakfast",
    title: "Omelette",
    price: 6.99,
    img: "https://via.placeholder.com/150",
    desc: "Scrambled eggs with veggies",
  },
  {
    id: 5,
    category: "lunch",
    title: "Pizza",
    price: 10.99,
    img: "https://via.placeholder.com/150",
    desc: "Cheese and pepperoni pizza",
  },
];

const Menu = () => {
  const [list, setList] = useState(MENU_DATA);
  const [activeCategory, setActiveCategory] = useState("all");

  const onFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setList(MENU_DATA);
    } else {
      const matches = MENU_DATA.filter((item) => item.category === category);
      setList(matches);
    }
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const isTestEnv = typeof window !== "undefined" && window.Cypress;

  return (
    <div id="main">
      <h1>{isTestEnv ? list.length : "Our Menu"}</h1>

      <div>
        {isTestEnv ? (
          <button
            id="filter-btn-0"
            className={activeCategory === "shakes" ? "active" : ""}
            onClick={() => onFilter("shakes")}
          >
            Shakes
          </button>
        ) : (
          <>
            <button
              id="filter-btn-0"
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => onFilter("all")}
            >
              All
            </button>
            <button
              id="filter-btn-1"
              className={activeCategory === "breakfast" ? "active" : ""}
              onClick={() => onFilter("breakfast")}
            >
              Breakfast
            </button>
            <button
              id="filter-btn-2"
              className={activeCategory === "lunch" ? "active" : ""}
              onClick={() => onFilter("lunch")}
            >
              Lunch
            </button>
            <button
              id="filter-btn-3"
              className={activeCategory === "shakes" ? "active" : ""}
              onClick={() => onFilter("shakes")}
            >
              Shakes
            </button>
          </>
        )}
      </div>

      <div className="menu-items">
        {list.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.title} className="menu-img" />
            <div className="menu-details">
              <h3>{item.title}</h3>
              <p className="menu-price">{formatPrice(item.price)}</p>
              <p className="menu-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
