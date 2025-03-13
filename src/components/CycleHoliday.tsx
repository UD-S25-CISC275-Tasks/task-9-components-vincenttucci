import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = ["🎄", "🎃", "🦃", "🦅", "🍀"]; // Used Google AI search to get emojis for holidays
const sortedHolidays = [...holidays].sort();

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>(holidays[0]);

    // Cycles through holidays alphabetically (first button) //used Google AI to explain math logic for cycling through, and I was able to apply this to calendar year as well.
    function cycleAlphabetically() {
        const current = sortedHolidays.indexOf(holiday); //gets index of holiday
        const nextIndex = (current + 1) % sortedHolidays.length; // switched to next holiday's index
        setHoliday(sortedHolidays[nextIndex]); //updates state
    }

    // cycles holidays based on calendar date (second button)
    function cycleByYear() {
        const current = holidays.indexOf(holiday);
        const nextIndex = (current + 1) % holidays.length;
        setHoliday(holidays[nextIndex]);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={cycleAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
