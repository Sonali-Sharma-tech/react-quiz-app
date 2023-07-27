import { useEffect, useState } from "react"
import { Typography, Space, Alert } from "antd"

import { CardWrapper, CardWrapperBody } from "../../../components/CardWrapper"
import { Layout } from "../../../components/Layout"
import { Footer } from "../../../components/Footer"
import { useResultStyles } from "../../../styles/ResultStyles"
import { useStyles } from "../../../styles/Styles"

const { Title } = Typography

export const Results = ({ questionsList }) => {
    const [wrongAnswersLength, setwrongAnswersLength] = useState(0);
    const styles = useResultStyles();
    const commonStyles = useStyles();

    useEffect(() => {
        findResult();
    }, [questionsList])


    const findResult = () => {
        let wrongAnswers = 0;
        questionsList.forEach((question) => {
            const correctSet = new Set(question.correctAnswers);
            if(question.userAnswers.length === question.correctAnswers.length) {
            wrongAnswers += question.userAnswers.filter((answer) => !correctSet.has(answer)).length;
            } else {
                wrongAnswers++;
            }
        });
        setwrongAnswersLength(wrongAnswers);
    }

    const refresh = () => {
        window.location.reload();
    }
    return <>
        <Layout>
            <CardWrapper>
                <CardWrapperBody>
                    <Title level={2} style={styles.resultTitle}>Your Result</Title>
                    <Space direction="vertical" style={commonStyles.fullWidth}>
                        <Alert message={`${questionsList.length - wrongAnswersLength} Correct Answers`} type="success" showIcon />
                        <Alert message={`${wrongAnswersLength} Wrong Answers`} type="error" showIcon />
                    </Space>
                    <Footer actionLabel={"Start Again"} handleAction={refresh} />
                </CardWrapperBody>
            </CardWrapper>
        </Layout>
    </>
}