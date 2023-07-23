import React from "react"
import { Col, Row, Card, Typography, Button } from "antd"

const { Title } = Typography

export const LandingPage = () => {
    return <>
        <div class="landing-page">
            <Row md={8} sm={12} xs={12}  style={{marginTop: 10}}>
                <Col md={{span: 8, offset: 8}}  xs={{span: 24}} >
                    <Card style={{
                        border: "2px solid black",
                        display: "flex",
                        justifyContent: "center", alignItems: "center", 
                       
                    }}>
                        <div >
                            <svg width="200" height="200" viewBox="0 0 143 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-fd0a1cce-4 hXbcxT"><title>Upraised</title><g clip-path="url(#upraised-logo_svg__a)"><g opacity="0.28"><path d="M12.32 25.376c0-.609-.5-1.103-1.12-1.103-.618 0-1.12.494-1.12 1.103v5.52c0 .61.502 1.104 1.12 1.104.62 0 1.12-.494 1.12-1.104v-5.52z" fill="#FF7304"></path><path d="M12.32 25.376c0-.609-.5-1.103-1.12-1.103-.618 0-1.12.494-1.12 1.103v5.52c0 .61.502 1.104 1.12 1.104.62 0 1.12-.494 1.12-1.104v-5.52z" fill="url(#upraised-logo_svg__b)" fill-opacity="0.19"></path></g><path d="M12.32 29.793c0-.61-.502-1.104-1.12-1.104-.619 0-1.12.494-1.12 1.104v1.103c0 .61.501 1.104 1.12 1.104.618 0 1.12-.494 1.12-1.104v-1.103z" fill="#FF7304"></path><path d="M12.32 29.793c0-.61-.502-1.104-1.12-1.104-.619 0-1.12.494-1.12 1.104v1.103c0 .61.501 1.104 1.12 1.104.618 0 1.12-.494 1.12-1.104v-1.103z" fill="url(#upraised-logo_svg__c)" fill-opacity="0.19"></path><path d="M17.92 25.376c0-.609-.502-1.103-1.12-1.103-.619 0-1.12.494-1.12 1.103v5.52c0 .61.501 1.104 1.12 1.104.618 0 1.12-.494 1.12-1.104v-5.52z" fill="#FF7304"></path><path d="M17.92 25.376c0-.609-.502-1.103-1.12-1.103-.619 0-1.12.494-1.12 1.103v5.52c0 .61.501 1.104 1.12 1.104.618 0 1.12-.494 1.12-1.104v-5.52z" fill="url(#upraised-logo_svg__d)" fill-opacity="0.19"></path><path d="M12.542.827.205 22.07a1.447 1.447 0 0 0 .122 1.644c.185.23.437.4.722.488.284.087.59.088.875.003l11.34-4.27c.48-.15.994-.15 1.473 0l11.34 4.27a1.495 1.495 0 0 0 1.597-.491 1.452 1.452 0 0 0 .122-1.644L15.459.827a1.667 1.667 0 0 0-.615-.61 1.7 1.7 0 0 0-1.687 0 1.667 1.667 0 0 0-.615.61z" fill="#FF7304"></path><path d="M12.542.827.205 22.07a1.447 1.447 0 0 0 .122 1.644c.185.23.437.4.722.488.284.087.59.088.875.003l11.34-4.27c.48-.15.994-.15 1.473 0l11.34 4.27a1.495 1.495 0 0 0 1.597-.491 1.452 1.452 0 0 0 .122-1.644L15.459.827a1.667 1.667 0 0 0-.615-.61 1.7 1.7 0 0 0-1.687 0 1.667 1.667 0 0 0-.615.61z" fill="url(#upraised-logo_svg__e)" fill-opacity="0.19"></path></g><path d="M49.344 9.028V22.42H45.24v-1.824c-.416.592-.984 1.072-1.704 1.44-.704.352-1.488.528-2.352.528-1.024 0-1.928-.224-2.712-.672-.784-.464-1.392-1.128-1.824-1.992-.432-.864-.648-1.88-.648-3.048V9.028h4.08V16.3c0 .896.232 1.592.696 2.088.464.496 1.088.744 1.872.744.8 0 1.432-.248 1.896-.744.464-.496.696-1.192.696-2.088V9.028h4.104zm6.812 1.896c.4-.624.952-1.128 1.656-1.512.704-.384 1.528-.576 2.472-.576 1.104 0 2.104.28 3 .84.896.56 1.6 1.36 2.112 2.4.528 1.04.792 2.248.792 3.624s-.264 2.592-.792 3.648c-.512 1.04-1.216 1.848-2.112 2.424-.896.56-1.896.84-3 .84-.928 0-1.752-.192-2.472-.576-.704-.384-1.256-.88-1.656-1.488v8.256h-4.104V9.028h4.104v1.896zm5.856 4.776c0-1.024-.288-1.824-.864-2.4-.56-.592-1.256-.888-2.088-.888-.816 0-1.512.296-2.088.888-.56.592-.84 1.4-.84 2.424s.28 1.832.84 2.424c.576.592 1.272.888 2.088.888.816 0 1.512-.296 2.088-.888.576-.608.864-1.424.864-2.448zm10.193-4.44a5.3 5.3 0 0 1 1.8-1.728 4.576 4.576 0 0 1 2.4-.648v4.344h-1.128c-1.024 0-1.792.224-2.304.672-.512.432-.768 1.2-.768 2.304v6.216H68.1V9.028h4.104v2.232zm5.105 4.44c0-1.376.257-2.584.769-3.624.528-1.04 1.24-1.84 2.136-2.4.896-.56 1.896-.84 3-.84.944 0 1.768.192 2.472.576.72.384 1.272.888 1.656 1.512V9.028h4.104V22.42h-4.104v-1.896c-.4.624-.96 1.128-1.68 1.512-.704.384-1.528.576-2.472.576-1.088 0-2.08-.28-2.976-.84-.896-.576-1.608-1.384-2.136-2.424-.512-1.056-.768-2.272-.768-3.648zm10.033.024c0-1.024-.288-1.832-.864-2.424a2.73 2.73 0 0 0-2.064-.888c-.816 0-1.512.296-2.088.888-.56.576-.84 1.376-.84 2.4s.28 1.84.84 2.448c.576.592 1.272.888 2.088.888a2.73 2.73 0 0 0 2.064-.888c.576-.592.864-1.4.864-2.424zm8.897-8.088c-.72 0-1.312-.208-1.776-.624a2.116 2.116 0 0 1-.672-1.584c0-.64.224-1.168.672-1.584.464-.432 1.056-.648 1.776-.648.704 0 1.28.216 1.728.648.464.416.696.944.696 1.584 0 .624-.232 1.152-.696 1.584-.448.416-1.024.624-1.728.624zm2.04 1.392V22.42h-4.104V9.028h4.104zm8.182 13.584c-1.168 0-2.208-.2-3.12-.6-.912-.4-1.632-.944-2.16-1.632a4.386 4.386 0 0 1-.888-2.352h4.056c.048.464.264.84.648 1.128.384.288.856.432 1.416.432.512 0 .904-.096 1.176-.288.288-.208.432-.472.432-.792 0-.384-.2-.664-.6-.84-.4-.192-1.048-.4-1.944-.624-.96-.224-1.76-.456-2.4-.696a4.309 4.309 0 0 1-1.656-1.176c-.464-.544-.696-1.272-.696-2.184 0-.768.208-1.464.624-2.088.432-.64 1.056-1.144 1.872-1.512.832-.368 1.816-.552 2.952-.552 1.68 0 3 .416 3.96 1.248.976.832 1.536 1.936 1.68 3.312h-3.792a1.617 1.617 0 0 0-.624-1.104c-.336-.272-.784-.408-1.344-.408-.48 0-.848.096-1.104.288a.851.851 0 0 0-.384.744c0 .384.2.672.6.864.416.192 1.056.384 1.92.576.992.256 1.8.512 2.424.768.624.24 1.168.64 1.632 1.2.48.544.728 1.28.744 2.208 0 .784-.224 1.488-.672 2.112-.432.608-1.064 1.088-1.896 1.44-.816.352-1.768.528-2.856.528zm20.319-7.104c0 .384-.024.784-.072 1.2h-9.288c.064.832.328 1.472.792 1.92.48.432 1.064.648 1.752.648 1.024 0 1.736-.432 2.136-1.296h4.368a5.916 5.916 0 0 1-1.224 2.376 5.958 5.958 0 0 1-2.184 1.656c-.88.4-1.864.6-2.952.6-1.312 0-2.48-.28-3.504-.84a5.975 5.975 0 0 1-2.4-2.4c-.576-1.04-.864-2.256-.864-3.648 0-1.392.28-2.608.84-3.648a5.975 5.975 0 0 1 2.4-2.4c1.024-.56 2.2-.84 3.528-.84 1.296 0 2.448.272 3.456.816a5.781 5.781 0 0 1 2.352 2.328c.576 1.008.864 2.184.864 3.528zm-4.2-1.08c0-.704-.24-1.264-.72-1.68-.48-.416-1.08-.624-1.8-.624-.688 0-1.272.2-1.752.6-.464.4-.752.968-.864 1.704h5.136zm5.309 1.272c0-1.376.256-2.584.768-3.624.528-1.04 1.24-1.84 2.136-2.4.896-.56 1.896-.84 3-.84.88 0 1.68.184 2.4.552.736.368 1.312.864 1.728 1.488V4.66h4.104v17.76h-4.104V20.5c-.384.64-.936 1.152-1.656 1.536-.704.384-1.528.576-2.472.576-1.104 0-2.104-.28-3-.84-.896-.576-1.608-1.384-2.136-2.424-.512-1.056-.768-2.272-.768-3.648zm10.032.024c0-1.024-.288-1.832-.864-2.424a2.73 2.73 0 0 0-2.064-.888c-.816 0-1.512.296-2.088.888-.56.576-.84 1.376-.84 2.4s.28 1.84.84 2.448c.576.592 1.272.888 2.088.888a2.73 2.73 0 0 0 2.064-.888c.576-.592.864-1.4.864-2.424z" fill="#212121"></path><defs><linearGradient id="upraised-logo_svg__b" x1="11.201" y1="24.273" x2="11.201" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="upraised-logo_svg__c" x1="11.2" y1="28.689" x2="11.2" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="upraised-logo_svg__d" x1="16.8" y1="24.273" x2="16.8" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="upraised-logo_svg__e" x1="14" y1="-0.007" x2="14" y2="24.267" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><clipPath id="upraised-logo_svg__a"><path fill="#fff" d="M0 0h28v32H0z"></path></clipPath></defs></svg>
                        </div>
                        <Card style={{ borderRadius: "50%", backgroundColor: "#f13020" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Title>Quiz</Title>
                            </div>
                        </Card>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, width: "auto" }}>
                            <Button type="primary" danger size="large">
                                Start
                            </Button>
                        </div>

                    </Card>

                </Col>
            </Row>

        </div>
    </>
}