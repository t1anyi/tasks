import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const transition: Record<QuestionType, QuestionType> = {
    short_answer_question: "multiple_choice_question",
    multiple_choice_question: "short_answer_question",
};

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function change(): void {
        const newQuestion = transition[questionType];
        setQuestionType(newQuestion);
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            <p>
                {questionType === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>
        </div>
    );
}
