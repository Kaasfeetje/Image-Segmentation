import React from "react";
import Header from "./Header";
import "./FontAwesomeIcons/index";

import "../css/App.css";
import Main from "./Main";

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;
