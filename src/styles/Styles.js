export const useStyles = () => {
    const cardWrapper = {
        background: "rgb(254,254,254)",
     background: "linear-gradient(315deg, rgb(254, 254, 254) 17%, rgb(193, 136, 237) 90%)",
    }
    

    const cardWrapperBody = {
        display: "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        height: "90vh"
    }
    
    return {
        cardWrapper, cardWrapperBody
    }
}