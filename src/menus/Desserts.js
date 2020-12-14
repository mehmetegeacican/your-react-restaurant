import React from 'react'
import logo1 from '../foodpic/tiramisu.jpg'
import logo2 from '../foodpic/lemon_cake.jpg'
import logo3 from '../foodpic/biscotti.jpg'

function Desserts() {
    return (
      <div>
          <div className = "container">
                <h2 className="about-letter center">Desserts</h2>
                <hr></hr>
                <div className = "row">
                    <div className="col s3 m4">
                        <div className = "card">
                            <div className = "card-image">
                                <img src = {logo1}></img>
                                <span class="card-title">Tiramisu</span>
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
                                <span class="card-title">Lemon Cake</span>
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
                                <span className="card-title white-text"> Biscotti </span>
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

      </div>
    );
  }
  
  export default Desserts;