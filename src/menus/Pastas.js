import React from 'react'
import logo1 from '../foodpic/fettucini_alfredo.jpg'
import logo2 from '../foodpic/spagetti_aglio.png'
import logo3 from '../foodpic/al_tonno.jpg'
import '../styles/MenuPage.css'


function Pastas() {
    return (
            <div>
                        <div className = "container">
                            <h2 className="about-letter center">Pastas</h2>
                            <hr></hr>
                            <div className = "row">
                                <div className="col s3 m4">
                                    <div className = "card">
                                        <div className = "card-image">
                                            <img src = {logo1}></img>
                                            <span className="card-title red-text">Fettucini Al Fredo</span>
                                            <a className="btn-floating halfway-fab red pulse"><i class="material-icons">favorite</i></a>
                                        </div>
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s3 m4">
                                    <div className = "card">
                                        <div className = "card-image">
                                            <img src = {logo2}></img>
                                            <span className="card-title red-text">Spagetti Aglio</span>
                                            <a className="btn-floating halfway-fab red pulse"><i class="material-icons">favorite</i></a>
                                        </div>
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s3 m4">
                                    <div className = "card">
                                        <div className = "card-image">
                                            <img src = {logo3}></img>
                                            <span className="card-title red-text">Pasta Al tonno</span>
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
  
  export default Pastas;