import React from 'react'
import {Component} from 'react'
import '../styles/HomePage.css'
import logo1 from '../pictures/res.jpg'
import logo2 from '../pictures/delicioso2.jpg'
import {Link,NavLink} from 'react-router-dom'



class HomePage extends Component{

    render(){
      return (
        <div>
          <div className = "header">
            <div className = "container center ">
              <a className = "transparent-text"> We'd like to welcome you to  </a>
            </div>
            <div className = "container center">
              <a> <h3 className ="white-text"> Delicioso</h3> </a>
              <a> <h4 className ="white-text"> The best italian food since 1956</h4> </a>
              <NavLink to = "/menu" ><button className = "btn waves-effect waves-light red darken-4 ">View Menu</button></NavLink>
            </div>
          </div>
          
          <section className = "">
            <div className = "row center">
              <div className = "col s12 l4">
      
                </div> 
               <div className = "col s24 l4">
                <h2 className="about-letter"> About Us</h2>
                <p >The explanation about us</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.ctetur adipiscing elit.
                 Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                 <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.ctetur adipiscing elit.
                 Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
               </div>
               <div className = "col s12 l6">
               
               </div> 
            </div>
          </section>
  
          <div className = "buly responsive-img parallax">
             
          </div>
  
          <section>
            <h2 className ="about-letter center"> Our Restaurants </h2>
            <div className = "row"></div>
            <div className = "row">
              <div className = "col s12 l4">
                  <div className = "col s6">
                    <img src = {logo2} className = "circle responsive-img"/>
                  </div>
                  <h2 className="about-letter center"> London </h2>
                  <p className = "center" >Open at Week:10:00-24:00, Weekend:9:00-1:00</p>
                  <p className = "center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.ctetur adipiscing elit.
                 Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
              </div>
              <div className = "col s12 l4">
                  <div className = "col s6">
                    <img src = {logo1} className = "circle responsive-img"/>
                  </div>
                  <h2 className="about-letter center "> Chicago </h2>
                  <p className = "center">Open at Week:10:00-24:00, Weekend:9:00-1:00</p>
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.ctetur adipiscing elit.
                 Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
              </div>
              <div className = "col s12 l4">
                  <div className = "col s6 ">
                    <img src = {logo2} className = "circle responsive-img"/>
                  </div>
                  <h2 className="about-letter center"> New York </h2>
                  <p className = "center" >Open at Week:10:00-24:00, Weekend:9:00-1:00</p>
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.ctetur adipiscing elit.
                 Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
              </div>
            </div>
          </section>
  
          <div className = "bulypic responsive-img parallax">
             
          </div>
  
          <section>
            <h2 className = " about-letter center"> Make Reservation </h2>
            <div className = "row">
              <div className = "col l8 offset-l2">
                <form className = "center">
                    <table>
                        <thead>
                          <tr>
                            <th>Fill the requirements to Make A Reservation</th>
                            <th></th>
                          </tr>
                      </thead>
                    </table>
                    <p><input className = "input-field red-text" type = "text" id = "city" placeholder = "City"></input></p>
                    <p><input className="input-field red-text" type="text" placeholder="Name" id = "name" required name="Name"/></p>
                    <p><input className="input-field red-text" type="number" placeholder="How many people" required name="People"/></p>
                    <p><input className="input-field red-text" type="datetime-local" placeholder="Date and time"/></p>
                    <p><input className="input-field red-text" type="text" placeholder="Message \ Special requirements" required name="Message"/></p>
                    <a><a className="btn waves-effect waves-light red darken-4 ">SEND MESSAGE</a></a>
                </form>
              </div>
            </div>

          </section>
  
          
     
              
        
        
        </div>
        
       
      );

    }
  }
  
  export default HomePage;