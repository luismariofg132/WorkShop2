import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "../components/InicioSesion";
import Menu from "../components/Menu";
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
                </Routes>
            </Router>
        </div>
    );
}