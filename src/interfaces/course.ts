/***
 * Data surrounding a course to be taken by a student
 */
export interface Course {
    /** The course code: for example cisc275. Will be converted to uppercase
     *  in the code so can be upper or lowercase. */
    code: string;
    /** The written title for the Course: Intro to Software Engineering. */
    title: string;
    /** Number of credits earned by completing the course. */
    credits: number;
}
