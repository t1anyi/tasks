import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1 style={{ backgroundColor: "#66ccff" }}>This is a Header </h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript James Wu Hello World
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <div>
                <img src="images/obama.jpg" alt="Obama" />
            </div>
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "150px",
                                backgroundColor: "red",
                            }}
                        >
                            First Col
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "150px",
                                backgroundColor: "red",
                            }}
                        >
                            Second Col
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
