import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />
            {editMode ?
                <div>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Student?"
                            id="is=student"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setStudent(event.target.checked);
                            }}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
            <h3>Edit Mode</h3>
        </div>
    );
}
