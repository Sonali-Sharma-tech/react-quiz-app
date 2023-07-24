import React from "react"
import { Button } from "antd"
import { useStyles } from "../styles/Styles"

export const Footer = ({ actionLabel, handleAction, icon }) => {
    const styles = useStyles();
    return <div style={styles.footer}>
        <Button type="primary" danger size="large" onClick={handleAction} icon={icon} style={styles.fullWidth}>
            {actionLabel}
        </Button>
    </div>
}