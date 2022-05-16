import React, { useState } from "react";
import { InputCrseInfo } from "./courseMaker";
import { semesterProps } from "./semesterBuilder";
import {
    Form,
    Row,
    Col,
    Container,
    Dropdown,
    DropdownButton
} from "react-bootstrap";
import { Course } from "./interfaces/course";

function expandCourse(
    code: string,
    { semester, setSemester }: semesterProps
): void {
    const course: Course = { ...semester[code] };
    course.expanded = !course.expanded;
    setSemester({ ...semester, [course.code]: course });
    return;
}

function removeCourse(
    code: string,
    { semester, setSemester }: semesterProps
): void {
    const tmpRec: Record<string, Course> = { ...semester };
    delete tmpRec[code];
    setSemester(tmpRec);
    return;
}

export function DisplaySemester({
    semester,
    setSemester
}: semesterProps): JSX.Element {
    return (
        <div>
            {Object.values(semester).map((course: Course) => {
                const expanded: boolean = course.expanded;
                function CourseHeader(): JSX.Element {
                    return (
                        <div style={{ textAlign: "left" }}>
                            <br />
                            <Row>
                                <Col>
                                    <h6>{course.code}</h6>
                                </Col>
                                <Col>
                                    <h6 style={{ textAlign: "center" }}>
                                        Credits: {course.credits}
                                    </h6>
                                </Col>
                                <Col style={{ textAlign: "right" }}>
                                    <DropdownButton
                                        key={course.code}
                                        id="dropdown-basic-button"
                                        title="•••"
                                        variant="light"
                                        size="sm"
                                    >
                                        <Dropdown.Item
                                            onClick={() =>
                                                expandCourse(course.code, {
                                                    semester,
                                                    setSemester
                                                })
                                            }
                                        >
                                            {course.expanded
                                                ? "Collapse"
                                                : "Expand"}
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() =>
                                                removeCourse(course.code, {
                                                    semester,
                                                    setSemester
                                                })
                                            }
                                        >
                                            Remove
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </Row>
                            <h6>{course.name}</h6>
                        </div>
                    );
                }
                if (expanded) {
                    return (
                        <div>
                            <CourseHeader></CourseHeader>
                            <div>
                                <p style={{ textAlign: "left" }}>
                                    <strong>Description:</strong> {course.descr}{" "}
                                    <br />
                                    <b>Prerequisites:</b> {course.prereq} <br />
                                    <b>Restrictions:</b> {course.restrict}{" "}
                                    <br />
                                    <b>Breadth requirements fulfilled:</b>{" "}
                                    {course.breadth} <br />
                                    <b>Course type:</b> {course.typ} <br />
                                </p>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div>
                            <CourseHeader></CourseHeader>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export function Render(): JSX.Element {
    const [semester, setSemester] = useState<Record<string, Course>>({});
    return (
        <div>
            <Form>
                <Row>
                    <Col xs={7}>
                        <Container>
                            <InputCrseInfo
                                semester={semester}
                                setSemester={setSemester}
                            ></InputCrseInfo>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <br />
                            <h5>Current Semester</h5>
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
