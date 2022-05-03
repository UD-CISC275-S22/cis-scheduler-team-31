import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";
import flatten from "flat";

import allCourses from "../catalog.json";
import { GeneratedIdentifierFlags } from "typescript";

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

export function getNums(str: string): string {
    const numstr = str.replace(/[^0-9]/g, "");
    return numstr;
}

export function getCourseID(str: string): string {
    const numstr = str.replace(/[^0-9]/g, "");
    const courseIDstr = getFlag(str) + " " + numstr;
    //const courseID: keyof typeof school =
    //courseIDstr as keyof typeof school;
    return courseIDstr;
}

export function JSONtoCourse(id: string): Course {
    const school = allCourses[getFlag(id)];
    const courseID: keyof typeof school = getCourseID(
        id
    ) as keyof typeof school;
    const courseJSON = school[courseID];
    const course: Course = {
        code: courseJSON.code,
        name: courseJSON.name,
        descr: courseJSON.descr,
        credits: courseJSON.credits,
        preReq: courseJSON.preReq,
        restrict: courseJSON.restrict,
        breadth: courseJSON.breadth,
        typ: courseJSON.typ
    };
    return course;
}

export function getCourseByID(id: string): Course {
    return allCourses[getFlag(id)][getCourseID(id)];
}

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
