
import React, { useState } from "react";
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import { ProgressBar } from "../../../components/ProgressBar";
import { CardWrapper, CardWrapperBody } from "../../../components/CardWrapper";

import { Footer } from "../../../components/Footer";
import { Layout } from "../../../components/Layout";
import { QuestionCard } from "./QuestionCard";


export const Question = ({ questionsList, handleShowResults }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isMandatory, setIsMandatory] = useState(false);
    const [questions, setQuestions] = useState([...questionsList])

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
            setQuestions([...questionsList])

        }
    }

    return <>
        <Layout>
            <CardWrapper>
                <CardWrapperBody>
                    <ProgressBar questionListLength={questions.length} current={currentStep} />
                    <QuestionCard currentStep={currentStep} questionsList={questions} addUserAnswers={addUserAnswers} isMandatory={isMandatory} />
                    <Footer actionLabel={"Next"} handleAction={handleNext} icon={<ArrowRightOutlined />} />
                </CardWrapperBody>
            </CardWrapper>
        </Layout>



    </>
}
