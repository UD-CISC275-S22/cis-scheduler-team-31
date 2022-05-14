import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { courseProps } from "./semesterBuilder";

export interface codeProps {
    setCode: (newCode: string) => void;
    codeProp: string;
}

export function InputCode({ codeProp, setCode }: codeProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setCode(event.target.value);
    }

    return (
        <Form.Group controlId="codeinputbox">
            <Form.Label style={{ fontSize: 18 }}>Course Code:</Form.Label>
            <Form.Control
                value={codeProp}
                onChange={getInput}
                placeholder="Code"
            />
        </Form.Group>
    );
}

export interface nameProps {
    setName: (newName: string) => void;
    nameProp: string;
}

export function InputName({ nameProp, setName }: nameProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <Form.Group controlId="nameinputbox">
            <Form.Label style={{ fontSize: 18 }}>Course Name:</Form.Label>
            <Form.Control
                value={nameProp}
                onChange={getInput}
                placeholder="Name"
            />
        </Form.Group>
    );
}

export interface descrProps {
    setDescr: (newDescr: string) => void;
    descrProp: string;
}

export function InputDescr({ descrProp, setDescr }: descrProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setDescr(event.target.value);
    }

    return (
        <Form.Group controlId="descrinputbox">
            <Form.Label style={{ fontSize: 18 }}>
                Course Description:
            </Form.Label>
            <Form.Control
                value={descrProp}
                onChange={getInput}
                placeholder="Description"
            />
        </Form.Group>
    );
}

export interface creditsProps {
    setCredits: (newCredits: string) => void;
    creditsProp: string;
}

export function InputCredits({
    creditsProp,
    setCredits
}: creditsProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setCredits(event.target.value);
    }

    return (
        <Form.Group controlId="creditsinputbox">
            <Form.Label style={{ fontSize: 18 }}>Course Credits:</Form.Label>
            <Form.Control
                value={creditsProp}
                onChange={getInput}
                placeholder="Credits"
            />
        </Form.Group>
    );
}

export interface prereqProps {
    setPrereq: (newPrereq: string) => void;
    prereqProp: string;
}

export function InputPrereq({
    prereqProp,
    setPrereq
}: prereqProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setPrereq(event.target.value);
    }

    return (
        <Form.Group controlId="prereqinputbox">
            <Form.Label style={{ fontSize: 18 }}>
                Course Prerequisites:
            </Form.Label>
            <Form.Control
                value={prereqProp}
                onChange={getInput}
                placeholder="Prerquisites"
            />
        </Form.Group>
    );
}

export interface restrictProps {
    setRestrict: (newRestrict: string) => void;
    restrictProp: string;
}

export function InputRestrict({
    restrictProp,
    setRestrict
}: restrictProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setRestrict(event.target.value);
    }

    return (
        <Form.Group controlId="restrictinputbox">
            <Form.Label style={{ fontSize: 18 }}>Course Restrict:</Form.Label>
            <Form.Control value={restrictProp} onChange={getInput} />
        </Form.Group>
    );
}

export interface breadthProps {
    setBreadth: (newBreadth: string) => void;
    breadthProp: string;
}

export function InputBreadth({
    breadthProp,
    setBreadth
}: breadthProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setBreadth(event.target.value);
    }

    return (
        <Form.Group controlId="breadthinputbox">
            <Form.Label style={{ fontSize: 18 }}>Course Breadth:</Form.Label>
            <Form.Control value={breadthProp} onChange={getInput} />
        </Form.Group>
    );
}

export interface typProps {
    setTyp: (newTyp: string) => void;
    typProp: string;
}

export function InputTyp({ typProp, setTyp }: typProps): JSX.Element {
    function getInput(event: React.ChangeEvent<HTMLInputElement>): void {
        setTyp(event.target.value);
    }

    return (
        <Form.Group controlId="typinputbox">
            <Form.Label style={{ fontSize: 18 }}>Course Typ:</Form.Label>
            <Form.Control value={typProp} onChange={getInput} />
        </Form.Group>
    );
}

export function InputCrseInfo(): JSX.Element {
    const [codeProp, setCode] = useState<string>("");
    const [nameProp, setName] = useState<string>("");
    const [descrProp, setDescr] = useState<string>("");
    const [creditsProp, setCredits] = useState<string>("");
    const [prereqProp, setPrereq] = useState<string>("");
    const [restrictProp, setRestrict] = useState<string>("");
    const [breadthProp, setBreadth] = useState<string>("");
    const [typProp, setTyp] = useState<string>("");
    return (
        <div>
            <Container>
                <Row className="mb-3">
                    <Col>
                        <InputCode
                            codeProp={codeProp}
                            setCode={setCode}
                        ></InputCode>
                    </Col>
                    <Col>
                        <InputCredits
                            creditsProp={creditsProp}
                            setCredits={setCredits}
                        ></InputCredits>
                    </Col>
                </Row>
                <InputName nameProp={nameProp} setName={setName}></InputName>
                <InputDescr
                    descrProp={descrProp}
                    setDescr={setDescr}
                ></InputDescr>

                <InputPrereq
                    prereqProp={prereqProp}
                    setPrereq={setPrereq}
                ></InputPrereq>

                <InputRestrict
                    restrictProp={restrictProp}
                    setRestrict={setRestrict}
                ></InputRestrict>

                <InputBreadth
                    breadthProp={breadthProp}
                    setBreadth={setBreadth}
                ></InputBreadth>

                <InputTyp typProp={typProp} setTyp={setTyp}></InputTyp>

                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}