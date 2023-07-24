import React from "react"
import { Row, Col } from 'antd'

export const Layout = (props) => {
    return <>
        <Row offset={12} md={8} sm={12} xs={12} style={{ marginTop: 10 }}>
            <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }} >
                {props.children}
            </Col>
        </Row>
    </>
}