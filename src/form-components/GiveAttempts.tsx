import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function useAttempt(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function addAttempt(): void {
        let requested = parseInt(requestedAttempts);
        if (!isNaN(requested)) {
            setAttempts(attempts + requested);
        }
    }

    return (
        <div>
            <p>{attempts} Attempts left</p>
            <Form.Group>
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={addAttempt}>gain</Button>
            <h3>Give Attempts</h3>
        </div>
    );
}
