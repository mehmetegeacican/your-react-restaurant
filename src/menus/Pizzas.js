import React from 'react'
import logo1 from '../foodpic/tomate.jpg'
import logo2 from '../foodpic/quattro_formaggi.jpg'
import logo3 from '../foodpic/naples.jpg'

function Pizzas() {
    return (
        <div className = "container">
                <h2 className="about-letter center">Pizzas</h2>
                <hr></hr>
                <div className = "row">
                    <div className="col s3 m4">
                        <div className = "card">
                            <div className = "card-image">
                                <img src = {logo1}></img>
                                <span class="card-title">Pizza Margarita</span>
                                <a class="btn-floating halfway-fab red pulse"><i class="material-icons">favorite</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3 m4">
                        <div className = "card">
                            <div className = "card-image">
                                <img src = {logo2}></img>
                                <span class="card-title">Quattro Formaggi</span>
                                <a class="btn-floating halfway-fab red pulse"><i class="material-icons">favorite</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3 m4">
                        <div className = "card">
                            <div className = "card-image">
                                <img src = {logo3}></img>
                                <span className="card-title white-text">Napolitana</span>
                                <a className="btn-floating halfway-fab red pulse"><i class="material-icons">favorite</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <hr></hr>
        </div>
      
    );
  }
  
  export default Pizzas;