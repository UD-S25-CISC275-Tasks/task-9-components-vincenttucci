import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    /*
     * used Google AI search and stack overflow to explain the question better 
     * to me and how it links with other parts of the code
     *
     */
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    let text;
    if (questionType === "multiple_choice_question") {
        text = "Multiple Choice";
    } else {
        text = "Short Answer";
    }

    function toggleType() {
        if (questionType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    return (
        <div>
            <div>{text}</div>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
