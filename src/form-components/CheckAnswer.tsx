import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    return (
        <div>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setGivenAnswer(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <p>{givenAnswer === expectedAnswer ? "✔️" : "❌"}</p>
            <h3>Check Answer</h3>
        </div>
    );
}
