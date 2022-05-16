/***
 * Data surrounding a course to be taken by a student
 */
export interface Course {
    /** The course code: for example cisc275. Will be converted to uppercase
     *  in the code so can be upper or lowercase. */
    expanded: boolean;
    code: string;
    name: string;
    descr: string;
    credits: string;
    prereq: string;
    restrict: string;
    breadth: string;
    typ: string;
}
