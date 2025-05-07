import { useState } from "react";
function ControlledComponents(){
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return(
        <form>
            <label>
                Input Value:
                <input type="text" value={inputValue} onChange={handleChange}/>
            </label>
            <p>Input value: {inputValue}</p>
        </form>
    );
}

export default ControlledComponents;