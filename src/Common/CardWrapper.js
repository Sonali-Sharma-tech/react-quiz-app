import React from "react"
import { Card } from 'antd'

export const CardWrapper = (props) => {
    let styles = {
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        ...props.style
    }
    return  <Card style={styles}>{props.children}</Card>
}