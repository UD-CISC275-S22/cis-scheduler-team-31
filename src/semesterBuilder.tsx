import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";

interface semesterProps {
    setSemester: (newSemester: Course[]) => void;
    semester: Course[];
}

export function semesterBuilder(): JSX.Element {
    const [tempCourseName, setTempCourseName] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="name-box">
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
