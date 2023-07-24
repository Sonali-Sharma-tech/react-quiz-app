import React from "react"
import { Row, Col } from 'antd'

export const Layout = (props) => {
    return <>
        <Row offset={16} md={6} sm={12} xs={12} style={{ marginTop: 10 }}>
            <Col md={{ span: 6, offset: 9 }} xs={{ span: 24 }} >
                {props.children}
            </Col>
        </Row>
    </>
}