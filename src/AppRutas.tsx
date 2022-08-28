import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./componentes/Home";
import { DetalleInstrumento } from "./componentes/DetalleInstrumento";
import { Productos } from "./componentes/Productos";
import { Dondeestamos } from "./componentes/dondeestamos";





class AppRutas extends Component{

    render(){
        return (
              <Routes>
                <Route path="/" element={<Productos/>}/>
                <Route path="/instrumento/">
                <Route path=":idInstrumento" element={<DetalleInstrumento /> }/>
                
            </Route>
                <Route path="/test" element={<h1>TEST</h1>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/dondeestamos" element={<Dondeestamos/>}/>
              </Routes>
        );
      }

}

export default AppRutas;