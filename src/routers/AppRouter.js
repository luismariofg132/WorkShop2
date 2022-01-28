import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "../components/InicioSesion";
import Menu from "../components/Menu";
import PreguntasApp from "../components/PreguntasApp";
import Perfil from "../components/Perfil";
import Principal from "../components/Principal";
import Registro from "../components/Registro";
import '../styles/index.css'
import { useState } from "react";

export const AppRouter = () => {
    const [datos, setdatos] = useState([]);


    return (
        <div>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<InicioSesion />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/preguntas/:lenguaje" element={<PreguntasApp />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            </Router>
        </div>
    );
}