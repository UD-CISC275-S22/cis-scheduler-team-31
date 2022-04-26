import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";
import flatten from "flat";

import allCourses from "../catalog.json";

console.log(allCourses["ACCT"]["ACCT 200"]);
//const flatcourses: Course[] = flatten(allCourses);

export interface semesterProps {
    setSemester: (newSemester: Course[]) => void;
    semester: Course[];
}

export interface courseProps {
    setCourse: (newCourse: Course) => void;
    course: Course;
}

export function getFlag(str: string): keyof typeof allCourses {
    /*
    let flag = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            flag += str[i];
        }
    }
    return flag; */
    const flagstr: string = str.replace(/[^A-Za-z]/g, "").toUpperCase();
    const flag: keyof typeof allCourses = flagstr as keyof typeof allCourses;
    return flag;
}

export function getCourseID(str: string): keyof typeof allCourses {
    const numstr = str.replace(/[^0-9]/g, "");
    const courseIDstr = getFlag(str) + " " + numstr;
    const courseID: keyof typeof allCourses =
        courseIDstr as keyof typeof allCourses;
    return courseID;
}

export function getCourseByID(id: string): Course {}

export function semesterBuilder(): JSX.Element {
    const [tempCourseName, setTempCourseName] = useState<string>("");

    function getUserInput(event: React.ChangeEvent<HTMLInputElement>) {
        setTempCourseName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="name-box">
                <Form.Label>Add Course</Form.Label>
                <Form.Control value={tempCourseName} onChange={getUserInput} />
                <span></span>
            </Form.Group>
        </div>
    );
}

export function generateEmptySemester(semProps: semesterProps): void {
    semProps.setSemester([]);
}

export function addCourse(
    { course }: courseProps,
    { setSemester, semester }: semesterProps
): void {
    setSemester([...semester, course]);
}
