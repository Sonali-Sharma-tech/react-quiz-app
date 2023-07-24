export const useLandingPageStyles = () => {
   
    const logo = {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
    }
    const landingContent = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const quizCircleCard = {
        height: "150px",
        width: "150px",
        borderRadius: "50%"
    }
    const quizCircleTitle = { color: "red", display: "flex", justifyContent: "center", fontWeight: 700 }
    return {
         logo, landingContent,quizCircleCard, quizCircleTitle
    }
}