import React, { useEffect } from "react"
import { Progress } from 'antd'

export const ProgressBar = ({ length, current }) => {
    
    const calculatePercent = () => {
        const percent = ((current / length) * 100).toFixed(0);
        return percent;
    }
    return <>
        <div style={{display: "flex", justifyContent: "center", margin: 10}}>
            <Progress type="circle" percent={calculatePercent()} />
        </div>
    </>


}