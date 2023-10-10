import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReserveVol from "./routes/ReserveVol";
import ReserveRoom from "./routes/ReserveRoom";
import Resultat from "./components/Resultat"
import Home from "./routes/Home";
import Profil from "./routes/Profil";


class MyComponent extends Component {
    render() {
        return (
            <div>
               <Home/>
           
            </div>
        );
    }
}

export default MyComponent;
