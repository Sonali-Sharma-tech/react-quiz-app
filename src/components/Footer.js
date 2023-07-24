import React from "react"
import { Button } from "antd"

export const Footer = ({ actionLabel, handleAction, icon }) => {
    return <div style={{
        display: " flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        // height: "100px",
        flexDirection: "column-reverse",
    }}>
        <Button type="primary" danger size="large" onClick={handleAction} icon={icon} style={{ width: "100%" }}>
            {actionLabel}
        </Button>
    </div>
}