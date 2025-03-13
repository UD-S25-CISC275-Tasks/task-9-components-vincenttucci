import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

// used chat gpt to explain why setting position as a prop is necessary for updating marginLeft, since it allows the componenet to reflect user input
function MoveableBox({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10); //used chat gpt to understand the importance of setting a value here in order to show movement of button on clicks

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}px</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} setPosition={setPosition} />
            </div>
        </div>
    );
}
