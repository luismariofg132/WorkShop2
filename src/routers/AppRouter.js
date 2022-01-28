import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "../components/InicioSesion";
import Menu from "../components/Menu";
import PreguntasApp from "../components/PreguntasApp";
import Principal from "../components/Principal";
import '../styles/index.css'

export const AppRouter = () => {

    return (
        <div>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<InicioSesion />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/preguntas" element={<PreguntasApp />} />
                </Routes>
            </Router>
        </div>
    );
}