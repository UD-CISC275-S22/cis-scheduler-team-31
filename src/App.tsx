import React from "react";
import "./App.css";
import "./courseMaker";
import { InputCrseInfo } from "./courseMaker";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Scheduling Helper</header>
            <InputCrseInfo></InputCrseInfo>
        </div>
    );
}

export default App;
