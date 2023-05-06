import React from "react";
import ReactDOM from "react-dom";
import './index.css'


const List={
    color : "white",
    fontSize:"20px",
    padding:"5px 10px"
    }

ReactDOM.render(
    <>
        <header>
            <nav>
                <a href=""><h1>Aasha Toor</h1></a>
                <ul >
                    <li style={List}>Home</li>
                    <li style={List}>About</li>
                    <li style={List}>Contact</li>
                    <li style={List}>Searvices</li>
                    <li style={List}>Menu</li>

                </ul>
            </nav>

            <div className="heading">
                <div className="h-1">
                    <h1>Hello my name is Rahul solanki</h1>
                    <p>hello this is about mi in react and this is my 4th project in react js .hello this is about mi in react and this is my 4th project in react js hello
                     this is about mi in react and this is my 4th project in react js </p>
                    <h2>this is <span>side </span>for toor </h2>
     
                </div>
                <div className="h-2">
                    <form>
                  
                        <input type="text" placeholder="enter your firstname"></input><br></br>
                        <input type="text" placeholder="enter your lastname"></input><br></br>
                        <input type="email" placeholder="enter your email"></input><br></br>
                        <input type="password" placeholder="enter your password"></input><br></br>
                        <button type="button">submit</button>
                    </form>
                </div>
            </div>
        </header>

    </>
    , document.getElementById("root"))