import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import fullstack from '../assets/fullstack.PNG';
import Buttons from "./button";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toChange = ['Web Developer', 'Fullstack Developer', 'Software Engineer'];
    const [text, setText] = useState('');
    const [Delta, setDelta] = useState(100 - Math.random() * 100);
    const period = 2000;

    // Render image
    const imageElement = <img className="ProfileImg" src={fullstack} alt="" />;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, Delta);
        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toChange.length;
        let fullText = toChange[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    };

    return (
        <Container>
            <Row id="home" className="justify-content-center">
                <Col xs={12} md={6} xl={7} className="text-center">
                    {imageElement}
                    <p className="WlmText">Welcome to my portfolio!</p>
                    <h1>{`Hi, I'm Ernest a`} <span className="wrap">{text}</span></h1>
                    <p>I'm an Intern at Owl Computing!</p>
                    <Row className="justify-content-center"> {/* Added Row */}
                        <Col xs="auto" className="mb-2 ml-1">
                            <Buttons text='Contact me' />
                            </Col>
                            <Col xs="auto" className="mb-2 ml-1" >
                            <Buttons text='Resume' />
                            </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};


