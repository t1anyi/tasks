import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "July 4th"
    | "Chinese New Years"
    | "New Years"
    | "Thanksgiving";

const holidayEmoji: Record<Holiday, string> = {
    "Chinese New Years": "🇨🇳",
    Christmas: "🎄",
    "July 4th": "🎆",
    "New Years": "🥳",
    Thanksgiving: "🦃",
};

const alphabetically: Record<Holiday, Holiday> = {
    "Chinese New Years": "Christmas",
    Christmas: "July 4th",
    "July 4th": "New Years",
    "New Years": "Thanksgiving",
    Thanksgiving: "Chinese New Years",
};

const year: Record<Holiday, Holiday> = {
    "New Years": "Chinese New Years",
    "Chinese New Years": "July 4th",
    "July 4th": "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New Years",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Years");
    function nextAlphabet(): void {
        setHoliday(alphabetically[holiday]);
    }

    function nextInYear(): void {
        setHoliday(year[holiday]);
    }
    return (
        <div>
            <span>Holiday: {holidayEmoji[holiday]}</span>
            <div>
                <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={nextInYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
