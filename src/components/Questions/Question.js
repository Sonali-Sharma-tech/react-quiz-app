
import React, { useState } from "react";
import { Typography, Radio, Row, Col, Button } from 'antd'
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import { ProgressBar } from "../../Common/ProgressBar";
import { CardWrapper } from "../../Common/CardWrapper";

import "./Questions.css"
import { Footer } from "../../Common/Footer";
import { OptionComponent } from "../../Common/OptionComponent";

const { Title } = Typography

export const Question = ({ questionsList }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userAnswerList, setUserAnswerList] = useState([])

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1)
    }

    const addUserAnswers = (checked, value) => {
        if (checked) {
            setUserAnswerList(prev => [...prev, value])
            questionsList[currentStep]['userAnswers'] = questionsList[currentStep]['userAnswers']?.length ? [...questionsList[currentStep]['userAnswers'], value] : [];
        } else {
            setUserAnswerList((prev) => prev.filter(answer => answer.toLowerCase() === value.toLowerCase()))
            questionsList[currentStep]['userAnswers'] = questionsList[currentStep]['userAnswers'].filter(answer => answer.toLowerCase() === value.toLowerCase())
        }
        console.log('questionsList', questionsList);
        console.log('answerList', userAnswerList);
    }

    return <>
        <Row offset={12} md={8} sm={12} xs={12} style={{ marginTop: 10 }}>
            <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }} >
                <CardWrapper>
                    <ProgressBar length={questionsList.length} userAnswerList={userAnswerList} />
                    <Title level={3} style={{ marginTop: 20 }}>{currentStep + 1}) {questionsList[currentStep].title}</Title>
                    {questionsList[currentStep].options
                        && questionsList[currentStep].options.map((option) => <OptionComponent value={option} addUserAnswers={addUserAnswers} />)}
                    <Footer actionLabel={"Next"} handleAction={handleNext} icon={<ArrowRightOutlined />} />
                </CardWrapper>
            </Col>
        </Row>


    </>
}
