import { useEffect, useState } from "react"
import { Typography, Space, Alert } from "antd"

import { CardWrapper } from "../../../components/CardWrapper"
import { Layout } from "../../../components/Layout"

const { Title } = Typography

export const Results = ({ questionsList }) => {
    const [wrongAnswersLength, setwrongAnswersLength] = useState(0)
    useEffect(() => {
        findResult();
    }, [])

    const findResult = () => {
        let wrongAnswers = 0
        questionsList.forEach(question => {
            question.userAnswers.forEach(answer => {
                if(!question.correctAnswers.includes(answer)) {
                    wrongAnswers++;
                }
                
            })
        })
        setwrongAnswersLength(wrongAnswers)
    }
    return <>
        <Layout>
            <CardWrapper>
                <Title level={2}>Your Result</Title>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Alert message={`${questionsList.length - wrongAnswersLength} Correct Answers`} type="success" showIcon />
                    <Alert message={`${wrongAnswersLength} Wrong Answers`} type="error" showIcon />
                </Space>
            </CardWrapper>
        </Layout>
    </>
}