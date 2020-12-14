import React from 'react'
import '../styles/MenuPage.css'
import {Link,NavLink} from 'react-router-dom'
function MenuPage() {
    return (
          <div>
            <div className="nav-content">
              <ul className="tabs red darken-4 center">
                <li className ="tab"><NavLink to = '/menu' className = "white-text">Starters</NavLink></li>
                <li className="tab"><NavLink to = '/menu/pizzas' className = "white-text">Pizzas</NavLink></li>
                <li className="tab"><NavLink to = '/menu/pastas' className = "white-text">Pastas</NavLink></li>
                <li className="tab"><NavLink to = '/menu/desserts' className = "white-text">Desserts</NavLink></li>
              </ul>
            </div>
            <div className = "menuHeader">
              <div className = "container center ">
                <a className = "transparent-text"> Our Menu  </a>
              </div>
              <div className = "container center">
                <a> <h3 className ="white-text"> Our Menu </h3> </a>
                <a> <h4 className ="white-text"> The best italian food since 1956</h4> </a>
              </div>
            </div>


          </div>
            
          
    


    );
  }
  
  export default MenuPage;