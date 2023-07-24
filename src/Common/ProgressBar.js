import React, { useEffect, useState } from "react"
import { Progress } from 'antd'

export const ProgressBar = ({ questionListLength, current }) => {

    const calculatePercent = () => {
        const stepsToPercent = ((current + 1) * (100 / questionListLength)).toFixed(2);
        return stepsToPercent;
    }
    return <>
        <div style={{display: "flex", justifyContent: "center", margin: 10}}>
            <Progress type="circle" percent={calculatePercent()} format={(percent) => `${current + 1}/${questionListLength}`} />
        </div>
    </>


}