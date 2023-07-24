import React from "react"
import { Card } from 'antd'
import { useStyles } from "../styles/Styles"



export const CardWrapper = (props) => {
    const styles = useStyles();
    return <Card style={styles.cardWrapper}>{props.children}</Card>
}
export const CardWrapperBody = (props) => {
    const styles = useStyles();
    return <div style={{...styles.cardWrapperBody, ...props.style}}>{props.children}</div>
}