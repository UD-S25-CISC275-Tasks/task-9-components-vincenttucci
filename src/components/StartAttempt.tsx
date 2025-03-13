import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Go to office hours to get help with this section
export function StartAttempt(): React.JSX.Element {
    const [quizAttempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (!inProgress && quizAttempts > 0) {
            setInProgress(true);
            setAttempts(quizAttempts - 1);
        }
    };

    // used chat gpt to explain the necessity of these lines
    // they halp initialize state
    const stopQuiz = () => {
        setInProgress(false);
    }; // stops quiz
    const addMulligan = () => {
        setAttempts(quizAttempts + 1);
    }; //adds extra attempt

    return (
        <div>
            <div>Attempts: {quizAttempts}</div>
            <Button onClick={addMulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <Button
                onClick={startQuiz}
                disabled={inProgress || quizAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
        </div>
    );
}
