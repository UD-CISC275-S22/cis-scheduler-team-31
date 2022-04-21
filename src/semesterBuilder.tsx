import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";

import allCourses from `../catalog.json`

interface semesterProps {
    setSemester: (newSemester: Course[]) => void;
    semester: Course[];
}

interface courseProps {
    setCourse: (newCourse: Course) => void;
    course: Course;
}

function getCourseByID(id: string): Course {
    let flag: string = id.map(c => {
        parseInt(c)
    });
    
    
}

export function semesterBuilder(): JSX.Element {
    const [tempCourseName, setTempCourseName] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="name-box" onClick="generate">
                <Form.Label>Joe Shmoe</Form.Label>
                <Form.Control value={userName} onChange={editName} />
                <span></span>
            </Form.Group>
        </div>
    );
}

function generateSemester(): Course[] {
    return [];
}

function addCourse(): void {
    return;
}
