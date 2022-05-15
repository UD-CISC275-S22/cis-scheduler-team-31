import React, { useState } from "react";
import { InputCrseInfo, makeEmptyCourse } from "./courseMaker";
import { courseProps, semesterProps } from "./semesterBuilder";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";

const crse: Course = {
    name: "Intro to Software Engineering",
    code: "CISC 275",
    descr: "a coding course",
    credits: "4",
    prereq: "CISC 220 and CISC 181",
    restrict: "none",
    breadth: "",
    typ: "idk"
};
const crse2: Course = {
    name: "Intro to Software Engineering2",
    code: "CISC 175",
    descr: "a dasfs course",
    credits: "9",
    prereq: "CISC dfddd and CISC 181",
    restrict: "nodddddne",
    breadth: "",
    typ: "idkddddd"
};

export function DisplayCourse(course: Course): JSX.Element {
    // Currently Broken, Ignore
    function expand(): JSX.Element {
        return (
            <div>
                <p>
                    <strong>Description:</strong> {course.descr} <br />
                    <b>Prerequisites:</b> {course.prereq} <br />
                    <b>Restrictions:</b> {course.restrict} <br />
                    <b>Breadth requirements fulfilled:</b> {course.breadth}{" "}
                    <br />
                    <b>Course type:</b> {course.typ} <br />
                </p>
            </div>
        );
    }

    return (
        <div>
            <br />
            <div style={{ textAlign: "left" }}>
                <Row>
                    <Col>
                        <h6>{course.code}</h6>
                    </Col>
                    <Col>
                        <h6 style={{ textAlign: "right" }}>
                            Credits: {course.credits}
                        </h6>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <Button
                            variant="light"
                            style={{ color: "black", fontSize: "small" }}
                            onClick={expand}
                        >
                            •••
                        </Button>
                    </Col>
                </Row>
                <h6>{course.name}</h6>
                <div>
                    <p>
                        <strong>Description:</strong> {course.descr} <br />
                        <b>Prerequisites:</b> {course.prereq} <br />
                        <b>Restrictions:</b> {course.restrict} <br />
                        <b>Breadth requirements fulfilled:</b> {course.breadth}{" "}
                        <br />
                        <b>Course type:</b> {course.typ} <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export function DisplaySemester({
    semester,
    setSemester
}: semesterProps): JSX.Element {
    return (
        <div>
            <br />
            <h5>Current Semester</h5>
            {semester.map((course: Course) => DisplayCourse(course))}
        </div>
    );
}

export function Render(): JSX.Element {
    const [course, setCourse] = useState<Course>(makeEmptyCourse());
    const [semester, setSemester] = useState<Course[]>([crse, crse2]);
    return (
        <div>
            <Form>
                <Row>
                    <Col xs={7}>
                        <Container>
                            <InputCrseInfo
                                course={course}
                                setCourse={setCourse}
                            ></InputCrseInfo>
                            <Button
                                onClick={() =>
                                    setSemester([...semester, course])
                                }
                            >
                                Add to semester
                            </Button>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <DisplaySemester
                                semester={semester}
                                setSemester={setSemester}
                            ></DisplaySemester>
                        </Container>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
