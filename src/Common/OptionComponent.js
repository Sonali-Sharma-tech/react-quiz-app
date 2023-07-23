import React, { useState} from 'react'
import { Checkbox } from 'antd'

export const OptionComponent = ({value, addUserAnswers}) => {
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const addAnswers = (e) => {
        addUserAnswers(e.target.checked, value);
        setIsOptionSelected(e.target.checked)
    }
    return <div  className={isOptionSelected ? "selected-option-class" : "option-class"}>
        <Checkbox style={{color: "green"}} key={`${value}`} value={value} onChange={(e) => addAnswers(e)}>{value}
        </Checkbox>
    </div>
}