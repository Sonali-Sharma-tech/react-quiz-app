import React, { useEffect, useState } from 'react'
import { Checkbox, Radio } from 'antd'
import { useStyles } from '../styles/Styles';

export const OptionComponent = ({ options, addUserAnswers, multiselect }) => {
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const styles = useStyles();

    const addAnswers = (value) => {
        addUserAnswers(value);
        // setIsOptionSelected()
    }
    return <>
            {multiselect ? <>
                <Checkbox.Group  style={styles.fullWidth} onChange={addAnswers}>
                {options.length && options.map(option => <div style={isOptionSelected ? {...styles.selectedOption, ...styles.fullWidth} : {...styles.option, ...styles.fullWidth}}><Checkbox  value={option}>{option}</Checkbox></div>)}


            </Checkbox.Group>
            </> : <Radio.Group style={styles.fullWidth} onChange={(e) => addAnswers(e.target.value)}>
                {options.length && options.map(option => <div style={isOptionSelected ? styles.selectedOption : styles.option}><Radio value={option}>{option}</Radio></div>)}


            </Radio.Group>}
    </>
}