import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDieVal, leftDie] = useState<number>(1);
    const [rightDieVal, rightDie] = useState<number>(6);

    function rollLeft() {
        leftDie(d6());
    }

    function rollRight() {
        rightDie(d6());
    }

    let result = "";

    if (leftDieVal === 1 && rightDieVal === 1) {
        result = "Lose";
    } else if (leftDieVal === rightDieVal) {
        result = "Win";
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">Left: {leftDieVal}</span>
                <Button onClick={rollLeft}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">Right: {rightDieVal}</span>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>{result}</div>
            Two Dice
        </div>
    );
}
