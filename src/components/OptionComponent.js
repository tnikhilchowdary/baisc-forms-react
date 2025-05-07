import React, { useState } from "react";


function OptionComponent(){
    const [selectedOption, setSeletctedOption] = useState('option1');
    const handleDropChange = (event) => {
        setSeletctedOption(event.target.value);
    }

    return(
        <div>
            <label>
                Selelct an Option:
                <select value={selectedOption} onChange={handleDropChange}> 
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                    <option value="option3">Option3</option>
                </select>
            </label>
            <p>Selected Option: {selectedOption}</p>
        </div>
    );

}

export default OptionComponent;