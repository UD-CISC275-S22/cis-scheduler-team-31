import { Course } from "./interfaces/course";

import allCourses from "./catalog.json";

console.log(allCourses["CISC"]["CISC 275"]);
//const flatcourses: Course[] = flatten(allCourses);

export interface semesterProps {
    setSemester: (newSemester: Record<string, Course>) => void;
    semester: Record<string, Course>;
}

// Function for searching course array as a record
/*
export function getCourse(
    code: string,
    { semester, setSemester }: semesterProps
): Course {
    const semesterRec: Record<string, Course> = Object.fromEntries(
        semester.map((course: Course): [string, Course] => [
            course.code,
            course
        ])
    );
    return semesterRec[code];
}
*/

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

export function generateEmptySemester({ setSemester }: semesterProps): void {
    setSemester({});
}

export function addCourse(
    { course }: courseProps,
    { setSemester, semester }: semesterProps
): void {
    setSemester({ ...semester, [course.code]: course });
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
