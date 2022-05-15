import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";
import flatten from "flat";

import allCourses from "../catalog.json";
import { GeneratedIdentifierFlags } from "typescript";

console.log(allCourses["CISC"]["CISC 275"]);
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
    return courseIDstr;
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

/*
export function JSONtoCourse(id: string): Course {
    const flag = getFlag(id);
    const school = allCourses[flag];
    const cid = getCourseID(id);
    let course: Course = new Course();
    for (const key in school) {
        if (key === cid) {
            course.code = school[key];
        }
    }

    // COMMENT DOWN
    const school = allCourses[getFlag(id)];
    const formattedID: keyof typeof school = getCourseID(
        id
    ) as keyof typeof school;
    const course: Course = {
        code: school.code,
        name: school.name,
        descr: school.descr,
        credits: school.credits,
        preReq: school.preReq,
        restrict: school.restrict,
        breadth: school.breadth,
        typ: school.typ
    };
    return course;
} */
