
import React, { useState } from "react";
import { Typography, Radio, Row, Col } from 'antd'
import { ProgressBar } from "../../Common/ProgressBar";
import { CardWrapper } from "../../Common/CardWrapper";

import "./Questions.css"

const { Title } = Typography

export const Question = ({ questionsList }) => {
    const [currentStep, setCurrentStep] = useState(0);

    return <>
        <Row offset={12} md={8} sm={12} xs={12} style={{ marginTop: 10 }}>
            <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }} >
                <CardWrapper style={{ height: "100vh", border: "2px solid black"}}>
                    <ProgressBar length={questionsList.length} current={currentStep} />
                    <Title style={{marginTop: 20 }}>{currentStep + 1}) {questionsList[currentStep].title}</Title>
                    {questionsList[currentStep].options && questionsList[currentStep].options.map(option => <div className="option-class"><Radio>{option}</Radio></div>)}
                </CardWrapper>
            </Col>
        </Row>


    </>
}
