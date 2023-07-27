import React from 'react'
import { Checkbox, Radio } from 'antd'
import { useStyles } from '../styles/Styles';

export const OptionComponent = ({ userAnswers, options, addUserAnswers, multiselect }) => {
    const styles = useStyles();
    return <>
        {multiselect ? <>
            <Checkbox.Group style={styles.fullWidth} onChange={addUserAnswers}>
                {options.length && options.map(option =>
                    <Option multiselect={multiselect} userAnswers={userAnswers} option={option} styles={styles} addUserAnswers={addUserAnswers} />
                )}
            </Checkbox.Group>
        </> : <Radio.Group style={styles.fullWidth}>
            {options.length && options.map(option => <Option multiselect={multiselect} userAnswers={userAnswers} option={option} styles={styles} addUserAnswers={addUserAnswers} />)}
        </Radio.Group>}
    </>
}



export const Option = ({ multiselect, userAnswers, option, styles, addUserAnswers }) => {
    return <> {multiselect ? 
            <div style={(userAnswers?.length && userAnswers.includes(option)) ? {...styles.selectedOption, ...styles.fullWidth} : {...styles.option, ...styles.fullWidth}}>
                <Checkbox value={option}  >{option}</Checkbox>
            </div>
             :
             <div style={(userAnswers?.length && userAnswers.includes(option)) ? styles.selectedOption : styles.option}>
                <Radio value={option} onChange={(e) => addUserAnswers(e.target.value)}  >{option}</Radio>
            </div>
            }
    </>
}

