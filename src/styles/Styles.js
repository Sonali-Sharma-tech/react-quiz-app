export const useStyles = () => {
    // custom card wrapper
    const cardWrapper = {
     background: "linear-gradient(315deg, rgb(254, 254, 254) 17%, rgb(193, 136, 237) 90%)",
    }
    
    // custom card wrapper body
    const cardWrapperBody = {
        display: "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        height: "90vh"
    }

    // custom footer
    const footer = {
        display: " flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        flexDirection: "column-reverse",
    }

    // full width
    const fullWidth = {
        width: "100%"
    }

    // 
    const option = {
        height:" 30px",
        background: "#cae4fb",
        padding: "10px",
        borderRadius: "15px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
    }

    const selectedOption = { height: "30px",
        background: "transparent",
        padding: "10px",
        borderRadius: "15px",
        margin: "10px",
        border:" 2px solid green",
        display: "flex",
        alignItems: "center"
    }

    const progressBar = {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "11%",
        left: "40%",
        zIndex: 1,
        background: "white",
        borderRadius: "50%",
    }
    return {
        cardWrapper, cardWrapperBody, footer, fullWidth, option, selectedOption, progressBar
    }
}