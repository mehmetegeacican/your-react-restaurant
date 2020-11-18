import React from 'react'

function ContactPage(props) {
    //PROGRAMMATIC REDIRECT--SENDS YOU TO ABOUT PAGE IN 2 SECONDS(2000)
    //setTimeout(() =>{
      //props.history.push('/about')
    //},2000);
    return (
     
      <div className="container">
          <h4 className ="center red-text darken-3"> This is the Contact page </h4>
      </div>
    );
  }
  
  export default ContactPage;