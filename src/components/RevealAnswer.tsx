import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setVisible] = useState<boolean>(false);

    function change(): void {
        setVisible(!isVisible);
    }

    return (
        <div>
            <Button onClick={change}>Reveal Answer</Button>
            {isVisible && <p>42</p>}
        </div>
    );
}
