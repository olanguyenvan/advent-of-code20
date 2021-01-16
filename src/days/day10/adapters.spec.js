var fs = require("fs");
const path = require("path");

import { findAdaptersNumber } from "./adapters";

describe("findAdaptersNumber", () => {
    it.each([
        [[], { differencesBy1: 0, differencesBy3: 1 }],
        [[1], { differencesBy1: 1, differencesBy3: 1 }],
        [[1, 4], { differencesBy1: 1, differencesBy3: 2 }],
        [[4, 1], { differencesBy1: 1, differencesBy3: 2 }],
        [[1, 2, 3], { differencesBy1: 3, differencesBy3: 1 }],
        [[3, 2, 1], { differencesBy1: 3, differencesBy3: 1 }],
        [[2, 3, 1], { differencesBy1: 3, differencesBy3: 1 }],
        [[3], { differencesBy1: 0, differencesBy3: 2 }],
        [[3, 6], { differencesBy1: 0, differencesBy3: 3 }],
        [[3, 6, 9], { differencesBy1: 0, differencesBy3: 4 }],
        [[3, 6, 7, 8, 9], { differencesBy1: 3, differencesBy3: 3 }],
        [[9, 6, 3, 7, 8], { differencesBy1: 3, differencesBy3: 3 }],
    ])("[%s]", (testString, expected) => {
        expect(findAdaptersNumber(testString)).toEqual(expected);
    });
});
