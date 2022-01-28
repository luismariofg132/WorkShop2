import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppRouter = () => {

    return (
        <div>
            <Router>
                <Navbar />
                <Routes></Routes>
            </Router>
        </div>
    );
}