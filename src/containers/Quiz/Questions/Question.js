
import React, { useEffect, useState } from "react";
import { Typography, Card } from 'antd'
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import { ProgressBar } from "../../../components/ProgressBar";
import { CardWrapper } from "../../../components/CardWrapper";

import "../../../styles/Questions.css"
import { Footer } from "../../../components/Footer";
import { OptionComponent } from "../../../components/OptionComponent";
import { Layout } from "../../../components/Layout";
import { useStyles } from "../../../styles/Styles";
import { useLandingPageStyles } from "../../../styles/LandingPageStyles";

const { Title } = Typography

export const Question = ({ questionsList, handleShowResults }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isMandatory, setIsMandatory] = useState(false);
    const styles = useLandingPageStyles();
    const commonStyles = useStyles();

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
            <CardWrapper >
                 <div style={commonStyles.cardWrapperBody}>
                <ProgressBar questionListLength={questionsList.length} current={currentStep} />
                    <Card style={{ borderRadius: "10px",  display: "flex", justifyContent: "space-between", flexDirection: "column", margin: "auto -15px", height: "70%"}}>
               
                      <div>
                      <Title level={3} style={{ marginTop: 20 }}>{currentStep + 1}) {questionsList[currentStep].title}</Title>
                        
                        {questionsList[currentStep].options
                            && <OptionComponent options={questionsList[currentStep].options} addUserAnswers={addUserAnswers} multiselect={questionsList[currentStep].multiselect} />}
                       {isMandatory && <p style={{ color: "red" }}>(*) Please answer the question</p>}
                      </div>
      
                        </Card>
                      <Footer actionLabel={"Next"} handleAction={handleNext} icon={<ArrowRightOutlined />} />
                        
                </div>
                
            </CardWrapper>
        </Layout>



    </>
}
