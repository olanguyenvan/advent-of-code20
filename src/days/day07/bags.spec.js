import { countHowManyBagsInside, parseBagRowInformation } from "./bags";

describe("parseBagRowInformation", () => {
    it.each([
        [
            "dotted black bags contain no other bags.",
            { color: "dotted black", children: [] },
        ],
        [
            "bright white bags contain 1 shiny gold bag.",
            {
                color: "bright white",
                children: [{ color: "shiny gold", quantity: 1 }],
            },
        ],
        [
            "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
            {
                color: "muted yellow",
                children: [
                    { color: "shiny gold", quantity: 2 },
                    { color: "faded blue", quantity: 9 },
                ],
            },
        ],
    ])("string %s", (testString, expected) => {
        expect(parseBagRowInformation(testString)).toEqual(expected);
    });
});

describe("countHowManyBagsInside", () => {
    it.each([
        [{ "dotted black": [] }, "dotted black", 0],
        [
            {
                "dotted black": [{ color: "faded blue", quantity: 1 }],
                "faded blue": [],
            },
            "dotted black",
            1,
        ],
        [
            {
                "dotted black": [{ color: "faded blue", quantity: 3 }],
                "faded blue": [],
            },
            "dotted black",
            3,
        ],
        [
            {
                "dotted black": [
                    { color: "faded blue", quantity: 3 },
                    { color: "shiny gold", quantity: 5 },
                ],
                "faded blue": [],
                "shiny gold": [],
            },
            "dotted black",
            8,
        ],
        [
            {
                "dotted black": [
                    { color: "faded blue", quantity: 3 },
                    { color: "shiny gold", quantity: 5 },
                ],
                "faded blue": [],
                "shiny gold": [{ color: "bright white", quantity: 7 }],
                "bright white": [],
            },
            "dotted black",
            3 + 5 + 5 * 7,
        ],
        [
            {
                "dotted black": [
                    { color: "faded blue", quantity: 3 },
                    { color: "shiny gold", quantity: 5 },
                ],
                "faded blue": [],
                "shiny gold": [{ color: "faded blue", quantity: 7 }],
            },
            "dotted black",
            3 + 5 + 5 * 7,
        ],
    ])("string %s", (bagsChildrenInformation, bagColor, expected) => {
        expect(
            countHowManyBagsInside(bagsChildrenInformation, bagColor)
        ).toEqual(expected);
    });
});
