const BAG_COLOR_REGEX = /^([a-z]+\s[a-z]+) bags/;
const QUANTITY_AND_COLOR_REGEX = /([0-9]+) ([a-z]+\s[a-z]+) bag/;
const CONTENT_INFORMATION_REGEX = /contain ([a-z0-9\s,]+[.])$/;
const BAG_CAN_CONTAIN_BAGS_REGEX = /contain no other bags.$/;

export function parseBagRowInformation(bagRowInformation) {
    const [_, color] = bagRowInformation.match(BAG_COLOR_REGEX);

    if (BAG_CAN_CONTAIN_BAGS_REGEX.test(bagRowInformation)) {
        return {
            color,
            children: [],
        };
    }

    const [__, contentInformation] = bagRowInformation.match(
        CONTENT_INFORMATION_REGEX
    );

    const colorsInformation = contentInformation
        .split(",")
        .map((quantityWithColorInformation) => {
            const [___, quantity, color] = quantityWithColorInformation.match(
                QUANTITY_AND_COLOR_REGEX
            );

            return {
                color,
                quantity: Number(quantity),
            };
        });

    return {
        color,
        children: colorsInformation,
    };
}

export function parseBagListInformation(bagList) {
    const bagRowsParsed = bagList.map(parseBagRowInformation);

    return bagRowsParsed.reduce((acc, bag) => {
        const { color, children } = bag;
        acc[color] = children;

        return acc;
    }, {});
}

function getBagsParentInformation(bagsChildrenInformation) {
    return Object.entries(bagsChildrenInformation).reduce(
        (acc, [parentColor, children]) => {
            for (const child of children) {
                const { color } = child;

                if (!acc.hasOwnProperty(color)) {
                    acc[color] = [];
                }

                acc[color].push(parentColor);
            }
            return acc;
        },
        {}
    );
}

export function countBagsContainingBag(
    bagsChildrenInformation,
    bagColorToCheck
) {
    const bagsParentsInformation = getBagsParentInformation(
        bagsChildrenInformation
    );

    const bagsContainingBagToCheck = new Set();
    const bagsCheckedAlready = [];
    const bagsToCheckYet = [bagColorToCheck];

    let currentBagToCheck;

    while ((currentBagToCheck = bagsToCheckYet.pop())) {
        bagsCheckedAlready.push(currentBagToCheck);

        if (!bagsParentsInformation.hasOwnProperty(currentBagToCheck)) {
            continue;
        }

        for (const parentBagColor of bagsParentsInformation[
            currentBagToCheck
        ]) {
            bagsContainingBagToCheck.add(parentBagColor);

            if (
                !bagsToCheckYet.includes(parentBagColor) &&
                !bagsCheckedAlready.includes(parentBagColor)
            ) {
                bagsToCheckYet.push(parentBagColor);
            }
        }
    }

    return bagsContainingBagToCheck.size;
}

export function countHowManyBagsInside(
    bagsChildrenInformation,
    bagColorToCheck
) {
    const countHowManyBagsInsideRec = function (bagColorToCheck, lvl) {
        const childrenInformation = bagsChildrenInformation[bagColorToCheck];

        if (childrenInformation.length === 0) {
            return 0;
        }

        return childrenInformation.reduce((acc, child) => {
            const { color: childColor, quantity } = child;
            const childrenOfColor = countHowManyBagsInsideRec(
                childColor,
                lvl + 1
            );

            return acc + quantity * (1 + childrenOfColor);
        }, 0);
    };

    return countHowManyBagsInsideRec(bagColorToCheck, 0);
}
