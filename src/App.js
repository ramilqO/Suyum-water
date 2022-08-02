import './App.css';

import Logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
        <div className="Navbar">
        <span className="logo">
           <Logo />
         </span>

      <nav className="nav">
        <div className="nav_item">
          <img src="./images/nav_item1.svg" alt="" className="nav_item_img" />
          <a href="https://vk.comm" className="nav_item_a">Каталог</a>
          </div>
          
        <div className="nav_item">
          <img src="./images/nav_item2.svg" alt="" className="nav_item_img" />
          <a href="https://vk.com" className="nav_item_a">Доставка</a>
          </div>
      </nav>

      </div> 
    </div>
  );
}

export default App;
