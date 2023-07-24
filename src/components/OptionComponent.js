import React, { useEffect, useState } from 'react'
import { Checkbox, Radio } from 'antd'
import { useStyles } from '../styles/Styles';

export const OptionComponent = ({ userAnswers, options, addUserAnswers, multiselect }) => {
    const styles = useStyles();
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const addAnswers = (value) => {
        addUserAnswers(value);
    }



    return <>
            {multiselect ? <>
                <Checkbox.Group  style={styles.fullWidth} onChange={addAnswers}>
                {options.length && options.map(option => <div style={isOptionSelected ? {...styles.selectedOption, ...styles.fullWidth} : {...styles.option, ...styles.fullWidth}}><Checkbox  value={option}>{option}</Checkbox></div>)}
            </Checkbox.Group>
            </> : <Radio.Group style={styles.fullWidth}>
                {options.length && options.map(option => <RadioOption userAnswers={userAnswers} option={option} styles={styles} addUserAnswers={addUserAnswers}/> )}
            </Radio.Group>}
    </>
}

export const RadioOption = ({userAnswers, option, styles, addUserAnswers}) => {
 
    return <div style={(userAnswers?.length && userAnswers.includes(option)) ? styles.selectedOption : styles.option}>
    <Radio value={option} onChange={(e) => addUserAnswers(e.target.value)}  >{option}</Radio></div>
}

