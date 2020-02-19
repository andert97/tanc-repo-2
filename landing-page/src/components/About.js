import React, { Component } from 'react';
import naved from '../img/NavedTemp.jpg';
import anuraag from '../img/AnuraagTemp.jpg';
import chris from '../img/ChrisTemp.jpg';
import tabitha from '../img/TabithaTemp.jpg';
import './css/About.css';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class About extends Component{
render(){
let heading = "Who we are."
return(
<div className = "about-container">
   <div className="about-container-text">
      <h2>{heading}</h2>
      <p>We are a group of engineers and a designer from Seattle. We have a passion
         for creating tools that help streamline production so people can spend more
         time doing what they love. If you would like to know more about our project
         or how we can help you, you can contact us at any of our emails.
      </p>
      <div>
         <p className = "message">Want to see how we can help you?</p>
      </div>
      <div className = "message">
         {/* <form action="" method="POST"> */}
         <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"
                        name="name"
                        // onChange={(event) => { handleChange(event) }}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control"
                        name="email"
                        // onChange={(event) => { handleChange(event) }}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <input className="form-control"
                        name="email"
                        // onChange={(event) => { handleChange(event) }}
                    />
                </div>

            <button className="btn btn-primary mr-2 red darken-3" >
                  {/* value={newPost} onClick={() => this.createNewPost(newPost)}> */}
                  Post
               </button>
         {/* </form> */}
      </div>
   </div>
   <div className="avatars-container">
      <div className="avatars-upper-row">
         <div className = "item">
            <img src={chris} alt="Avatar"></img>
            <span className="caption">Christopher Vitalis</span>
            <br></br>
            <span className ="job">UX Designer</span>
            <br></br>
            <span className ="job">cvitalis@uw.edu</span>
         </div>
      </div>
      <div className = "item">
         <img src={naved} alt="Avatar"></img>
         <span className="caption">Naved Krishnamurthy</span>
         <br></br>
         <span className ="job">Data Scientist</span>
         <br></br>
         <span className ="job">navedk@uw.edu</span>
      </div>

      <div className="avatars-lower-row">
         <div className = "item">
            <img src={anuraag} alt="Avatar"></img>
            <span className="caption">Anuraag Polisetty</span>
            <br></br>
            <span className ="job">Software Engineer</span>
            <br></br>
            <span className ="job">anuraag@uw.edu</span>
         </div>
         <div className = "item">
            <img src={tabitha} alt="Avatar"></img>
            <span className="caption">Tabitha Anderson</span>
            <br></br>
            <span className ="job">Software Engineer</span>
            <br></br>
            <span className ="job">andert97@uw.edu</span>
         </div>
      </div>
   </div>
   
</div>
);
}
}
export default About;