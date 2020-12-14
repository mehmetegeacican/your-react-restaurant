import React from 'react'
import logo1 from '../foodpic/Caprese-Skewers.jpg'
import logo2 from '../foodpic/brushcetta.jpg'
import logo3 from '../foodpic/antipasto_platter.jpg'
function Starters() {
    return (

        <div className = "container">
                <h2 className="about-letter center">Starters</h2>
                <hr></hr>
                <div className = "row">
                    <div className="col s3 m4">
                        <div className = "card">
                            <div className = "card-image">
                                <img src = {logo1}></img>
                                <span class="card-title red-text">Caprese Skewers</span>
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
                                <span class="card-title red-text">Bruschetta</span>
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
                                <span className="card-title white-text">Antipasto Platter</span>
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
  
  export default Starters;