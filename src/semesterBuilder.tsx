import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";
import flatten from "flat";

import allCourses from "../catalog.json";

export interface semesterProps {
    setSemester: (newSemester: Course[]) => void;
    semester: Course[];
}

export interface courseProps {
    setCourse: (newCourse: Course) => void;
    course: Course;
}

export function getCourseByID(id: string): Course {
    const flag = getFlag(id);
    const coursenum = getNum(id);
}

export function getFlag(str: string): string {
    /*
    let flag = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            flag += str[i];
        }
    }
    return flag; */
    const flag = str.replace(/\D/g, "");
    return flag;
}

export function getNum(str: string): string {
    const numstr = str.replace(/[^a-z]/gi, "");
    return numstr;
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

export function generateSemester(): Course[] {
    return [];
}

export function addCourse(): void {
    return;
}
