import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "Blue",
        "Red",
        "Green",
        "Yellow",
        "Orange",
        "Aqua",
        "Pink",
        "Purple",
    ];
    const [selectedColor, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        onChange={updateColor}
                        id="color-change"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                    />
                ))}
                <h3>Change Color</h3>
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
