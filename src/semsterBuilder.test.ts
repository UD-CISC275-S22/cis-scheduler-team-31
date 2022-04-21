// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { getFlag } from "./semesterBuilder";

describe("Testing the semesterBuilder functions", () => {
    test("Testing getFlag funciton", () => {
        expect(getFlag("CISC275")).toBe("CISC");
        expect(getFlag("123 CISC275")).toBe("CISC");
        expect(getFlag("123 CISC275")).toBe("CISC");
    });

    test("Testing getNum funciton", () => {
        expect(getFlag("CISC275")).toBe("275");
        expect(getFlag("123 CISC275")).toBe("123275");
        expect(getFlag("7C5")).toBe("75");
    });
});
