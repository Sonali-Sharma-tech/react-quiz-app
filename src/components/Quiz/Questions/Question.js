
import React, { useEffect, useState } from "react";
import { Typography, Radio, Row, Col, Button } from 'antd'
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import { ProgressBar } from "../../../Common/ProgressBar";
import { CardWrapper } from "../../../Common/CardWrapper";

import "./Questions.css"
import { Footer } from "../../../Common/Footer";
import { OptionComponent } from "../../../Common/OptionComponent";
import { Layout } from "../../../Common/Layout";

const { Title } = Typography

export const Question = ({ questionsList, handleShowResults }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isMandatory, setIsMandatory] = useState(false);

    const handleNext = () => {
        if (currentStep === questionsList.length - 1) {
            handleShowResults();
        } else {
            if (questionsList[currentStep]?.['userAnswers']?.length) {
                setCurrentStep((prev) => prev + 1);
                setIsMandatory(false)
            } else {
                // Toast message
                setIsMandatory(true)
            }
        }
    }

    const addUserAnswers = (values) => {
        if (values || values.length) {
            setIsMandatory(false)
            questionsList[currentStep]['userAnswers'] = Array.isArray(values) ? [...values] : [values];

        }
    }

    return <>
        <Layout>
            <CardWrapper>
                <ProgressBar questionListLength={questionsList.length} current={currentStep} />
                <Title level={3} style={{ marginTop: 20 }}>{currentStep + 1}) {questionsList[currentStep].title}</Title>
                {isMandatory && <p style={{ color: "red" }}>(*) Please answer the question</p>}
                {questionsList[currentStep].options
                    && <OptionComponent options={questionsList[currentStep].options} addUserAnswers={addUserAnswers} multiselect={questionsList[currentStep].multiselect} />}
                <Footer actionLabel={"Next"} handleAction={handleNext} icon={<ArrowRightOutlined />} />
            </CardWrapper>
        </Layout>



    </>
}
