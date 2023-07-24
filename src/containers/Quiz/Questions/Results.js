import { useEffect, useState } from "react"
import { Typography, Space, Alert } from "antd"

import { CardWrapper } from "../../../components/CardWrapper"
import { Layout } from "../../../components/Layout"

const { Title } = Typography

export const Results = ({ questionsList }) => {
    const [correctAnswersLength, setCorrectAnswersLength] = useState(0)
    useEffect(() => {
        findResult();
    }, [])

    const findResult = () => {
        let correctAnswers = []
        questionsList.forEach(question => {
            correctAnswers = [...correctAnswers, ...question.correctAnswers.filter(answer => question.userAnswers.includes(answer))]
        })
        setCorrectAnswersLength(correctAnswers.length)
        console.log(correctAnswers.length)
    }
    return <>
        <Layout>
            <CardWrapper>
                <Title level={2}>Your Result</Title>

                {/* <ReactSpeedometer
                    maxValue={150}
                    value={70.7}
                    valueFormat={'d'}
                    customSegmentStops={[0, 50, 70, 90, 150]}
                    segmentColors={['#bf616a', '#d08770', '#ebcb8b', '#a3be8c']}
                    textColor={textColor}
                />
                <ReactSpeedometer
                    maxValue={150}
                    value={70.7}
                    segments={5}
                    valueFormat={'d'}
                    textColor={textColor}
                /> */}

                <Space direction="vertical" style={{ width: '100%' }}>
                    <Alert message={`${correctAnswersLength} Correct Answers`} type="success" showIcon />
                    <Alert message={`${questionsList.length - correctAnswersLength} Wrong Answers`} type="error" showIcon />
                </Space>
            </CardWrapper>
        </Layout>
    </>
}