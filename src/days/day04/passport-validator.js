const REQUIRED_FIELDS = {
    BYR: "byr",
    IYR: "iyr",
    EYR: "eyr",
    HGT: "hgt",
    HCL: "hcl",
    ECL: "ecl",
    PID: "pid",
};

export const hgtValidator = (value) => {
    const HGT_REGEX = /^([0-9]+)([a-z]+)$/;

    const groups = value.match(HGT_REGEX);
    if (!groups || groups.length < 3) {
        return false;
    }

    const [_, number, unit] = groups;

    if (unit === "in") {
        return number >= 59 && number <= 76;
    } else if (unit === "cm") {
        return number >= 150 && number <= 193;
    }
    return false;
};
export const hclValidator = (value) => /^#[0-9a-f]{6}$/.test(value);
export const eclValidator = (value) =>
    /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value);
export const pidValidator = (value) => /^[0-9]{9}$/.test(value);

const REQUIRED_FIELD_VALIDATOR = {
    [REQUIRED_FIELDS.BYR]: (value) => value >= 1920 && value <= 2002,
    [REQUIRED_FIELDS.IYR]: (value) => value >= 2010 && value <= 2020,
    [REQUIRED_FIELDS.EYR]: (value) => value >= 2020 && value <= 2030,
    [REQUIRED_FIELDS.HGT]: hgtValidator,
    [REQUIRED_FIELDS.HCL]: hclValidator,
    [REQUIRED_FIELDS.ECL]: eclValidator,
    [REQUIRED_FIELDS.PID]: pidValidator,
};

export function countValidPassportsPart1(passports) {
    return passports.filter(isPassportValidPart1).length;
}

function isPassportValidPart1(passport) {
    for (const requiredField of Object.values(REQUIRED_FIELDS)) {
        if (!passport[requiredField]) {
            return false;
        }
    }

    return true;
}

export function countValidPassportsPart2(passports) {
    return passports.filter(isPassportValidPart2).length;
}

function isPassportValidPart2(passport) {
    for (const requiredField of Object.values(REQUIRED_FIELDS)) {
        const requiredFieldValue = passport[requiredField];
        if (!requiredFieldValue) {
            return false;
        }

        const passportFieldValidated = REQUIRED_FIELD_VALIDATOR[requiredField](
            requiredFieldValue
        );
        if (!passportFieldValidated) {
            return false;
        }
    }

    return true;
}
