import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "../containers/InicioSesion";
import '../styles/index.css'

export const AppRouter = () => {

    return (
        <div>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<InicioSesion />} />
                </Routes>
            </Router>
        </div>
    );
}