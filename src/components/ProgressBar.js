import React, { useEffect, useState } from "react"
import { Progress } from 'antd'

export const ProgressBar = ({ questionListLength, current }) => {

    const calculatePercent = () => {
        const stepsToPercent = ((current + 1) * (100 / questionListLength)).toFixed(2);
        return stepsToPercent;
    }
    return <>
        <div style={{
            display: "flex",
            justifyContent: "center",
            /* margin: 20px, */
            position: "absolute",
            top: "11%",
            left: "40%",
            zIndex: 1,
            background: "white",
            borderRadius: "50%",
        }}>
            <Progress size="small" type="circle" percent={calculatePercent()} format={(percent) => `${current + 1}/${questionListLength}`} />
        </div>
    </>


}