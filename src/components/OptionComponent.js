import React, { useEffect, useState } from 'react'
import { Checkbox, Radio } from 'antd'

export const OptionComponent = ({ options, addUserAnswers, multiselect }) => {
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const addAnswers = (value) => {
        addUserAnswers(value);
        // setIsOptionSelected()
    }
    return <>
            {multiselect ? <>
                <Checkbox.Group  style={{width: "100%"}} onChange={addAnswers}>
                {options.length && options.map(option => <div style={{width: "100%"}} className={isOptionSelected ? "selected-option-class" : "option-class"}><Checkbox  value={option}>{option}</Checkbox></div>)}


            </Checkbox.Group>
            </> : <Radio.Group style={{width: "100%"}} onChange={(e) => addAnswers(e.target.value)}>
                {options.length && options.map(option => <div className={isOptionSelected ? "selected-option-class" : "option-class"}><Radio value={option}>{option}</Radio></div>)}


            </Radio.Group>}
    </>
}