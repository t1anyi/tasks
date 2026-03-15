import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Select value={answer} onChange={updateAnswer}>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {answer.includes(expectedAnswer) ? "✔️" : "❌"}
            <h3>Multiple Choice Question</h3>
        </div>
    );
}
