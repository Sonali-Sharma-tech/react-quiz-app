export const useQuestionStyles = () => {

    const questionCard = {
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        margin: "auto -15px",
        height: "70%"
    }

    const questionTitle = {
        marginTop: 20
    }

    const mandatoryMessage = { color: "red" }
    return {
        questionCard, questionTitle, mandatoryMessage
    }
}