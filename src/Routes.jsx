import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useParams
} from "react-router-dom";

import Home from "./components/home/Home";
import Controler from "./components/controler";
import Fgts from "./components/fgts/Fgts";

const Rotas = () => {

    return (

        <Router>
            <Routes>
                <Route exact path="/fgts" element={<Fgts/>} />
                <Route exact path="/controler" element={<Controler/>} />
                <Route exact path="/" element={<Home />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </Router>


    )

}

export default Rotas;