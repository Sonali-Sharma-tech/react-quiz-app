import { Card, Typography } from "antd"
import {  OptionComponent } from "../../../components/OptionComponent"
import { useQuestionStyles } from "../../../styles/QuestionStyles"

const { Title } = Typography

export const QuestionCard = ({ currentStep, questionsList, addUserAnswers, isMandatory }) => {
        const styles = useQuestionStyles();
    return <>
        <Card style={styles.questionCard}>
            <Title level={3} style={styles.questionTitle}>{currentStep + 1}) {questionsList[currentStep].title}</Title>
            {questionsList[currentStep].options
                && <OptionComponent userAnswers={questionsList[currentStep]['userAnswers']} options={questionsList[currentStep].options} addUserAnswers={addUserAnswers} multiselect={questionsList[currentStep].multiselect} />}
            {isMandatory && <p style={styles.mandatoryMessage}>(*) Please answer the question</p>}
        </Card>
    </>
}