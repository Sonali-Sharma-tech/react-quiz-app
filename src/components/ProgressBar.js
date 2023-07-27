import React from "react"
import { Progress } from 'antd'
import { useStyles } from "../styles/Styles"

export const ProgressBar = ({ questionListLength, current }) => {
    const styles = useStyles();
    const calculatePercent = () => {
        const stepsToPercent = ((current + 1) * (100 / questionListLength)).toFixed(2);
        return stepsToPercent;
    }
    return <>
        <div style={styles.progressBar}>
            <Progress size="small" type="circle" percent={calculatePercent()} format={(percent) => `${current + 1}/${questionListLength}`} />
        </div>
    </>


}