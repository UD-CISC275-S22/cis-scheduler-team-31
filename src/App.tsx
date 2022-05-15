import React, { useState } from "react";
import "./App.css";
import "./courseMaker";
import { InputCrseInfo, makeEmptyCourse } from "./courseMaker";
import { courseProps, semesterProps } from "./semesterBuilder";
import { Course } from "./interfaces/course";
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
