import { parse } from "path";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[] = [];
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        for (let i = 0; i < 2; i++) {
            newArray.push(numbers[0]);
        }
    } else {
        newArray.push(numbers[0]);
        newArray.push(numbers[numbers.length - 1]);
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newnum: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        newnum.push(numbers[i] * 3);
    }

    return newnum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newint: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(parseInt(numbers[i]))) {
            newint.push(0);
        } else {
            newint.push(parseInt(numbers[i]));
        }
    }

    return newint;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let nums: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i].includes("$")) {
            let amount = amounts[i].slice(1);
            if (isNaN(parseInt(amount))) {
                nums.push(0);
            } else {
                nums.push(parseInt(amount));
            }
        } else if (isNaN(parseInt(amounts[i]))) {
            nums.push(0);
        } else {
            nums.push(parseInt(amounts[i]));
        }
    }
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newStrings: string[] = [];
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].endsWith("!")) {
            newStrings.push(messages[i].toUpperCase());
        } else if (messages[i].endsWith("?")) {
            continue;
        } else {
            newStrings.push(messages[i]);
        }
    }
    return newStrings;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let sum: number = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            sum++;
        }
    }
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let allowed: string[] = ["red", "green", "blue"];
    if (colors.length === 0) {
        return true;
    }

    for (let i = 0; i < colors.length; i++) {
        if (!allowed.includes(colors[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let temp: string[] = [];
    let sum: number = 0;
    if (addends.length === 0) {
        temp.push("0");
        temp.push("+");
    }
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
        temp.push(addends[i].toString());
        temp.push("+"); // adds + between each number
    }
    temp.pop(); // removes the last +
    let newstr: string = sum.toString() + "=";
    for (let j = 0; j < temp.length; j++) {
        newstr += temp[j];
    }
    return newstr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newValue: number[] = [];
    let sum: number = 0;
    let inserted: boolean = false;

    for (let i = 0; i < values.length; i++) {
        newValue.push(values[i]);

        if (values[i] < 0 && !inserted) {
            newValue.push(sum);
            inserted = true;
        } else {
            sum += values[i];
        }
    }
    if (!inserted) {
        newValue.push(sum);
    }

    return newValue;
}
