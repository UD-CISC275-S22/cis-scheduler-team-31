import React from "react";
import "./App.css";
import "./courseMaker";
import { Render } from "./render";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Scheduling Helper</header>
            <Render></Render>
        </div>
    );
}

export default App;
