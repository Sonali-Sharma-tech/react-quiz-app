import React from "react"
import { Button } from "antd"

export const Footer = ({actionLabel, handleAction, icon }) => {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, width: "auto" }}>
        <Button type="primary" danger size="large" onClick={handleAction} icon={icon}>
        {actionLabel}
        </Button>
    </div>
}