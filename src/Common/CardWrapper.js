import React from "react"
import { Card } from 'antd'

export const CardWrapper = (props) => {
    return  <Card style={props.style}>{props.children}</Card>
}